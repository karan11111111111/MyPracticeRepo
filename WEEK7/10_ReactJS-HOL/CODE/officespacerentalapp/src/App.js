import React from 'react';
import './App.css'; 

function App() {
 
  const office = {
    name: 'DBS',
    rent: 50000,
    address: 'Chennai',
    imageUrl: 'https://i.pinimg.com/736x/7f/95/81/7f9581ed2be85103eb3ecced0b9d4596.jpg', 
  };

  
  const rentColor = office.rent < 60000 ? 'red' : 'green';


  const officeSpaces = [
    { name: 'DBS', rent: 50000, address: 'Chennai', imageUrl: 'https://5.imimg.com/data5/IX/NJ/MY-9572510/front-desk-office-250x250.jpg' },
    { name: 'WeWork', rent: 70000, address: 'Bangalore', imageUrl: 'https://via.placeholder.com/150' },
    { name: 'CoWrks', rent: 55000, address: 'Mumbai', imageUrl: 'https://via.placeholder.com/150' },
  ];

  return (
    <div className="App">
   
      <h1>Office Space , at Affordable Range</h1>

  
     <img
  src={office.imageUrl}
  alt="Office Space"
  style={{ width: '25%', height: '25%' }} 
/>


      <h3>Name: {office.name}</h3>
      <h3 style={{ color: rentColor }}>Rent: Rs. {office.rent}</h3> 
      <h3>Address: {office.address}</h3>

     
    </div>
  );
}

export default App;