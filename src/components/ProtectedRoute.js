/*
this is the protected route component
 */

import {useAuth} from "../contexts/AuthContext";
import {Route, redirect} from "react-router-dom";

export const ProtectedRoute = ({component:Component, ...rest})=>{
    const {authToken} = useAuth();
    return <Route {...rest} render={props=>authToken?<Component {...props}/>:<redirect to="/login" /> } />
};