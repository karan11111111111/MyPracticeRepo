import React, { useState } from 'react';
import './App.css';

// Counter component
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
    this.incrementAndSayHello = this.incrementAndSayHello.bind(this);
  }

  incrementCount() {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  decrementCount() {
    this.setState(prevState => ({
      count: prevState.count - 1
    }));
  }

  // Method to be invoked along with incrementCount [cite: 99, 101]
  sayHello() {
    alert("Hello from static message!");
  }

  // Invokes multiple methods [cite: 99]
  incrementAndSayHello() {
    this.incrementCount();
    this.sayHello();
  }

  render() {
    return (
      <div>
        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.incrementCount}>Increment</button> {/* [cite: 98] */}
        <button onClick={this.decrementCount}>Decrement</button> {/* [cite: 98] */}
        <button onClick={this.incrementAndSayHello}>Increment & Say Hello</button> {/* [cite: 99] */}
        <hr/>
      </div>
    );
  }
}

// Say Welcome component
function SayWelcomeButton() {
  const sayWelcome = (message) => {
    alert(message);
  };

  return (
    <div>
      <button onClick={() => sayWelcome("Welcome!")}>Say Welcome</button> {/* [cite: 102] */}
      <hr/>
    </div>
  );
}

// Synthetic event example
function SyntheticEventButton() {
  const handleClick = (event) => {
    console.log("Synthetic event:", event); // You can inspect the synthetic event object
    alert("I was clicked!"); // [cite: 103]
  };

  return (
    <div>
      <button onClick={handleClick}>OnPress (Synthetic Event)</button> {/* [cite: 103] */}
      <hr/>
    </div>
  );
}

// Currency Converter component [cite: 104]
function CurrencyConverter() {
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState('');

  const handleRupeesChange = (event) => {
    setRupees(event.target.value);
    setEuro(''); // Clear euro when rupees change
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    if (rupees) {
      const conversionRate = 0.011; // Example rate: 1 INR = 0.011 EUR
      setEuro((parseFloat(rupees) * conversionRate).toFixed(2));
    }
  };

  return (
    <div>
      <h2>Currency Converter (INR to EUR)</h2>
      <form onSubmit={handleSubmit}> {/* [cite: 105] */}
        <label>
          Indian Rupees (INR):
          <input type="number" value={rupees} onChange={handleRupeesChange} />
        </label>
        <br />
        <button type="submit">Convert to Euro</button> {/* [cite: 104] */}
      </form>
      {euro && <p>Euro: €{euro}</p>}
      <hr/>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Event Handling Examples</h1>
      <Counter />
      <SayWelcomeButton />
      <SyntheticEventButton />
      <CurrencyConverter />
    </div>
  );
}

export default App;