import React from "react";
import BlogCalleryCards from "./BlogCalleryCards";
import "./blogGallery.scss";
import { blogs } from "./blogs";

const BlogGallery = () => {
  // el objeto blogs mockup es importado arriba
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
          <section key={index} className="blog-gallery-section">
            <BlogCalleryCards category={category} blogs={blogsByCategory[category]} />
          </section>
        );
      })}
    </div>
  );
};
export default BlogGallery;
