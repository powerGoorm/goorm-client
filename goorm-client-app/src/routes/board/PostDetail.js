import React from "react";
import { useParams } from "react-router-dom";

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
    <div>
      <h2>게시물 상세 정보</h2>
      <p>게시물 ID: {post.id}</p>
      <p>제목: {post.title}</p>
      <p>작성자: {post.writer}</p>
      <p>내용: {post.postBody}</p>
      {/* 기타 게시물 정보를 여기에 표시합니다. */}
    </div>
  );
}
