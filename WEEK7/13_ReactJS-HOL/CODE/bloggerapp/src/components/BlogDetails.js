import React from 'react';

function BlogDetails(props) {
  // Conditional rendering using logical && operator
  const content = props.blogs.length > 0 && (
    <ul>
      {props.blogs.map((blog) => (
        <div key={blog.id}>
          <h3>{blog.title}</h3>
          <p>{blog.author}</p>
          <p>{blog.content}</p>
        </div>
      ))}
    </ul>
  );

  return (
    <div className="v1">
      <h1>Blog Details</h1>
      {content}
      {!props.blogs.length && <p>No blog posts available.</p>} {/* Conditional rendering using logical && */}
    </div>
  );
}

export default BlogDetails;