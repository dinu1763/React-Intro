import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const Status = () => {
    const { token } = useContext(AuthContext);
    return <div>
        
           Token : {token}
        
    </div>
}