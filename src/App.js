import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import {useAuth} from "./contexts/AuthContext";
import {Route, Router, Routes, redirect} from "react-router-dom";
import Login from "./pages/login";
import {ProtectedRoute} from "./components/ProtectedRoute";
import TODO from "./pages/todo";
import {AuthProvider} from "./contexts/AuthContext";

function App() {
const {authToken, updateToken} = useAuth();
return <Router>
        <AuthProvider>
    <Routes>
        <Route path="/login"><Login /></Route>
        <ProtectedRoute path="/todo" component={TODO}/>
        <Route exact path="/" render={()=>{
            authToken? <redirect to="/todo"/>:<redirect to="/login"/>
        }} />
    </Routes>
    </AuthProvider>
</Router>
}

export default App;
