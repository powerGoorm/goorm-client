import React, { useState } from 'react'
import "./PostingForm.css"
import { validateInput } from './PostValidation';

export default function PostingForm({ postData, setPostData, isPostingFormVisible, setIsPostingFormVisible }) {

  // 새로운 게시글을 만들기 위한 state

  const [title, setTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [writer, setWriter] = useState("");

  // 각 입력 필드의 유효성 검사 오류 메시지를 관리하는 state
  const [titleError, setTitleError] = useState("");
  const [writerError, setWriterError] = useState("");
  const [postBodyError, setPostBodyError] = useState("");

  // 새로운 게시글 등록 함수
  const handlePostSubmit = (e) => {

    // 새로고침 방지
    e.preventDefault();

    // 각 입력 필드의 유효성 검사

    const titleErrorMessage = validateInput(title, '제목');
    const writerErrorMessage = validateInput(writer, '작성자');
    const postBodyErrorMessage = validateInput(postBody, '게시글 내용');

    // 오류가 있는 경우 오류 메시지를 설정하고 처리 중단
    if (titleErrorMessage || writerErrorMessage || postBodyErrorMessage) {
      setTitleError(titleErrorMessage);
      setWriterError(writerErrorMessage);
      setPostBodyError(postBodyErrorMessage);
      return;
    }

    // 유효성 검사 통과 시 submit 로직 수행 새로운 게시글 객체 생성
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

  // 각 input 값 할당 및 유효성 검사
  const handleTitleChange = (e) => {

    const value = e.target.value;
    setTitle(value);

    const errorMessage = validateInput(value, '제목');
    setTitleError(errorMessage);

  }

  const handleWriterchange = (e) => {

    const value = e.target.value;
    setWriter(value);

    // 유효성 검사
    const errorMessage = validateInput(value, '작성자');
    setWriterError(errorMessage);
  }

  const handlePostBodyChange = (e) => {

    const value = e.target.value;
    setPostBody(value);

    // 유효성 검사
    const errorMessage = validateInput(value, '게시글 내용');
    setPostBodyError(errorMessage);
  }


  return (
    <div id='post-container'>

      <form onSubmit={handlePostSubmit} id="post-submit-box" >
        <div className="input-group" id="post-title-input">
          <span className="input-group-text" id='inpurGroup-sizing-default'>제목</span>
          <input
            type="text"
            name="title"
            className="form-control"
            aria-label='title'
            aria-describedby='inpurGroup-sizing-default'
            placeholder="제목을 입력하세요."
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        {titleError && <div className="text-validation-error">{titleError}</div>}

        <div className="input-group" id="post-writer-input">
          <span className="input-group-text" id='inputGroup-sizing-default'>작성자</span>
          <input
            type="text"
            name="writer"
            className="form-control"
            placeholder="작성자 이름을 입력하세요."
            value={writer}
            onChange={handleWriterchange}
          />
        </div>
        {writerError && <div className="text-validation-error">{writerError}</div>}

        <div id="post-body-input">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            name="postBody"
            placeholder="게시글 내용을 입력하세요."
            value={postBody}
            onChange={handlePostBodyChange}
          ></textarea>
        </div>
        {postBodyError && <div className="text-validation-error">{postBodyError}</div>}

        <input
          id="post-submit-btn"
          type="submit"
          value="게시"
        />

      </form>
    </div>

  )
}