import React, { useState } from "react";
const SubredditSelectionForm = ({ onSubmit }) => {
  const [subreddit, setSubreddit] = useState("all");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(subreddit);
      }}
    >
      <label>Visit /r/</label>
      <input
        type="text"
        value={subreddit}
        onChange={(event) => setSubreddit(event.target.value)}
      />
    </form>
  );
};

export default SubredditSelectionForm;
