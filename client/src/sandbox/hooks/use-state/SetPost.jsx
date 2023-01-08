import { useState } from "react";

const SetPost = () => {
  const INITIAL_DATA = { title: "", subtitle: "", author: "", createdAt: "" };
  const [post, setPost] = useState(INITIAL_DATA);
  const [posts, setPosts] = useState([]);

  const createPost = (e) => {
    e.preventDefault();
    setPosts([
      ...posts,
      { ...post, createdAt: new Date().toLocaleTimeString() },
    ]);
    return setPost(INITIAL_DATA);
  };

  return (
    <div>
      <form>
        <h5>
          Post title: {post.title} {post.subtitle} {post.author}
        </h5>
        <input
          type="text"
          placeholder="enter title"
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          value={post.title}
        />
        <input
          type="text"
          placeholder="enter subtitle"
          onChange={(e) => setPost({ ...post, subtitle: e.target.value })}
          value={post.subtitle}
        />
        <input
          type="text"
          placeholder="enter autor"
          onChange={(e) => setPost({ ...post, author: e.target.value })}
          value={post.author}
        />

        <button
          onClick={createPost}
          disabled={!post.title | !post.subtitle | !post.author}
        >
          {" "}
          CREATE{" "}
        </button>
      </form>

      {!posts.length && <div>print</div>}
    </div>
  );
};

export default SetPost;
