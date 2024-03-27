import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./PostDetail.css";

export default function PostDetail({ postData, isLoggedIn }) {
  let { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      alert("로그인이 필요한 페이지입니다.");
      navigate(`/login`);
    }
  }, [isLoggedIn, navigate]);

  const findPostById = (id) => {
    return postData ? postData.find(post => post.id === parseInt(id)) : null;
  };

  const post = findPostById(id);

  if (!post) {
    return <div>게시물을 찾을 수 없습니다.</div>;
  }

  return (
    <div id="all-box">
      <div id="postDetail-box">
        <div id="postDetail-component-title">
          <h2>게시물 상세 정보</h2>
        </div>

        <div className="postDetail-section">
          <div className="postDetail-section-title">제목</div>
          <div className="postDetail-section-content">{post.title}</div>
        </div>

        <div className="postDetail-section">
          <div className="postDetail-section-title">작성자</div>
          <div className="postDetail-section-content">{post.writer}</div>
        </div>

        <div className="postDetail-section">
          <div id="postDetail-body" className="postDetail-section-content">
            <p>{post.postBody}</p>
          </div>
        </div>
      </div>
      <div id="postDetail-return-btn">
        <button className="btn btn-primary" onClick={() => navigate(`/board`)}>
          게시판으로 돌아가기
        </button>
      </div>
    </div>
  );
}
