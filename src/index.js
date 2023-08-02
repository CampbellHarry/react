
import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from './App'; // Named import
import Box from './App'; // Default import

function App() {
  return (
    <div>
      <Header />
      <Box />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));