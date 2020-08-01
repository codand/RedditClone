import React, { useState } from "react";
import { connect } from "react-redux";

function timeSince(date) {
  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return interval + " years";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + " months";
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + " days";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " hours";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " minutes";
  }
  return Math.floor(seconds) + " seconds";
}

function humanReadableAge(utcTime) {
  return timeSince(new Date(Date.now() - utcTime));
}

/**
 * author
 * cleanUrl
 * cleanPermalink
 * createdUTC
 * domain
 * numComments
 * over18
 * paginationId
 * promoted
 * stickied
 * thumbnail
 * @param {*} props
 */
const Post = (props) => {
  return (
    <li className="subreddit-post">
      <div className="post-score">
        <span>{props.score}</span>
      </div>
      <div className="post-thumbnail">
        <img src={props.thumbnail}></img>
      </div>
      <div>
        <div className="post-title-bar">
          <a href={props.cleanPermalink}>{props.title}</a>
          <span>({props.domain})</span>
        </div>
        <div className="post-info-bar">
          <p>
            submitted {humanReadableAge(props.createdUTC)} ago by {props.author}
          </p>
        </div>
        <div className="post-links-bar">
          <span>{props.numComments} comments</span>
        </div>
      </div>
    </li>
  );
};

export default connect()(Post);
