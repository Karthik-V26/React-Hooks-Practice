import React, { useState, useEffect } from "react";
import axios from "axios";
import "../index.css";
function DataFetching() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div>
      <h1>Data Fetching using useEffect and useState Hooks</h1>
      <ul>
        {posts.map((each) => {
          return <li key={each.id}>{each.title}</li>;
        })}
      </ul>
    </div>
  );
}
export default DataFetching;
