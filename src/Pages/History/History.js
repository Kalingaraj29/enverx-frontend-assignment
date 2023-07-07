import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import './History.css'
import { fireStore } from '../../features/counter/counterSlice'
import { CircularProgress } from '@mui/material'
export default function History() {
  const {Datacontainer,Firestoredata}=useSelector(state=>state.counter)
   const[loading,setLoading]=useState(false)
  return (
    <div>
        <h4 style={{borderBottom:'5px solid whitesmoke'}}>History</h4>
       { Firestoredata.length===0 && 
       <div style={{display: 'flex', justifyContent: 'center'}}>
         <CircularProgress  />
    </div>
    }
        <div className="list">
          <div className="listitems">
            <ul className='listeddata'>
                {Datacontainer && Datacontainer.map((el,index)=>{
                  return (
                      <div className="parentlist" key={index}>
                        <div className="value">
                          <p>{el.selectedvalue}</p>
                        </div>
                        <div className="amount">
                          <p>{el.amount}</p>
                        </div>
                      </div>
                  )
                })}
                {Firestoredata && Firestoredata.map((el,index)=>{
                  return(
                   el.array.map((ele,index)=>{
                    return (
                      <div className="parentlist" style={{display:'flex',justifyContent:'space-between'}} key={index}>
                        <div className="amount">
                      <p>{ele.alteredformdata.selectedvalue}</p>
                      </div>
                      <div className="select">
                      <p>{ele.alteredformdata.amount}</p>
                      </div>
                      </div>
                    )
                   })
                  )
                })}
            </ul>
          </div>
        </div>
    </div>
  )
}
