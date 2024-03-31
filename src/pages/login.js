/*
This is the login page
 */
import {useEffect, useState} from "react";
import {useAuth} from "../contexts/AuthContext";
import {useNavigate} from "react-router-dom";

const Login = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const {authToken, updateAuth} = useAuth();
    const navigateTo = useNavigate();
    useEffect(() => {
        if (authToken) {
            navigateTo("/todo");
        }
    }, [authToken]);

    const handleUsernameInput = (event) => {
        setUsername(event.target.value);
    }
    const handlePasswordInput = (event) => {
        setPassword(event.target.value);
    }
    const login = () => {
        updateAuth(username);
    };

    return (
        <div className={"container"}>
            <div className={"loginForm"}>
                <div className={"item heading"}>
                    <h1>Login</h1>
                </div>
                <div className={"item"}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" placeholder="Enter your username" value={username}
                           onChange={handleUsernameInput}/>
                </div>
                <div className={"item"}>
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" value={password} onChange={handlePasswordInput}/>
                </div>
                <div className={"item button"}>
                    <input type="button" value="Log In" onClick={login}/>
                </div>
            </div>
        </div>
    );
}

export default Login;