
import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore' 
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyCvt-WJcQAlJKpPt8Ted59pNEhCgxiD3TE",
  authDomain: "enverx-af9ac.firebaseapp.com",
  projectId: "enverx-af9ac",
  storageBucket: "enverx-af9ac.appspot.com",
  messagingSenderId: "727941639171",
  appId: "1:727941639171:web:d0f54896155223a1273236",
  measurementId: "G-EDM3RTER62"
  };
 

initializeApp(firebaseConfig)    //initializing firebase by using initializeApp

const db=getFirestore();   //getting firestore db from firebase

const auth=getAuth()
export {db,auth}