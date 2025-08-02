import React from 'react';

const players = [
  { name: 'Jack', score: 50 },
  { name: 'Michael', score: 70 },
  { name: 'John', score: 40 },
  { name: 'Ann', score: 61 },
  { name: 'Elisabeth', score: 61 },
  { name: 'Sachin', score: 95 },
  { name: 'Dhoni', score: 100 },
  { name: 'Virat', score: 84 },
  { name: 'Jadeja', score: 64 },
  { name: 'Raina', score: 75 },
  { name: 'Rohit', score: 80 },
];

function ListofPlayers(props) {
  const playersToDisplay = props.filterScore
    ? players.filter(item => item.score < props.filterScore) // Filter players with scores below the given filterScore
    : players; // Display all players if no filterScore prop is provided

  return (
    <div>
      <ul>
        {playersToDisplay.map((item, index) => (
          <div key={index}>
            <li>Mr. {item.name}<span> {item.score}</span></li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default ListofPlayers;