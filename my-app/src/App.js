import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <form className="form">
          Email: <br/>
          <input type="text" name="email"></input> <br/>
          Password: <br/>
          <input type="text" name="password"></input> <br/>
        </form>
      </header>
    </div>
  );
}

export default App;
