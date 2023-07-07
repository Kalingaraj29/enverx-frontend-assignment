import React from 'react'
import './Homepage.css'
import Newtransaction from '../NewTransaction/Newtransaction';
import History from '../History/History.js'
export default function Homepage() {
  return (
    <div className='container'>
          <div className='container_box'>
            <div className="container_holder">
                <div className="header">
                    <h3>Expense Tracker</h3>
                </div>
                <div className="header_balance">
                   <div className="header_balance_title">
                     <p>YOUR BALANCE:</p>
                   </div>
                   <div className="header_balance_amount">
                     <p>$10000</p>
                   </div>
                </div>
                 <div className="history">
                     <div className="history_box">
                           <div className="income">
                                   <h4>INCOME</h4>
                                   <p>$500</p>
                           </div>
                           <div className="expenses">
                           <h4>EXPENSES</h4>
                                   <p>$300</p>
                           </div>
                     </div>
                 </div>
                 </div>
                 <History/>
           <Newtransaction/>      
         </div>
    </div>
  )
}
