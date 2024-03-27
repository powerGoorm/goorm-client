import React from "react";
import HomePostPreview from "./HomePostPreview"

export default function BoardPreview({ postData }){

  return (
    <ul className="list-group">
      {postData && postData.map((data) => (
        <HomePostPreview
          id={data.id}
          title={data.title}
          postBody={data.postBody}
          writer={data.writer}
        />
      ))}
    </ul>
  );
}