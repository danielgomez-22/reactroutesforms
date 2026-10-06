import React, { Component } from 'react'

export default class TablaMultiplicar extends Component {
    cajaNumero = React.createRef();
    generarTabla = (event) => {
        event.preventDefault();
        let prueba = [];
        let operacion = []
        let numero = parseInt(this.cajaNumero.current.value);
        
        for (let i = 1; i <= 10; i++) {
            operacion.push(numero + "*" + i)
            prueba.push(numero * i);
            operacion.push(numero + " * " + i)
        }
        
        this.setState({
            numeros: prueba
        })

    }

    state = {
        numeros: []
    }
  render() {
    return (
      <div>
        <h1>Tabla de multiplicar</h1>
        <form onSubmit={this.generarTabla}>
            <label>Introduzca Numero</label>
            <input type='number' ref={this.cajaNumero}/>
            <button>Generar Tabla</button>
        </form>
        <ul>
            {this.state.numeros.map((num, index) => {
                return(<li key={index}>{num}</li>)
            })}
        </ul>
      </div>
    )
  }
}
