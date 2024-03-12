import React, { useState } from "react";
import "./Board.css";
import PostList from "../../components/postComponents/PostList";
import PostingForm from "../../components/postComponents/PostingForm";

export default function Board({ postData, setPostData }) {

  // 게시글 작성 폼 toggle을 위한 state
  const [isPostingFormVisible, setIsPostingFormVisible] = useState(false);

  // Postingform toggle 함수
  const togglePostingForm = () => {
    setIsPostingFormVisible(!isPostingFormVisible);
  };

  // 모든 게시글 삭제 함수
  const handleRemoveAllPostClick = () => {
    let allRemoveQuestion = window.confirm("정말 모든 게시글을 지우시겠습니까? 삭제 후 되돌릴 수 없습니다.");
    if (allRemoveQuestion === true) {
      setPostData([]);
      localStorage.setItem("postData", JSON.stringify([]));
      alert("삭제되었습니다.")
    }

  };

  return (
    <div>
      <div id="board-page-title">
        <h1>게시판</h1>
      </div>
      <hr id="divider" />
      <div id="board-container">
        <div id="board-post-btn-container">
          <button onClick={togglePostingForm} id="posting-form-toggle-btn">
            {isPostingFormVisible ? "게시글 작성 멈추기" : "게시글 작성하기"}
          </button>
          <button onClick={handleRemoveAllPostClick} id="posts-all-remove-btn">
            게시글 전부 삭제하기
          </button>
        </div>
        {isPostingFormVisible && (
          <div id="posting-form" className="toggle-posting-form">
            <PostingForm
              postData={postData}
              setPostData={setPostData}
              isPostingFormVisible={isPostingFormVisible}
              setIsPostingFormVisible={setIsPostingFormVisible}
            />
          </div>
        )}
        <div id="board-posts-list-container">
          <PostList postData={postData} setPostData={setPostData} />
        </div>
      </div>
    </div>

  );
}