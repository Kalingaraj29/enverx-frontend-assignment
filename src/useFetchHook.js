import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, onSnapshot, orderBy, query, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./Firebase/Firebase";




 function Adddata(db,posts,formdata,Count) {
     const docref=doc(db,posts,Count)
      const alteredformdata={...formdata,CreatedAt:serverTimestamp()}
      const adddata= setDoc(docref,{alteredformdata})
}



/*export function Fetchdata(db,posts,id) {
    const value=useContext(usercontext)
    const {singledata,setsingledata}=value
    
    useEffect(()=>{
        const connectionref=doc(db,posts,id)
        getDoc(connectionref).then((response)=>{
           setsingledata({...response.data(),id:response.id})
           })
    },[id])
   return singledata;   

}*/


export {Adddata}


    
