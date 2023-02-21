import React from 'react';

//trabajar con props en  componentes creados como clases

class ClassState extends React.Component {
    //en las clases se hace un solo estado y dentro se puede crear un objeto que tiene cada uno de los estados como una propiedad
    constructor(props) {
//cuando queramos modificar this en la clase tenemos que agregar super (poo) y enviarle todas las props
        super(props);
        this.state = {
            error: false,
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

                <input placeholder='Código de seguridad' />
                <button
                onClick={() => 
                    this.setState(prevState => ({ error: !prevState.error }))
                }
                >Comprobar</button>
            </div>
        )
    }
}

export { ClassState }; 