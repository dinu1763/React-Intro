import { useParams } from "react-router-dom"


export const Products = () =>{
    const {id} = useParams();
    return <div>Product details of Id: {id}</div>
}