/*
This is the login page
 */
import {useState} from "react";
import {useAuth} from "../contexts/AuthContext";

const Login =(props)=> {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const {updateToken} = useAuth();
    const login = () => {
        updateToken(username);
    };
    return (
      <div>
          <input type="text" placeholder="Enter your username" value={username}/>
          <input type="password" value={password}/>
          <input type="button" value="Log In" onClick={login}/>
      </div>
    );
}

export default  Login;