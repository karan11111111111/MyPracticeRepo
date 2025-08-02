import React from 'react';
import './App.css';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';
import { books, blogs, courses } from './data'; // Import data

function App() {
  // Example of conditional rendering using a flag (though all are displayed in the final output)
  const showAllComponents = true;

  return (
    <div className="App">
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {showAllComponents && <CourseDetails courses={courses} />} {/* Conditional rendering based on showAllComponents flag */}
        <div className="vertical-line"></div> {/* For the visual separation */}
        {showAllComponents ? <BookDetails books={books} /> : null} {/* Conditional rendering using ternary operator */}
        <div className="vertical-line"></div> {/* For the visual separation */}
        {showAllComponents && <BlogDetails blogs={blogs} />}
      </div>
    </div>
  );
}

export default App;