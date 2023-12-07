import React from 'react';
import './App.css';
import Header from './Header';
import Products from './Products';

function App() {
  function doSomething(data) {
    console.log("hello " + data);
  }

  return (
    <div className="App">
      <Header />
      <Products />
      <button className='btn' onClick={() => {
        doSomething("welcome");
      }}>Click</button>
    </div>
  );
}

export default App;
