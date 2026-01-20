import {useState} from "react"
import TodoListItems from "./TodoListItems";
import TodoProgress from "./TodoProgress";

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [value, setValue] = useState("");

    const handleCreate = (value) => {
        setTodos([...todos,
            {
                id: Math.random(),
                text: value,
                isCompleted: false,
            }
        ]);
    }

    const handleToggle = (id) => {
        const nextTodos = todos.map((todo) => {
            if(todo.id !== id) {
                return todo;
            }
            return {
                ...todo,
                isCompleted: !todo.isCompleted,
            }
        })
        setTodos(nextTodos);
    }

    const handleDelete = (id) => {
        const nextTodos = todos.filter((todo) => {
            return todo.id !== id;
        })
        setTodos(nextTodos);
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
            <TodoListItems 
            todos={todos} 
            onToggle={handleToggle}
            onDelete={handleDelete}/>
            <TodoProgress 
            todos={todos}/>
        </div>
    )
}
export default TodoList;