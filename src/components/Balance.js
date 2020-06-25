import React ,{ useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Balance = () => {
    const {transactions}=useContext(GlobalContext);
    const amounts=transactions.map(transation=>transation.amount)
    const total=amounts.length>0?amounts.reduce((acc,item)=>(acc+item)).toFixed(2):0
    return (
        <div>
            <h4>Your Balance</h4>
            <h1>${total}</h1>
        </div>
    )
}
