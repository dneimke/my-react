import React from 'react';
import { Navbar, TodoList } from './components'

function App() {
  return (
    <div>
      <Navbar expanded={false} />
      <TodoList/>
    </div>
  );
}

export default App;
