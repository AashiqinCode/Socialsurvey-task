import React, { Component } from "react";
import Form from "./Form";
export default class App extends Component {
  state = {
    names: [
      /*
        Object structure
          {id: 1,name:'Aashiq'}
      */
    ]
  };

  handleNameChange(e) {
    this.setState(
      {
        names: { ...this.state.names, name: e.target.value }
      },
      console.log(this.state.names)
    );
  }

  renderTable() {
    return this.state.names
      .sort((a, b) => a.id - b.id)
      .map((eachName) => {
        const { id, name } = eachName;
        return (
          <tr key={id}>
            <td>{id}</td>
            <td onChange={(e) => this.handleNameChange(e)}>
              <div contentEditable>{name}</div>{" "}
            </td>
            <td>
              <input
                type="button"
                value="Delete"
                onClick={() => this.deleteName(eachName.id)}
              />
            </td>
          </tr>
        );
      });
  }

  deleteName = (id) => {
    this.state.names &&
      this.setState({
        names: this.state.names.filter((name) => name.id !== id)
      });
  };

  addName = (newName) => {
    this.setState((currentState) => {
      const newNames = [...currentState.names];
      newNames.push(newName);
      return {
        names: newNames
      };
    });
  };

  render() {
    return (
      <>
        <Form onSubmit={this.addName} names={this.state.names} />
        <br />
        <table id="details">
          <tbody>
            <tr>
              <th>ID</th>
              <th>Names</th>
              <th>Operation</th>
            </tr>
            {this.renderTable()}
          </tbody>
        </table>
      </>
    );
  }
}
