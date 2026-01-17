function TodoProgress(){
    return(
        <div className="todoProgress">
            <div>2 / 5</div>
            <progress value={40} max={100} />
            <div>40%</div>
        </div>
    )
}
export default TodoProgress;