import { Component } from "react";
import "./App.css";
import Boton from "./componentes/Boton";
import Contador from "./componentes/Contador";
import logo from "./img/fcc_primary.svg";

class App extends Component {
  constructor() {
    super();
    this.state = {
      numClics: 0,
    };
    this.handleClick = this.handleClick.bind(this);
    this.reiniciarContador = this.reiniciarContador.bind(this);
  }
  handleClick() {
    this.setState(({ numClics }) => ({ numClics: numClics + 1 }));
  }

  reiniciarContador() {
    this.setState({ numClics: 0 });
  }
  render() {
    return (
      <div className="App">
        <div className="freecodecamp-logo-contenedor">
          <img
            className="freecodecamp-logo"
            src={logo}
            alt="Logo de freeCodeCamp"
          />
        </div>
        <div className="contenedor-principal">
          <Contador numClics={this.state.numClics} />
          <Boton
            texto="Click"
            esBotonDeClic={true}
            handleClick={this.handleClick}
          />
          <Boton
            texto="Reiniciar"
            esBotonDeClic={false}
            handleClick={this.reiniciarContador}
          />
        </div>
      </div>
    );
  }
}

// function App() {
//   const [numClics, setNumClics] = useState(0);

//   const handleClick = () => {
//     setNumClics(numClics + 1);
//   };

//   const reiniciarContador = () => {
//     setNumClics(0);
//   };
//   return (
//     <div className="App">
//       <div className="freecodecamp-logo-contenedor">
//         <img
//           className="freecodecamp-logo"
//           src={logo}
//           alt="Logo de freeCodeCamp"
//         />
//       </div>
//       <div className="contenedor-principal">
//         <Contador numClics={numClics} />
//         <Boton texto="Click" esBotonDeClic={true} handleClick={handleClick} />
//         <Boton
//           texto="Reiniciar"
//           esBotonDeClic={false}
//           handleClick={reiniciarContador}
//         />
//       </div>
//     </div>
//   );
// }

export default App;
