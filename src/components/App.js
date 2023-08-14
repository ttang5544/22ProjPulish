import logo from '../assets/images/logo.svg';
import '../styles/App.css';
import TopBar from "./TopBar";
import React, {useState} from 'react';
import Main from "./Main";

import { TOKEN_KEY } from "../constants";

function App() {
    // is login state
    const [isLoggedIn, setIsLoggedIn] = useState(
        localStorage.getItem(TOKEN_KEY) ? true : false
    );

    const logout = () => {
        console.log("log out");
        localStorage.removeItem(TOKEN_KEY);
        setIsLoggedIn(false);
    };

    const loggedIn = (token) => {
        if (token) {
            localStorage.setItem(TOKEN_KEY, token);
            setIsLoggedIn(true);
        }
    };

    return (
    <div className="App">
        <TopBar isLoggedIn={isLoggedIn} handleLogout={logout}/>
        <Main handleLogin={loggedIn}/>
    </div>
  );
}

export default App;
