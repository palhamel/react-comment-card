import React from "react";
import faker from 'faker'

export const CommentDetail = () => {
  return (
    <div className="comment">
        <a href="/" className="avatar">
          <img src={faker.image.avatar()} alt="avatar" />
        </a>
        <div className="content">
          <a href="/" className="author">
            Sten
          </a>
          <div className="metadata">
            <span className="date">Today at 6:00pm</span>
          </div>
          <div className="text">Nice blog post</div>
        </div>
    </div>
  )
}