/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

const SECURITY_CODE = 'paradigma';

function UseState({ name }) {
    const [state, setState] = React.useState({
        value:'',
        error:false,
        loading:false,
        deleted: false,
        confirmed: false,
    })

    const onConfirm = ()=>{
        setState({ 
            ...state,
            error: false, 
            loading: false ,
            confirmed: true,
        });
    }

const onError = ()=>{
        setState({ 
            ...state,
            error: true, 
            loading: false 
        });
    }    	

const onWrite = (event)=>{
        setState({ 
            ...state,
            value: event.target.value,
        });
    }

const onCheck = ()=>{
        setState({ 
            ...state,
            loading: true 
        });
    }

 const onDelete = ()=>{
        setState({
            ...state,
            deleted: true,
        })
    }

 const onReset = ()=>{
        setState({
            ...state,
            confirmed: false,
            deleted: false,
            value:'',
        })
    }

    React.useEffect(()=>{
        console.log('Empezando el efecto');
        if(state.loading){
            setTimeout(()=>{
                console.log("Haciendo la validación xd");
                if(state.value === SECURITY_CODE){
                    onConfirm();
                }else{
                    onError();
                }
                console.log("Terminando la validación");
            },1500);
        }
        console.log('Terminando el efecto');
    },[state.loading]);

    if(!state.deleted && !state.confirmed){
        return (
            <div>
                <h2>Eliminar {name}</h2>
                <p>Por favor, escriba el código de seguridad.</p>
    
                {(state.error && !state.loading ) && (
                    <p>El código es es incorrecto</p>
                )}
    
                {state.loading && (
                    <p>Cargando ...</p>
                )}
    
                <input 
                    type='text' 
                    placeholder='código de seguridad'
                    value={state.value}
                    onChange={onWrite}
                />
                <button
                    onClick={()=>{
                        onCheck();
                    }}
                >Comprobar</button>
            </div>
        );
        } else if(state.confirmed && !state.deleted) {
        return(
            <React.Fragment>
                <p>¿Seguro que quieres eliminar UseState?</p>
                <button
                    onClick={()=>{
                        onDelete();
                    }}
                >Si, eliminar</button>
                <button
                    onClick={()=>{
                        onReset();
                    }}
                >No, volver</button>
            </React.Fragment>
        )
    } else {
        return (
            <React.Fragment>
                <p>Eliminado con exito</p>
                <button
                    onClick={()=>{
                        onReset();
                    }}
                >Recuperar UseState</button>
            </React.Fragment>
        )
    }
}
export { UseState }; 