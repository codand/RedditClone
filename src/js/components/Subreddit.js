import React from "react";
import { useSelector } from "react-redux";
import LoadingModal from "./LoadingModal";
import Post from "./Post";

const Subreddit = () => {
  const subreddit = useSelector((state) => state.subreddit);

  let content;
  if (subreddit.error) {
    content = (
      <div>
        <h1>404 LOL</h1>
        <pre>{JSON.stringify(subreddit.error, null, 2)}</pre>
      </div>
    );
  } else {
    content = (
      <ol>
        {subreddit.posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </ol>
    );
  }

  return (
    <div>
      {content}
      {subreddit.isLoading && <LoadingModal />}
    </div>
  );
};

export default Subreddit;
