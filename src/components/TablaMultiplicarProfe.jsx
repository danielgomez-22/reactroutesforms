import React, { Component } from 'react'

export default class TablaMultiplicar extends Component {
    cajaNumero = React.createRef();
    generarTabla = (event) => {
        event.preventDefault();
        let numero = parseInt(this.cajaNumero.current.value);
        let aux = [];
        for (var i = 1; i <= 10; i++){
            let operacion = numero + " * " + i;
            let resultado = numero * i;
            let dato = {
                operacion: operacion,
                resultado: resultado 
            }
            aux.push(dato);
        }
        this.setState({
            tabla: aux
        })
    }
    state = {
        tabla: []
    }
  render() {
    return (
      <div>
        <h1>Tabla Multiplicar</h1>
        <form onSubmit={this.generarTabla}>
            <label>Número: </label>
            <input type="number" ref={this.cajaNumero}/>
            <button>Mostrar tabla</button>
        </form>
        <table>
            <thead>
                <tr>
                    <th>Operación</th>
                    <th>Resultado</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.tabla.map((fila, index) => {
                        return (<tr key={index}>
                            <td>{fila.operacion}</td>
                            <td>{fila.resultado}</td>
                        </tr>)
                    })
                }
            </tbody>
        </table>
      </div>
    )
  }
}