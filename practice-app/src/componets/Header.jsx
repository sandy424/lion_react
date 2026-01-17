function Header({ onSelect }) {
    return(
        <div className="menu">
            <button onClick={() => onSelect('counter')}>Counter App</button>
            <button onClick={() => onSelect('tracker')}>Mouse Tracker</button>
            <button onClick={() => onSelect('todo')}>todo List</button>
        </div>
    )
}
export default Header;