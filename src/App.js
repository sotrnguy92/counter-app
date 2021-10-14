import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

// usestate is a React hook
// a hook is just a function that returns something

function App() {

    const [counter, setCounter] = useState(0);
    const [hungry, setHungry] = useState(false);

    //Once you return html in react you cant use JS but you can still render js in the html with {}
    return (
    <div className="App">
      <header className="App-header">
          {hungry ? <p>I am hungry</p>: null}
          <h1> Counter {counter}</h1>
          <button
              onClick={() => {
                  setCounter(counter+1)
              }}
          >
              Increment
          </button>

          <button
              onClick={() => setCounter(counter-1)}
          >
              Decrement
          </button>

          <button
            onClick={() => setHungry(!hungry)}
          >
              make hungry
          </button>

      </header>
    </div>
  );
}

export default App;
