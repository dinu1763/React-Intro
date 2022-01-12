import { useContext, useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom"
import { AuthContext } from "../contexts/AuthContext";


export const UserDetails = () =>{
    const {userid} = useParams();
    const [user, setUser] = useState({});



    useEffect(() =>{
        fetch(`https://reqres.in/api/users/${userid}`)
        .then((d) => d.json())
        .then((d) => {
            setUser(d.data);
            // console.log(d.data)
        });
    },[userid]);
    
  

    return (<div>
        <img src={user.avatar} alt="test"/>
        {user.first_name} {user.last_name}
        Contact : {user.email}
    </div>
    );
}