import React , { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

//initial state
const initialState={
    transactions: [  ]
}

export const GlobalContext=createContext(0);


export const GlobalProvider = ({children})=>{
const [state, dispatch]=useReducer(AppReducer, initialState);

//actions
function deleteTransaction(id){
    dispatch({
        type:'DELETE_TRANSACTIONS',
        payload:id
    });
}

function addTransaction(transaction){
    dispatch({
        type:'ADD_TRANSACTIONS',
        payload:transaction
    });
}


    return (<GlobalContext.Provider 
        value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    
    } }
    >
        {children}
    </GlobalContext.Provider>
    );
}