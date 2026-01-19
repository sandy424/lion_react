import {useState} from "react"
import TodoListItems from "./TodoListItems";
import TodoProgress from "./TodoProgress";

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [value, setValue] = useState("");

    const handleCreate = (value) => {
        setTodos([...todos, value]);
    }

    return(
        <div className="container">
            <h2 className="header">Todo List</h2>
            <div className="todoInput">
                <input placeholder="할 일을 입력해주세요." type="text" value={value} onChange={(e) => {
                    setValue(e.target.value);
                }}/>
                <button onClick={() => {
                    if(value.length === 0) {
                        alert("할 일을 입력해주세요.");
                        return;
                    }
                    handleCreate(value);
                    setValue("");
                }}>추가</button>
            </div>
            <TodoListItems todos={todos}/>
            <TodoProgress />
        </div>
    )
}
export default TodoList;