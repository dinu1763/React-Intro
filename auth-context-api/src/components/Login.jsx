import { AuthContext } from "../contexts/AuthContext";

export const Login = () => {
    const { toggleAuth, handleTokenChange } = React.useContext(AuthContext);
    
    const [email, setEmail] = React.useState();
    const [password, setPassword] = React.useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            email: email,
            password: password
        }
        console.log(email, password);
        fetch('https://reqres.in/api/login', {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => res.json()).then(data => {
            console.log(data);
            if (!data.error) {
                handleTokenChange(data.token);
                toggleAuth();
                
            }
        })
    }

    return (
        <div>
            <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value)}}/>
            <button type="submit" onClick={() =>{handleSubmit}}>Submit</button>
        </div>
    )
}