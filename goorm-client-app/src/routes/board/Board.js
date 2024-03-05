import React, { useState } from "react";
import "./Board.css";
import PostList from "../../components/postComponents/PostList";
import PostingForm from "../../components/postComponents/PostingForm";

export default function Board({ postData, setPostData }) {

  // 새로운 게시글을 만들기 위한 state
  const [title, setTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [writer, setWriter] = useState("");

  // 게시글 작성 폼 toggle을 위한 state
  const [isPostingFormVisible, setIsPostingFormVisible] = useState(false);

  // Postingform toggle 함수
  const togglePostingForm = () => {
    setIsPostingFormVisible(!isPostingFormVisible);
  };

  // 새로운 게시글 등록 함수
  const handlePostSubmit = (e) => {

    // 새로고침 방지
    e.preventDefault();

    // 새로운 게시글 객체 생성
    let newPost = {
      id: Date.now(),
      title: title,
      postBody: postBody,
      writer: writer,
      writtenDate: Date.now(),
    };

    // 새로운 게시글 객체를 기존 객체 배열에 추가
    let newPostDataArray = [...postData, newPost];
    setPostData(newPostDataArray);
    localStorage.setItem("postData", JSON.stringify([...postData, newPost]));

    // input 부분 비우기
    setTitle("");
    setPostBody("");
    setWriter("");

    // 게시글 작성 form 없애기
    setIsPostingFormVisible(!isPostingFormVisible);
  };

  // 모든 게시글 삭제 함수
  const handleRemoveAllPostClick = () => {
    let allRemoveQuestion = window.confirm("정말 모든 게시글을 지우시겠습니까?");
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
      <hr id="board-title-row"/>
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
              title={title}
              setTitle={setTitle}
              postBody={postBody}
              setPostBody={setPostBody}
              writer={writer}
              setWriter={setWriter}
              handleSubmit={handlePostSubmit}
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
