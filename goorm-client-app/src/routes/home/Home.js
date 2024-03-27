import React from "react";
import "./Home.css";
import { Link } from "react-router-dom"

// home 화면에서 게시글로 이동할 수 있도록 하기 위한 BoardPreview 컴포넌트 
import BoardPreview from "../../components/postComponents/BoardPreview";

const Home = ({ postData, setPostData }) => {

  console.log("postData:", postData);
  
  return (
    <div className="home-container">
      <div className="home-title-container">
        <h1 className="home-title">Home</h1>
        <hr className="divider" />
      </div>
      <div className="home-section-container">
        <div className="home-member-section">
          <div className="home-section-name">
            <Link to={`/members`} className="link-item">
              <button className="to-board-btn btn">Member</button>
            </Link>
            <ul className="list-group">
              <Link to={`/members/yerin`} className="link-item">
                <li className="list-group-item">예린</li>
              </Link>
              <Link to={`/members/jiho`} className="link-item">
                <li className="list-group-item">지호</li>
              </Link>
              <Link to={`/members/wooseok`} className="link-item">
                <li className="list-group-item">우석</li>
              </Link>
              <Link to={`/members/jihwan`} className="link-item">
                <li className="list-group-item">지환</li>
              </Link>
              <Link to={`/members/donggeun`} className="link-item">
                <li className="list-group-item">동근</li>
              </Link>
              <Link to={`/members/mingyu`} className="link-item">
                <li className="list-group-item">민규</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="home-board-section">
          <div className="home-section-name">
            <Link to={`/board`} className="link-item">
              <button className="to-board-btn btn">Board</button>
            </Link>
          </div>
          <BoardPreview postData={postData} />
        </div>
        <div className="home-pbl-section">
          <div className="home-section-name">
            <Link to={`/pbl`} className="link-item">
              <button className="to-board-btn btn">PBL</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
