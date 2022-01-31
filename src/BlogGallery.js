import React from "react";
import "./blogGallery.scss";
import { blogs } from "./blogs";

const BlogGallery = () => {
  // el objeto blogs es importado arriba
  const blogsByCategory = blogs.reduce((acc, blog) => {
    if (acc[blog.category]) {
      // categoria ya existente
      return { ...acc, [blog.category]: [...acc[blog.category], blog] };
    } else {
      // nueva categoria añadida al acumulador
      return { ...acc, [blog.category]: [blog] };
    }
  }, {});
  // categorias ordenadas por numero de entradas
  const categories = Object.keys(blogsByCategory);
  const sortedCategories = categories.sort((a, b) =>
    blogsByCategory[a].length > blogsByCategory[b].length ? -1 : 1
  );

  return (
    <div className="blog-gallery">
      {sortedCategories.map((category, index) => {
        return (
          <section
            key={index}
            className={
              "blog-gallery-section blog-section-amount-" +
              blogsByCategory[category].length +
              "-variant-" +
              ((index % 2) + 1)
            }
          >
            <div className="blog-gallery-section-title">
              <h2>{category}</h2>
              <p>Ver Más</p>
            </div>
            {blogsByCategory[category].map((blog, blogIndex) => {
              return (
                <div
                  className={
                    "blog-gallery-section-card blog-gallery-section-card-num-" +
                    blogIndex
                  }
                >
                  <img src={blog.image} alt="" />
                  <h2>{blog.title}</h2>
                  <p>{blog.description}</p>
                </div>
              );
            })}
          </section>
        );
      })}
    </div>
  );
};
export default BlogGallery;
