import React from 'react';

export default class ConteoRegresivo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            conteo: 10,
            ejecutandoTimer: false,
        };
    }

    detenerConteo = () => {
        this.setState({ ejecutandoTimer: false });
    };

    reiniciarConteo = () => {
        this.detenerConteo();
        this.setState({ conteo: 10 });
    };

    iniciarConteo = () => {
        this.reiniciarConteo();
        this.setState({ ejecutandoTimer: true });
    };

    contador = () => {
        this.intervalId = setInterval(() => {

            if (this.state.ejecutandoTimer) {
                if (this.state.conteo == 0) {
                    this.detenerConteo();
                } else {
                    this.setState((prevState) => ({ conteo: prevState.conteo - 1 }));
                }
            }

        }, 500);
    };


    componentDidMount() {
        this.contador()
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }



    render() {
        return (
            <div className={`text-center pt-5  ${this.state.conteo == 0 ? "text-danger" : ""}`}>
                <h1 className='display-2'>{this.state.conteo}</h1>


                {this.state.ejecutandoTimer ? (
                    <button onClick={this.detenerConteo} className="btn btn-danger  " >Detener</button>
                ) : (
                    <button onClick={this.iniciarConteo} className="btn btn-primary ">Iniciar</button>
                )}


                <button onClick={this.reiniciarConteo} className="btn btn-primary mx-2">Reiniciar</button>
            </div>
        );
    }
}