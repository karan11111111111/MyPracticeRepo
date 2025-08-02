import React from 'react';

// Destructuring to display Odd Team Players
export function OddPlayers({ first, third, fifth }) {
  return (
    <div>
      <ul>
        <li>First : {first}</li>
        <li>Third : {third}</li>
        <li>Fifth : {fifth}</li>
      </ul>
    </div>
  );
}

// Destructuring to display Even Team Players
export function EvenPlayers({ second, fourth, sixth }) {
    return (
      <div>
        <ul>
          <li>Second : {second}</li>
          <li>Fourth : {fourth}</li>
          <li>Sixth : {sixth}</li>
        </ul>
      </div>
    );
  }

// Merging two arrays
const T20Players = ['First Player', 'Second Player', 'Third Player'];
const RanjiTrophyPlayers = ['Fourth Player', 'Fifth Player', 'Sixth Player'];
export const IndianTeam = [...T20Players, ...RanjiTrophyPlayers];

function IndianPlayers() {
  // Example players for destructuring (you'd likely get these from props or state in a real app)
  const specificIndianPlayers = ['Sachin1', 'Dhoni2', 'Virat3', 'Rohit4', 'Yuvraj5', 'Raina6'];

  return (
    <div>
      <h2>Odd Players</h2>
      {/* Pass the specific elements for destructuring */}
      <OddPlayers first={specificIndianPlayers[0]} third={specificIndianPlayers[2]} fifth={specificIndianPlayers[4]} />
      <hr />
      <h2>Even Players</h2>
      <EvenPlayers second={specificIndianPlayers[1]} fourth={specificIndianPlayers[3]} sixth={specificIndianPlayers[5]} />
      <hr />
      <h2>List of Indian Players Merged:</h2>
      <ul>
        {IndianTeam.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
}

export default IndianPlayers;