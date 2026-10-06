import React, { Component } from 'react'

export default class TablaMultiplicarV2 extends Component {
    selectNumero = React.createRef();
    generarTabla = (event) => {
        event.preventDefault();
        let numero = parseInt(this.selectNumero.current.value);
        let aux = [];
        for (var i = 1; i <= 10; i++){
            let operacion = numero + " * " + i;
            let resultado = numero * i;
            aux.push(<tr key={i}>
                <td>{operacion}</td>
                <td>{resultado}</td>
            </tr>);
        }
        this.setState({
            tabla: aux
        })
    }

    generarNumeros = () => {
        let aux = [];
        for (var i = 1; i <= 5; i++){
            let aleat = parseInt(Math.random() * 50) + 1;
            aux.push(aleat);
        }
        this.setState({
            numeros: aux
        })
    }

    state = {
        tabla: [],
        numeros: []
    }

    componentDidMount = () =>{
        this.generarNumeros();
    }
  render() {
    return (
      <div>
        <h1 style={{color:"blue"}}>Tabla Multiplicar V2</h1>
        <button onClick={this.generarNumeros}>
            Generar números
        </button>
        <form onSubmit={this.generarTabla}>
            <label>Número: </label>
            <select ref={this.selectNumero}>
                {
                    this.state.numeros.map((num, index) => {
                        return (<option>{num}</option>)
                    })
                }
            </select>
            <button>Mostrar tabla</button>
        </form>
        <table border="1">
            <thead>
                <tr>
                    <th>Operación</th>
                    <th>Resultado</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.tabla.map((fila, index) => {
                        return (fila)
                    })
                }
            </tbody>
        </table>
      </div>
    )
  }
}