import { createContext, useState } from "react";

export const AuthContext = createContext({auth:"", toggleAuth:()=>{}})

export const AuthContextProvider = ({children}) => {
    const [auth, setAuth] = useState("No")
    const toggleAuth = () => {
        setAuth(auth === "No" ? "Yes":"No")
    }
    return<AuthContext.Provider value={{auth, toggleAuth}}>
        {children}
    </AuthContext.Provider>
}