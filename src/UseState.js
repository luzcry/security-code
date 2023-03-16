import React from 'react';

const SECURITY_CODE = 'paradigma';

function UseState({ name }) {
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        console.log('empezando el efecto');

        if(loading) {
            setTimeout(() => {
                console.log('haciendo validacion');
    
                if(value !== SECURITY_CODE) {
                    setError(true)
                } else {
                    setLoading(false)
                }

                console.log('terminando validacion');
            }, 3000);
        }
        console.log('terminando efecto')
    }, [loading]);
      
    return (
        <div>
            <h2>Eliminar {name}</h2>
            <p>Por favor escribe el código de seguridad</p>

            {error && (
                 <p>El código de seguridad es incorrecto</p>
            )}
            {loading && (
                 <p>Cargando...</p>
            )}
            <input placeholder='Código de seguridad'
                value={value}
                onChange={(event) => {
                   setValue(event.target.value);
                }}
            />
           <button
             onClick={() => {
                setLoading(true);
                setError(false);
            }}>
                Check
            </button>
        </div>
    )
}

export { UseState }; 