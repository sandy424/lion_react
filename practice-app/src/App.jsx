import React, { useState } from 'react';
import Header from './componets/Header.jsx';
import CounterController from './componets/CounterController.jsx';
import MouseTracker from './componets/MouseTracker.jsx';
import TodoList from './componets/TodoList.jsx';
import Timer from './componets/Timer.jsx';

import './styles/App.css';

function App() {
  const [current, setCurrent] = useState('counter');

  return (
    <div className="app">
      <Header onSelect={setCurrent} />
      {current === 'counter' ? <CounterController /> : current === 'tracker' ? <MouseTracker /> : current === 'todo' ? <TodoList /> : <Timer />}
    </div>
  )
}

export default App
