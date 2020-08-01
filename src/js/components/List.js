import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return { articles: state.articles };
};

const List = ({articles}) => {
  return (
    <ul>
      {articles.map((article) => (
        <li key={article.id}>{article.title}</li>
      ))}
    </ul>
  );
};
export default connect(mapStateToProps)(List);
