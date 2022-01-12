import { Link } from "react-router-dom"
export const Navbar = () =>{
    return <div style={{margin:10}}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contactus">Contact</Link>
        <Link to="/users">Users</Link>
        <Link to="/login">Login</Link>

    </div>
}