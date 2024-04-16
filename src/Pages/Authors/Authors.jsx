import React, { useState } from "react";
import "./Authors.css";
import { authors } from "../../data/authors";

function Authors() {
  const [search, setSearch] = useState("");
  return (
    <div className="authors">
      <div className="authorsearch-wrapper">
        <input
          type="search"
          placeholder="search in authors ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* For Search Bar in Authors  */}
      <div className="authors-wrapper">
        {authors
          .filter((aut) =>
            aut.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((author) => (
            <div key={author.id} className="author">
              <img
                className="author-img"
                src={author.image}
                alt={author.name}
              />
              <h2 className="author-name">{author.name}</h2>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Authors;
