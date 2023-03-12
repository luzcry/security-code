import React from 'react';

function UseState({ name }) {
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    
    React.useEffect(() => {
        console.log('empezando el efecto');

        if(loading) {
            setTimeout(() => {
                console.log('haciendo validacion');
    
                setLoading(false)
                
                console.log('terminando validacion');
            }, 3000);
        }
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
            <input placeholder='Código de seguridad' />
            <button onClick={() => setLoading(true)}>Comprobar</button>
        </div>
    )
}

export { UseState }; 