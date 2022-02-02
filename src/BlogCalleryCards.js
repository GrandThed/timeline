import React, { useState } from "react";

const BlogCalleryCards = ({ category, blogs }) => {
  let blogsByPages = [];
  const pageSize = 2;
  for (var i = 0; i < blogs.length; i += pageSize) {
    blogsByPages.push(blogs.slice(i, i + pageSize));
    console.log(i);
  }
  const totalPages = blogsByPages.length;
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <>
      <div className="blog-gallery-section-title">
        <h2>{category}</h2>

        <div className="blog-gallery-section-title-pager-container">
          {totalPages > 1 &&
            [...Array(totalPages).keys()].map((page) => {
              return (
                <button
                  onClick={() => setCurrentPage(page)}
                  className={currentPage === page ? "active" : ""}
                >
                  ●
                </button>
              );
            })}
        </div>
      </div>

      <div className="blog-gallery-section-container">
        {blogsByPages[currentPage].map((blog, blogIndex) => {
          return (
            <div key={blogIndex} className="blog-gallery-section-card">
              <img src={blog.image} alt="" />
              <h2>{blog.title}</h2>
              <p>{blog.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BlogCalleryCards;
