import styles from './ToDos.module.css';


function ToDos ({todos, changeIsComplete, onTodoStatusChanged, HandleRemove}){
    return(
        <div className={styles.container}>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index} className={todo.isComplete ? styles.liComplete : ""}>
                        <input type = "checkbox"  checked = {todo.isComplete} onChange = {(e) => {changeIsComplete(todo, e.target.checked), onTodoStatusChanged(index, e.target.checked)}}/>
                            {todo.description}
                            {todo.isComplete ? <span>(Done!)</span> : <span></span>}
                            <button onClick = {() => HandleRemove(index)} > Remove </button>
                    </li>))
                }
            </ul>
        </div>
    )

}
export default ToDos;
