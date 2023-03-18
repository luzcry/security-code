
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

const SECURITY_CODE = 'paradigma';

function UseReducer({ name }) {
    const [state, dispatch] = React.useReducer(reducer, initialState)
 	

// const onWrite = (event)=>{
//         setState({ 
//             ...state,
//             value: event.target.value,
//         });
//     }

// const onCheck = ()=>{
//         setState({ 
//             ...state,
//             loading: true 
//         });
//     }


    React.useEffect(()=>{
        console.log('Empezando el efecto');
        if(state.loading){
            setTimeout(()=>{
                console.log("Haciendo la validación xd");
                if(state.value === SECURITY_CODE){
                    dispatch({
                        type: 'CONFIRM',
                    })
                }else{
                    dispatch({
                        type: 'ERROR',
                    })
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
                    onChange={(event) => {
                        dispatch({
                            type: 'WRITE', 
                            payload: event.target.value
                        })
                    }}
                />
                <button
                    onClick={()=>{
                        dispatch({
                            type: 'CHECK',
                        })
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
                        dispatch({
                            type: 'DELETE',
                        })
                    }}
                >Si, eliminar</button>
                <button
                    onClick={()=>{
                        dispatch({
                            type: 'RESET',
                        })
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
                        dispatch({
                            type: 'RESET',
                        })
                    }}
                >Recuperar UseState</button>
            </React.Fragment>
        )
    }
}

const initialState = {
    value:'paradigma',
    error:false,
    loading:false,
    deleted: false,
    confirmed: false,
}

    const reducerObject = (state, payload) => ({
        'ERROR': {
            ...state,
            error: true,
            loading: false
        },
        'CHECK': {
            ...state,
            loading: true
        },
        'CONFIRM':  { 
            ...state,
            error: false, 
            loading: false ,
            confirmed: true,
        }, 
        'DELETE': {
            ...state,
            deleted: true,
        },
        'RESET': {
            ...state,
            confirmed: false,
            deleted: false,
            value:'',
        },
        'WRITE': {
            ...state,
            value: payload
        }

    });

    const reducer = (state, action) => {
        if(reducerObject(state)[action.type]) {
            return reducerObject(state, action.payload)[action.type]
        } else {
            return state;
        }
    }

    export { UseReducer }; 