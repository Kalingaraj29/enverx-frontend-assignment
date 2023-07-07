import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, onSnapshot, orderBy, query, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./Firebase/Firebase";


async function Fetchhook() {
    let array=[]
    const colRef = collection(db, "posts");
    try {
        const docsSnap = await getDocs(colRef);
        if(docsSnap.docs.length > 0) {
           docsSnap.forEach(doc => {
            array.push(doc.data());
           })
        }
    } catch (error) {
        console.log(error);
    }
   return {array};
}
export {Fetchhook}