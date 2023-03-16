import React from 'react';

const SECURITY_CODE = 'paradigma';

function UseState({ name }) {
    const [state, setState] = React.useState({
        value: '',
        error: false,
        loading: false
    })

    React.useEffect(() => {
        console.log('empezando el efecto');

        if(!!state.loading) {
            setTimeout(() => {
                console.log('haciendo validacion');
    
                if(state.value === SECURITY_CODE) {
                    setState({
                        ...state,
                        error: false,
                        loading: false,
                    })
                } else {
                    setState({
                        error: true,
                        loading: false,
                    })
                }

                console.log('terminando validacion');
            }, 3000);
        }
        console.log('terminando efecto')
    }, [state.loading]);
      
    return (
        <div>
            <h2>Eliminar {name}</h2>
            <p>Por favor escribe el código de seguridad</p>

            {state.error && (
                 <p>El código de seguridad es incorrecto</p>
            )}
            {state.loading && (
                 <p>Cargando...</p>
            )}
            <input placeholder='Código de seguridad'
                value={state.value}
                onChange={(event) => {
                    setState({
                        ...state,
                        value: event.target.value,
                    })
                }}
            />
           <button
             onClick={() => {
                setState({
                    ...state,
                    loading: true,
                    error: false
                })
            }}>
                Check
            </button>
        </div>
    )
}

export { UseState }; 