import React, { useEffect, useState } from "react";
import "./Newtransaction.css";
import { useDispatch } from "react-redux";
import { dataStore, fireStore } from "../../features/counter/counterSlice";
import { Adddata, useFetchHook } from "../../useFetchHook";
import { db } from "../../Firebase/Firebase";
import uuid from "react-uuid";
import { Fetchhook } from "../../Fetchhook";
export default function Newtransaction() {
  const [datas, setDatas] = useState([
    {
      amount: 0,
      textarea: "",
      selectedvalue: "",
    },
  ]);
  const dispatch = useDispatch();
  function handleChange(e) {
    setDatas({ ...datas, [e.target.name]: e.target.value });
  }

  let Count = 0;
  function handleSubmit(e) {
    e.preventDefault();
     Count = uuid();
     Adddata(db, "posts", datas, Count);
    dispatch(dataStore(datas));
  }
  useEffect(() => {
    async function apiCall(params) {
      const array = await Fetchhook();
      dispatch(fireStore(array));
    }
    apiCall();
  }, []);

  return (
    <div>
      <h4 style={{borderBottom:'5px solid whitesmoke'}}>New Transaction</h4>
      <form className='form' onSubmit={handleSubmit}>
            <div className="textarea">
                <label htmlFor='textarea'>
                       Description:
                </label>
                <textarea required={true} placeholder='Enter text..' id="textarea" value={datas.textarea} name="textarea" rows="2" cols="30" onChange={handleChange}></textarea>
                </div>
                <div className="amount">
                <label htmlFor='amount'>
                       Amount:
                </label>
                <input required={true} type="number" name='amount' id="amount" onChange={handleChange} placeholder='Enter amount..' value={datas.amount}/>
                </div>
                <div className="option">
                    <label htmlFor="select">Category:</label>
                <select id="select" onChange={handleChange} name='selectedvalue'> 
                <option value=""></option>
                   <option value="Groceries">Groceries</option>
                   <option value="Rent">Rent</option>
                   <option value="Salary">Salary</option>
                </select>
                <div className="buton">
                <button>Add Transaction</button>
                </div>
                </div>
         </form> 
         </div>
      
  );
}
