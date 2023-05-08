import React, {createContext, useReducer, useEffect} from "react";


const INITIAL_STATE={
    //tomo inicial el que esta en local o null
    currentUser: JSON.parse(localStorage.getItem("user")) || null,
}
//**toda la logica de auth de un usuario
export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children}) =>{
        const reducer = (state,action)=>{
            switch(action.type){  
                case 'LOGIN': 
                    return{ currentUser: action.payload}             
                case 'LOGOUT':
                    localStorage.setItem("cart", JSON.stringify([])); // update cart in local storage
                    return {currentUser:null}
                default: return state;
            }    
        }
        const [state, dispatch]=useReducer(reducer,INITIAL_STATE);
        //guardar en local
        useEffect(() => {
            localStorage.setItem("user", JSON.stringify(state.currentUser));
          }, [state.currentUser]);

        return(
            <AuthContext.Provider value = {{currentUser: state.currentUser,dispatch}}>{children}</AuthContext.Provider>
        )
    }