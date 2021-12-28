import { useState } from "react";
import { Formtable } from "./Formtable";
export const Form = () =>{
    const [form, setForm] = useState({
        username :"",
        age: "",
        address: "",
        department: "",
        salary: "",
        married: "",
        unmarried:"",

    });
    const handleChange = (e) =>{
        // console.log(e.target.name, e.target.value)
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]:value
        })
        
    }
    console.log(form);
    const handleSubmit = (e) =>{
        e.preventDefault();
        <Formtable form={form}/>
        console.log(form)
    }
    return (<form onSubmit={handleSubmit}>
       
        <input onChange={handleChange} name="username" type="text" placeholder="Name" /><br></br>
        <input onChange={handleChange} name="age" type="number" placeholder="Age" /><br></br>
        <input onChange={handleChange} name="address" type="text" placeholder="Address" /><br></br>
        <input onChange={handleChange} name="department" type="text" placeholder="Department" /><br></br>
        <input onChange={handleChange} name="salary" type="number" placeholder="Salary" /><br></br>
        <input onChange={handleChange} name="married" type="checkbox" id="married" name="married" />
        <label htmlFor="married">married</label>
        <input onChange={handleChange} name="unmarried" type="checkbox" id="Unmarried" name="Unmarried" />
        <label htmlFor="Unmarried">Unmarried</label>
        <input type="submit" value="submit" />
    </form>)
}