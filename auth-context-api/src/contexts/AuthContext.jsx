import { createContext, useState } from "react";

export const AuthContext = createContext("")

export const AuthContextProvider = ({children}) => {
    const [isAuth , setIsAuth] = useState("No");
    const [token, setToken] = useState("");

    const toggleAuth = () => {
        setIsAuth(!isAuth)
    }

    const handleTokenChange = (value) => {
        setToken(value)
    }

    return<AuthContext.Provider value={{isAuth, toggleAuth, token, handleTokenChange}}>
        {children}
    </AuthContext.Provider>
}