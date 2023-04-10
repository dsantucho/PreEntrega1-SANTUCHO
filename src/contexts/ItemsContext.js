import React, {createContext, useState} from "react";
//PASOS
/*
1 - Crear el contexto con el hook createContext() 
2 - crear el componente provider
3 - retornar nuestro contexto con un .provider 
4 - props.children o children
*/
export const ItemsContext = createContext();

//crear un contexto para items

export const ItemsProvider = ({defaultValue =[],children}) =>{
    const [items,setItems] = useState(defaultValue);

    const addItem = ([data])=>{
        setItems(...items, data);
        console.log(`push data: ${data.title}`);
        console.log(`${data.title}, ${data.id}, ${data.price}`);
    }

    function returnLenthg(data){
        console.log(`lentgh:${data.lenthg}`);
        return data.lenthg;
    }

    //importante mantener el nombre Provider
    //se convierte en hook [hight order component] => envolvedor de componentes para pasar propiedades
    return(
        <ItemsContext.Provider value = {{items, setItems, addItem,returnLenthg}}>{children}</ItemsContext.Provider>
    )
}

//provider va a envolver a los componentes para pasarse info