import { useState } from "react";

function NewTodoItem({handleAddTodo}){
    const [description, setDescription] = useState("");
    
    return(    
        <div>
             Description: <input 
                type={"text"}
                placeholder="Enter a new to-do item" 
                onChange = {(e) => {setDescription(e.target.value)}}
            />
            <button onClick={()=>handleAddTodo({description, isComplete: false})}>ADD</button>
        </div>
    )

}
export default NewTodoItem;