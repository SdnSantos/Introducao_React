import React, { Component } from "react";
import TechItem from "./TechItem";

class TechList extends Component {
  // todo estado no react é imutável, não podemos alterar ele diretamente
  state = {
    newTech: "",
    techs: []
  };

  // Executado assim que o componente aparece na tela
  componentDidMount() {
    const techs = localStorage.getItem("techs");

    if (techs) {
      this.setState({ techs: JSON.parse(techs) });
    }
  }

  // Executado sempre que houver alterações nas props ou estado
  // parâmetros antes da alteração
  componentDidUpdate(prevProps, prevState) {
    // se o estado anterior está diferente de agora
    if (prevState.techs !== this.state.techs) {
      localStorage.setItem("techs", JSON.stringify(this.state.techs));
    }
  }

  // Executado quando o componente deixa de existir
  componentWillUnmount() {}

  // FUNÇÕES QUE IRÃO MANIPULAR O ESTADO
  // DEVEM FICAR NO MESMO COMPONENTE (ARQUIVO)

  // precisa ser no formato arrow function para ter acesso ao this
  handleInputChange = e => {
    this.setState({ newTech: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    // primeira posição copio todo o array com o spread
    // segunda posição eu adiciono o novo elemento
    // setState copia o estado, e aplica as alterações
    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: ""
    });
  };

  handleDelete = tech => {
    this.setState({ techs: this.state.techs.filter(t => t !== tech) });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.techs.map(tech => (
            <TechItem
              key={tech}
              // enviou como parâmetro para TechItem ==>
              tech={tech}
              onDelete={() => this.handleDelete(tech)}
              // <==
            />
          ))}
        </ul>
        <input
          type="text"
          onChange={this.handleInputChange}
          // boa prática para caso o valor sofra alteraçao por qualquer
          // outro motivo, o input atualizará também
          value={this.state.newTech}
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default TechList;
