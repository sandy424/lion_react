import TodoListItems from "./TodoListItems";
import TodoProgress from "./TodoProgress";

function TodoList() {
    return(
        <div className="container">
            <h2 className="header">Todo List</h2>
            <div className="todoInput">
                <input type="text" />
                <button>추가</button>
            </div>
            <TodoListItems />
            <TodoProgress />
        </div>
    )
}
export default TodoList;