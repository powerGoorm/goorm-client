import React from "react";
import { useParams } from "react-router-dom";
import "./PostDetail.css";
import { Link } from "react-router-dom";


export default function PostDetail({ postData }) {
  let { id } = useParams();

  // 해당 ID와 일치하는 게시물을 찾는 함수
  const findPostById = (id) => {
    return postData.find(post => post.id === parseInt(id));
  };

  // 해당 ID와 일치하는 게시물 가져오기
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
        <Link to={`/home/board`} className="btn btn-primary">게시판으로 돌아가기</Link>
      </div>
    </div>
  );
}
