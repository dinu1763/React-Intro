import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const Navbar = () => {
    const {auth} = useContext(AuthContext)
    return <div>
        login : {auth}

    </div>
}