import React from "react";
import { Link } from "react-router-dom";
import "./HomePostPreview.css";

export default function PostPreview({ id, title, postBody, writer }) {

  return (
    <Link to={`/board/post/${id}`}  className="link-item">
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold">{title}</div>
        <div className="postBody">
          {postBody.slice(0, 30)}
        </div>
        
      </div>
      <span className="badge text-bg-primary rounded-pill">{writer}</span>
    </li>
    </Link>
    
  );
}
