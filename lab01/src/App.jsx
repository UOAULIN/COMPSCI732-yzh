import AboutMe from "./AboutMe";
import ToDoList from "./TodoList"
import LightBulb from "./LightBulb"
import ToDos from "./ToDos";
import { useState } from "react";
import NewTodoItem from "./NewTodoItem";

const initialTodos = [    
  { description: 'Finish lecture', isComplete: true },
  { description: 'Do homework', isComplete: false },
  { description: 'Sleep', isComplete: true }];
  

function App() {

  const [todos, setTodos] = useState(initialTodos); //todos的初始值为initialTodos列表


  //exercise 7
  function ChangeIsComplete(todo, e){

    const index = todos.indexOf(todo);
    const newTodos = [...todos];
    
    newTodos[index] = {
      description: todo.description,
      isComplete: e
    }

    setTodos([...newTodos])
  }


  //exercise 9
  const HandleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  }

  //exercise 10
  function HandleRemove (index){
    const newItems = [...todos];
    newItems.splice(index, 1)
    setTodos(newItems)
  }

  return (
    <div>


      <h1>About me</h1>
      {/* TODO: Add your AboutMe component here */<AboutMe name = "Zihui Yang" age = "21" favorite_food = "pizza and noodle" />}
      
      <h1>Todo List</h1>
      {<ToDoList items={["Finish lecture", "Do homework", "Sleep"]} />}
      


      <h1>My light bulb</h1>
      {/* TODO: Add your LightBulb component here */}
      {<LightBulb/>}


      <h1>My todos</h1>
      {/* TODO: Add your todo list here */}
      {<ToDos todos = {todos} changeIsComplete = {ChangeIsComplete} onTodoStatusChanged={(index, status) => console.log(index, status)} HandleRemove={HandleRemove}/>}

      <h1>Add Item</h1>
      {<NewTodoItem handleAddTodo = {HandleAddTodo}/>}
    </div>
  );
}

export default App;






















