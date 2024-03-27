import React from "react";
import "./Home.css";
import { Link } from "react-router-dom"

// home 화면에서 게시글로 이동할 수 있도록 하기 위한 PostList 컴포넌트 
import PostList from "../../components/postComponents/PostList";

const Home = ({ postData, setPostData }) => {
  return (
    <div className="home-container">
      <div className="home-title-container">
        <h1 className="home-title">Home</h1>
        <hr className="divider" />
      </div>
      <div className="home-section-container">
        <div className="home-member-section">
          <div className="home-section-name">
            <Link to={`/home/members`}>
              <button className="to-board-btn btn">Member</button>
            </Link>
            <ul class="list-group">
              <Link to={`/home/members/yerin`}>
                <li className="list-group-item">예린</li>
              </Link>
              <Link to={`/home/members/jiho`}>
                <li className="list-group-item">지호</li>
              </Link>
              <Link to={`/home/members/wooseok`}>
                <li className="list-group-item">우석</li>
              </Link>
              <Link to={`/home/members/jihwan`}>
                <li className="list-group-item">지환</li>
              </Link>
              <Link to={`/home/members/donggeun`}>
                <li className="list-group-item">동근</li>
              </Link>
              <Link to={`/home/members/mingyu`}>
                <li className="list-group-item">민규</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="home-board-section">
          <div className="home-section-name">
            <Link to={`/home/board`}>
              <button className="to-board-btn btn">Board</button>
            </Link>
          </div>
          <PostList postData={postData} setPostData={setPostData} />
        </div>
        <div className="home-pbl-section">
          <div className="home-section-name">
            <Link to={`/home/pbl`}>
              <button className="to-board-btn btn">PBL</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
