import { useEffect, useState } from 'react';

function App() {
  const [posts, setPosts] = useState([]);

  function getData() {
    fetch('http://localhost:8000/posts')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>POSTS</h1>
      <ul>
        {posts.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
