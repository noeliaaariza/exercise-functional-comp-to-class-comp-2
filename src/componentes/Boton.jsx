import PropTypes from "prop-types";
import "../css/Boton.css";

import { Component } from "react";

class Boton extends Component {
  render() {
    return (
      <button
        className={this.props.esBotonDeClic ? "boton-clic" : "boton-reiniciar"}
        onClick={this.props.handleClick}
      >
        {this.props.texto}
      </button>
    );
  }
}

export default Boton;

Boton.propTypes = {
  texto: PropTypes.string,
  esBotonDeClic: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
};
