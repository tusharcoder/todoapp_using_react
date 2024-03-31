/*
This is the login page
 */
import {useEffect, useState} from "react";
import {useAuth} from "../contexts/AuthContext";
import {useNavigate} from "react-router-dom";

const Login =(props)=> {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const {authToken,updateAuth} = useAuth();
    const  navigateTo = useNavigate();
    useEffect(() => {
        if(authToken){
            navigateTo("/todo");
        }
    }, [authToken]);

    const handleUsernameInput = (event)=>{
            setUsername(event.target.value);
        }
    const handlePasswordInput = (event)=>{
        setPassword(event.target.value);
    }
    const login = () => {
        updateAuth(username);
    };

    return (
      <div>
          <input type="text" placeholder="Enter your username" value={username} onChange={handleUsernameInput}/>
          <input type="password" value={password} onChange={handlePasswordInput}/>
          <input type="button" value="Log In" onClick={login}/>
      </div>
    );
}

export default  Login;