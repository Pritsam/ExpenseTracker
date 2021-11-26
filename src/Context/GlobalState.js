import React,{createContext, useReducer} from 'react'
import AppReducer from './AppReducer'

//Initial State
const initialState ={
    transactions: [
        {id:1, text:'Crypto', amount:-500},
        {id:2, text:'Salary', amount:1500},
        {id:3, text:'Book', amount:-25},
        {id:4, text:'Mobile', amount:-500}
    ]
}

// Create Context

export const GlobalContext = createContext(initialState);

//Provider Component

export const GlobalProvider =({children})=>{
    const [state, dispatch] = useReducer(AppReducer, initialState)

    return (
        <GlobalContext.Provider value={{
            transactions:state.transactions
        }}>
            {children}
        </GlobalContext.Provider>
    )
}