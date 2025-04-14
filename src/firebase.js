// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import {addDoc, collection, getFirestore} from 'firebase/firestore'
import { toast } from "react-toastify";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIiEzljtq00d7CmAxYWtXxcYvuScFhPoo",
  authDomain: "netflix-clone-5cbdf.firebaseapp.com",
  projectId: "netflix-clone-5cbdf",
  storageBucket: "netflix-clone-5cbdf.firebasestorage.app",
  messagingSenderId: "303015874037",
  appId: "1:303015874037:web:0c59628b22cf7e1eaf64bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth=getAuth(app);
//cofigure firestore for DB
const db=getFirestore(app)


//functions
const signup=async(name,email,password)=>{
    try{
            const res=await createUserWithEmailAndPassword(auth,email,password)
            //created user in res
            const user=res.user;
            //stored in user property
            await addDoc(collection(db,"user"),{
                //define data that will be stored in user collection
                uid:user.uid,
                name,
                authProvider:"local",
                email

            });
    }catch(error)
    {
        console.log(error);
        // alert(error)
        toast.error(error)

    }

}


const login=async(email,password)=>{
    try {
        await signInWithEmailAndPassword(auth,email,password)
    } catch (error) {
        console.log(error);
        // alert(error)
        toast.error(error.code.split("/")[1].split('-').join(" "))
    }

}

const logout=()=>{
    try {
        signOut(auth)
    } catch (error) {
        console.log(error);
        // alert(error)
        toast.error(error.code)
    }
}

export {auth,db,login,logout,signup}