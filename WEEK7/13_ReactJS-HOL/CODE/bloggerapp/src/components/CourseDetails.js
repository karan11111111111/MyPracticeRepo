import React from 'react';

function CourseDetails(props) {
  return (
    <div className="mystyle1">
      <h1>Course Details</h1>
      {props.courses.length ? ( // Conditional rendering using ternary operator
        <ul>
          {props.courses.map((course) => (
            <div key={course.id}>
              <h3>{course.name}</h3>
              <p>{course.date}</p>
            </div>
          ))}
        </ul>
      ) : (
        <p>No courses available.</p>
      )}
    </div>
  );
}

export default CourseDetails;
