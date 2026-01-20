function TodoProgress({todos}){
    const allCount = todos.length;
    const completedTodos = todos.filter((todo) => todo.isCompleted);
    const completedCount = completedTodos.length;

    const progress = (completedCount / allCount) * 100;

    return(
        <div className="todoProgress">
            <div>{completedCount} / {allCount}</div>
            <progress value={progress} max={100} />
            <div>{Math.floor(progress)}%</div>
        </div>
    )
}
export default TodoProgress;