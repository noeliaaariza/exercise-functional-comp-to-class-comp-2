import PropTypes from "prop-types";
import "../css/Contador.css";
import { Component } from "react";

class Contador extends Component {
  render() {
    return <div className="contador">{this.props.numClics}</div>;
  }
}

export default Contador;

Contador.propTypes = {
  numClics: PropTypes.number,
};
