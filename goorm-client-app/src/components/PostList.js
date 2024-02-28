import React from "react";
import Post from "./Post";
import "./PostList.css";

export default function PostList({ postData, setPostData }) {

  console.log("postData", postData);

  return (
    <div id="post-box">
      { postData && postData.map((data) => (
        <Post 
          key={data.id}
          id={data.id}
          title={data.title}
          writer={data.writer}
          postBody={data.postBody}
          postData={postData}
          setPostData={setPostData}
        />
      ))}
    </div>
  );
}
