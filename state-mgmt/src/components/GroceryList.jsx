export const GroceryList = ({title, status, id, handleDelete}) =>{
    return (
        <>
            <div>{title}</div>
            <button onClick={() => handleDelete(id)}>Delete Item</button>
        </>
    );
};