function TodoListItems() {
    return(
        <div className="todoItems">
            <h4>할 일 목록</h4>
            <ul>
                <li>
                    <input type="checkbox" />
                    <span>식사 하기</span>
                    <button>X</button>
                </li>
            </ul>
        </div>
    )
}
export default TodoListItems;