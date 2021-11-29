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

    function delTransaction(id){
        dispatch({
            type:'DELETE_TRANSACTION',
            payload:id
        });
    }

    function addTransaction(transaction){
        dispatch({
            type:'ADD_TRANSACTION',
            payload:transaction
        });
    }

    return (
        <GlobalContext.Provider value={{
            transactions:state.transactions,
            delTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}