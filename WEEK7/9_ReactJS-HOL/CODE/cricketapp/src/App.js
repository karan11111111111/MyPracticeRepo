import React from 'react';
import './App.css';
import ListofPlayers from './components/ListofPlayers';
import IndianPlayers from './components/IndianPlayers';

function App() {
  // You can toggle this flag to see different outputs
  const flag = false; // Set to true for ListofPlayers, false for IndianPlayers

  return (
    <div className="App">
      {flag ? (
        <div>
          <h1>List of Players</h1>
          <ListofPlayers />
          <hr />
          <h1>List of Players having Scores Less than 70</h1>
          {/* This component will handle filtering within itself */}
          <ListofPlayers filterScore={70} />
        </div>
      ) : (
        <div>
          <h1>Indian Team</h1>
          <IndianPlayers />
        </div>
      )}
    </div>
  );
}

export default App;