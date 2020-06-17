import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { TodoSet } from './components/todo_set';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/' component={TodoSet} />
      </BrowserRouter>
    </div>
  )
}

export default App;
