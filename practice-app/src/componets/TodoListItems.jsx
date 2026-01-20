import TodoList from "./TodoList";

function TodoListItems({todos, onToggle, onDelete}) {
    return(
        <div className="todoItems">
            <h4>할 일 목록</h4>
            {todos.length === 0 ? (<div>할 일 목록이 없습니다.</div>)
            : (
                 <ul>
                    {todos.map((todos, index) => {
                        return (
                            <li key={index}>
                                <input type="checkbox"
                                checked={todos.isCompleted}
                                onChange={() => {
                                    onToggle(todos.id);
                                }} />
                                <span>{todos.text}</span>
                                <button onClick={() => {
                                    onDelete(todos.id);
                                }}>X</button>
                            </li>
                        )
                    })}
                </ul>
            )}
           
        </div>
    )
}
export default TodoListItems;