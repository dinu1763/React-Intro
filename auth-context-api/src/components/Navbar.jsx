import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const Navbar = () => {
    const {isAuth, toggleAuth, handleTokenChange} = useContext(AuthContext)
    const handleLogout = () => {
        toggleAuth();
        handleTokenChange('');
    }
    return <div>
        {
            isAuth ? <button onClick={handleLogout}>Logout</button> : <button onClick={() => true}>Login</button>
        }

    </div>
}