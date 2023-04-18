import React, {createContext, useReducer, useState} from "react";
//PASOS
/*
1 - Crear el contexto con el hook createContext() 
2 - crear el componente provider
3 - retornar nuestro contexto con un .provider 
4 - props.children o children
*/
export const ItemsContext = createContext();

//crear un contexto para items
//importante mantener el nombre Provider
//se convierte en hook [hight order component] => envolvedor de componentes para pasar propiedades
    
export const ItemsProvider = ({children}) =>{
    const reducer = (state,action)=>{
        switch(action.type){  
            case 'ADD': 
                //evitar el clicking en 1 item y que llene de basura el []
                const aux = state.filter((item)=> action.payload.id === item.id); //el nuevo item ya existe en el array?
                if(aux.length>0){
                    return state;
                }else{
                    return [...state,action.payload];
                }               
            case 'INCREASE':
                break;
            case 'DECREASE':
                break;
            case 'REMOVE':
                break;    
            default: return state;
        }
        
    }
    const [state, dispatch]=useReducer(reducer,[])

    const methods={state,dispatch}; //pongo todos los metodos en 1 arr
    return(
        <ItemsContext.Provider value = {{methods}}>{children}</ItemsContext.Provider>
    )
}

//provider va a envolver a los componentes para pasarse info