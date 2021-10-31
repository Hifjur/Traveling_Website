import { useState, useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut,  createUserWithEmailAndPassword , signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';



initializeAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const loginEmail = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
           const user = result.user;
           console.log(user);
           setError('');
           verifyEmail();
        })
        .catch(error => {
            setError(error.message);
        })
    }

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
        .then(()=> {
            setUser({})
        })
        .finally(() => setIsLoading(false));

    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
        .then(result => {
            console.log(result);
        })
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePassWordChange = e => {
        setPassword(e.target.value);
       }

       const handleRegistration = e => {
        e.preventDefault();
        console.log(email, password);
        if(password.length < 6) {
            setError('Password Must be At Least 6 Characters')
            return;
        }
        createUserWithEmailAndPassword(auth, email,password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setError('')
        })
        .catch(error => {
            setError(error.message);
        })
      
    }
       

   const signInUsingGoogle = () => {
       setIsLoading(true);
     return  signInWithPopup(auth, googleProvider)
     .finally(() => setIsLoading(false));

   }

   useEffect( () => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
        }
        else {
            setUser({})
        }
        setIsLoading(false);
      });
   }, [])

   return {
       user, 
       signInUsingGoogle,
       logOut,
       handleEmailChange, 
       handlePassWordChange,
       handleRegistration,
       error,
       isLoading,
       loginEmail
   }

}
export default useFirebase;