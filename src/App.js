import React, { Component } from "react";
import Header from "./Componentes/Header";
import AgregarCita from "./Componentes/AgregarCita";
import ListaCitas from "./Componentes/ListaCitas";

class App extends Component {
  state = {
    citas: []
  };

  componentDidMount() {
    const citasLS = localStorage.getItem("citas");
    if (citasLS) {
      this.setState({
        citas: JSON.parse(citasLS)
      });
    }
  }
  componentDidUpdate() {
    localStorage.setItem("citas", JSON.stringify(this.state.citas));
  }

  crearCita = nuevaCita => {
    const citas = [...this.state.citas, nuevaCita];
    this.setState({
      citas
    });
  };

  borraCita = id => {
    //Obtener copia del state
    const citasActuales = [...this.state.citas];
    //Borrar el elemento del state
    const citas = citasActuales.filter(cita => cita.id !== id);
    //Actualizar el estate
    this.setState({
      citas
    });
  };

  render() {
    return (
      <div className="container">
        <Header titulo={"Citas de la clinica"} />
        <div className="row">
          <div className="col-md-6">
            <AgregarCita crearCita={this.crearCita} />
          </div>
          <div className="col-md-6">
            <ListaCitas citas={this.state.citas} borrarCita={this.borraCita} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
