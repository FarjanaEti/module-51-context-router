import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { createContext } from 'react';
import { auth } from '../firebase.init';

export const AuthContext=createContext(null)
const Authprovider = ({children}) => {
       const name='eti';  
       
       const createUser=(email,password)=>{
         return createUserWithEmailAndPassword(auth,email,password)                     
       }
     const info={
       name, 
       createUser                     
     }                         
 return (
 <AuthContext.Provider value={info} >
     {children}                                                                                     
  </AuthContext.Provider>
 );
};

export default Authprovider;