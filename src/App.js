import React from 'react';
import './App.css';
import {Route,BrowserRouter, Routes} from "react-router-dom";
import Login from "./pages/login";
import TODO from "./pages/todo";
import {AuthProvider} from "./contexts/AuthContext";

function App() {
return <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/todo" element={<TODO />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
}

export default App;
