/*
this is the auth context file
 */

import {createContext, useContext, useState} from "react";

const AuthContext = createContext();

export const AuthProvider = ({children})=>{
    const [authToken, setAuthToken] = useState(null);
    const updateAuth = (newTOken) =>{
        setAuthToken(newTOken);
    }
    return <AuthContext.Provider value={{authToken,updateAuth}} >
        {children}
    </AuthContext.Provider>
};
export const useAuth = ()=>useContext(AuthContext);