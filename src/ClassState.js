import React from 'react';
import { Loading } from './loading';
//trabajar con props en  componentes creados como clases

class ClassState extends React.Component {
    //en las clases se hace un solo estado y dentro se puede crear un objeto que tiene cada uno de los estados como una propiedad
    constructor(props) {
//cuando queramos modificar this en la clase tenemos que agregar super (poo) y enviarle todas las props
        super(props);
        this.state = {
            error: false,
            loading: false
        }
    }

    // componentWillMount() {

    // }

    // componentDidMount(){

    // }

    componentDidUpdate() {
        console.log('actualizacion');
        if(this.state.loading) {
            setTimeout(() => {
                console.log('haciendo validacion');
    
                this.setState({loading: false});
                
                console.log('terminando validacion');
            }, 3000);
        }
    }
    render() {
        
        return (
            <div>
                <h2>Eliminar {this.props.name}</h2>
                <p>Por favor escribe el código de seguridad</p>

                {this.state.error && (
                 <p>El código de seguridad es incorrecto</p>
                )}

                {this.state.loading && (
                 <Loading/>
                )}


                <input placeholder='Código de seguridad' />
                <button
                onClick={() => 
                    this.setState({loading: true})
                }
                >Comprobar</button>
            </div>
        )
    }
}

export { ClassState }; 