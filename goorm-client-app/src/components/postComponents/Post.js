import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Post.css";
import { validateInput } from "./PostValidation";

export default function Post({ id, title: initialTitle, writer: initialWriter, postBody: initialPostBody, postData, setPostData }) {

  // 수정 기능 구현을 위한 state
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(initialTitle);
  const [editedWriter, setEditedWriter] = useState(initialWriter);
  const [editedPostBody, setEditedPostBody] = useState(initialPostBody);

  // 각 입력 필드의 유효성 검사 오류 메시지를 관리하는 state
  const [titleError, setTitleError] = useState("");
  const [writerError, setWriterError] = useState("");
  const [postBodyError, setPostBodyError] = useState("");

  const handleTitleEditChange = (e) => {
    const value = e.target.value;
    setEditedTitle(value);

    // 유효성 검사
    const errorMessage = validateInput(value, '제목');
    setTitleError(errorMessage);
  }

  const handleWriterEditChange = (e) => {
    const value = e.target.value;
    setEditedWriter(value);
    // 유효성 검사
    const errorMessage = validateInput(value, '작성자');
    setWriterError(errorMessage);
  }

  const handlePostBodyEditChange = (e) => {
    const value = e.target.value;
    setEditedPostBody(value);
    // 유효성 검사
    const errorMessage = validateInput(value, '게시글 내용');
    setPostBodyError(errorMessage);
  }

  const handleSubmit = () => {
    // 각 입력 필드의 유효성 검사
    const titleErrorMessage = validateInput(editedTitle, '제목');
    const writerErrorMessage = validateInput(editedWriter, '작성자');
    const postBodyErrorMessage = validateInput(editedPostBody, '게시글 내용');

    // 오류가 있는 경우 오류 메시지를 설정하고 처리 중단
    if (titleErrorMessage || writerErrorMessage || postBodyErrorMessage) {
      setTitleError(titleErrorMessage);
      setWriterError(writerErrorMessage);
      setPostBodyError(postBodyErrorMessage);
      return;
    }

    // 유효성 검사 통과 시 submit 로직 수행
    let newPostData = postData.map((data) => {
      if (data.id === id) {
        data.title = editedTitle;
        data.writer = editedWriter;
        data.postBody = editedPostBody;
      }
      return data;
    });

    if (typeof setPostData === 'function') {
      setPostData(newPostData);
      localStorage.setItem("postData", JSON.stringify(newPostData));
    } else {
      console.error("setPostData is not a function");
      console.error('바보에러!');
    }

    setIsEditing(false);
  }

  // 삭제 기능 구현
  const handleDeleteClick = (id) => {

    let removePostQuestion = window.confirm('정말 게시글을 삭제하시겠습니까? 삭제 후 되돌릴 수 없습니다.');

    if (removePostQuestion === true) {
      let newPostData = postData.filter((data) => data.id !== id);
    setPostData(newPostData);
    localStorage.setItem("postData", JSON.stringify(newPostData));
    }
    
  };

  if (isEditing) {
    return (
      <div className="post-edit-box card">
        <form onSubmit={handleSubmit}>
          <div className="card-header edit-card-header">
            <input
              id="post-edit-title"
              value={editedTitle}
              onChange={handleTitleEditChange}
              autoFocus
            />
            {titleError && <span className="error">{titleError}</span>}
            <input
              id="post-edit-writer"
              value={editedWriter}
              onChange={handleWriterEditChange}
            />
            {writerError && <span className="error">{writerError}</span>}
          </div>
          <div className="card-body edit-card-body">
            <textarea
              id="post-edit-postBody"
              value={editedPostBody}
              onChange={handlePostBodyEditChange}
              rows="3"
            />
            {postBodyError && <span className="error">{postBodyError}</span>}
          </div>
        </form>
        <div className="post-edit-btn-container">
          <button
            onClick={() => setIsEditing(false)}
            type="button"
            id="post-edit-cancel-btn"
          >취소</button>
          <button 
            onClick={handleSubmit} 
            type="submit"
            id="post-edit-save-btn"
          >저장</button>
        </div>
      </div>
    )
  } else {
    // 게시글 내용의 글자 수가 100자 이상일 경우, 100자까지만 보여주고 "..."을 추가하여 출력
    const limitedPostBody = initialPostBody.length > 100 ? initialPostBody.slice(0, 100) + "..." : initialPostBody;

    return (
      <div id="post-container">
        <div className="card">
          <div className="card-header read-card-header">
            <span id="writer-span">작성자 : {initialWriter}</span> 
            <div id="inpost-btn-container">
              <div id="post-delete">
                <button id='post-delete-btn' onClick={() => handleDeleteClick(id)}>삭제</button>
              </div>
              <div id="post-edit">
                <button id='post-edit-btn' onClick={() => setIsEditing(true)}>수정하기</button>
              </div>
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title">{initialTitle}</h5>
            <p className="card-text">{limitedPostBody}</p>
            <Link to={`/home/board/post/${id}`} className="btn btn-primary">자세히 읽기</Link>
          </div>
        </div>
      </div>
    )
  }
}
