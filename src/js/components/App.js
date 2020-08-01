import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { fetchPosts } from "../features/subreddit";
import Header from "./Header";
import LoginForm from "./LoginForm";
import Subreddit from "./Subreddit";
import SubredditSelectionForm from "./SubredditSelectionForm";

const App = () => {
  const dispatch = useDispatch();

  const openNewSubreddit = (subreddit) => {
    dispatch(fetchPosts({ subreddit }));
  };

  useEffect(()=>{
    openNewSubreddit('all');
  }, []);

  return (
    <BrowserRouter>
      <div className="app-container">
        <Header>
          <SubredditSelectionForm onSubmit={openNewSubreddit} />
          {/* <LoginForm /> */}
        </Header>
        <Subreddit />
      </div>
    </BrowserRouter>
  );
};

export default App;
