import React from 'react'
import "./PostingForm.css"

export default function PostingForm({ title, setTitle, postBody, setPostBody, writer, setWriter, handleSubmit }) {

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const handlePostBodyChange = (e) => {
    setPostBody(e.target.value);
  }

  const handleWriterchange = (e) => {
    setWriter(e.target.value);
  }


  return (
    <div id='post-container'>

      <form onSubmit={handleSubmit} id="post-submit-box" >
        <div className="input-group mb-3" id="post-title-input">
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

        <div className="input-group mb-3" id="post-writer-input">
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

        <div className="mb-3">
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

        <input
          id="post-submit-btn"
          type="submit"
          value="게시"
        />
        
      </form>
    </div>

  )
}