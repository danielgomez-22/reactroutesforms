import React, { Component } from 'react'

export default class Collatz extends Component {
    cajaNumero = React.createRef();
    generarCollatz = (event) => {
        event.preventDefault();
        
        // capturamos el numeor de la caja
        let auxiliar = []; //para no tocar el render
        let numero = parseInt(this.cajaNumero.current.value);
        while (numero != 1){
            if (numero % 2 == 0){
                //PAR
                numero = numero / 2;
            }else{
                //IMPAR
                numero = numero * 3 + 1; 
            }// Este numero hay que almacenarlo en el array
            auxiliar.push(numero);
        }
        this.setState({
            numeros: auxiliar
        })
    }
    state = {
        numeros: []
    }
  render() {
    return (
        <div>
            <h1>
                Conjetura Collatz
            </h1>
            <form onSubmit={this.generarCollatz}>
                <label>Introduzca Numero</label>
                <input type='number' ref={this.cajaNumero}/>
                <button>Mostar Collatz</button>
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
