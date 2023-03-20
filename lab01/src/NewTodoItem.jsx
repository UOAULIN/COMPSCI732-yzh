import { useState } from "react";

function NewTodoItem({handleAddTodo}) {
  const [description, setDescription] = useState("");

  const handleAddClick = () => {
    if (description) {
      handleAddTodo({
        description,
        isComplete: false
      });
      setDescription("");
    }
  };

  return (
    <div>
      Description: 
      <input 
        type="text"
        placeholder="Enter a new to-do item" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleAddClick}>ADD</button>
    </div>
  );
}

export default NewTodoItem;
