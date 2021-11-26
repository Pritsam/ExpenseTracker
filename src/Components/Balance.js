import React,{useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState'

export const Balance = () => {

    const {transactions} = useContext(GlobalContext)

    const amount = transactions.map(transaction => transaction.amount)
    const reducer = (previousValue,currentValue)=>previousValue + currentValue

    const total = amount.reduce(reducer,0).toFixed(2);
    
    return (
        <div>
            <h4>Your Balance</h4>
            <h1 id="balance">${total}</h1>
        </div>
    )
}
