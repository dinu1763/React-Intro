import { GroceryInput } from "./GroceryInput";
import { GroceryList } from "./GroceryList";
import { useState } from "react";
import { nanoid } from "nanoid";

export const Grocery = () =>{
    const [list, setList] = useState([]);

    const handleClick = (data) =>{
        console.log(data)
        const payload = {
            title: data,
            status: false,
            id: nanoid(7),
        }
        setList([...list, payload]);
    };
    const handleDelete = (id) =>{
        let newList = list.filter(e => e.id != id);
        setList(newList);
    }
    return (
    <>
        
        <GroceryInput getData={handleClick} />
        {list.map((e) =>(
            <GroceryList key={e.id} {...e} handleDelete={handleDelete}/>
        ))}
    </>
    );;
}