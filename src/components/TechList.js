import React, { Component } from "react";
import TechItem from "./TechItem";

class TechList extends Component {
  // todo estado no react é imutável, não podemos alterar ele diretamente
  state = {
    newTech: "",
    techs: ["Node.js", "ReactJS", "React Native"]
  };

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
