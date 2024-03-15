import React, { useState } from "react";
import './Members.css';
import MemberFilterModal from "./MemberFilterModal";

const members = [
  { id: 1, 
    name: 'Jiho',
    role: 'Front End',
    github_url: 'https://github.com/pulv1593',
    email: 'wldwlgh95@gmail.com',
    introduction: 'abc',
    personal_page: '/Home/Members/Jiho',
  },
  { id: 2,
    name: 'Yerin',
    role: 'Front End',
    github_url: 'Github Link',
    email: 'yerin@gmail.com',
    introduction: 'abc',
    personal_page: '/Home/Members/Yerin',
  },
  { id: 3,
    name: 'Wooseok',
    role: 'Front End',
    github_url: 'Github Link',
    email: 'wooseok@gmail.com',
    introduction: 'abc',
    personal_page: '/Home/Members/Wooseok',
  },
  { id: 4,
    name: 'Jihwan',
    role: 'Back End',
    github_url: 'Github Link',
    email: 'jihwan@gmail.com',
    introduction: 'abc',
    personal_page: '/Home/Members/Jihwan',
  },
  { id: 5,
    name: 'Donggeun',
    role: 'Back End',
    github_url: 'Github Link',
    email: 'donggeun@gmail.com',
    introduction: 'abc',
    personal_page: '/Home/Members/Donggeun',
  },
  { id: 6,
    name: 'Mingyu',
    role: 'Back End',
    github_url: 'Github Link',
    email: 'mingyu@gmail.com',
    introduction: 'abc',
    personal_page: '/Home/Members/Mingyu',
  },
];


function Members() {

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMembers, setFilteredMembers] = useState(members);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 검색 기능 구현
  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (!value) {
      setFilteredMembers(members);
    } else {
      const filtered = members.filter((member) =>
        member.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredMembers(filtered);
    }
  };

  // 필터 modal 생성 관련 함수
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const applyFilter = (selectedRole) => {
    const filtered = members.filter((member) => selectedRole === 'All' || member.role === selectedRole);
    setFilteredMembers(filtered);
  };

  // 화면에 표시되는 부분
  return (
    <div>
      <div className="search-container">
        <input type="text" className="searchbar" placeholder="이름을 검색하세요." value={searchTerm} onChange={handleSearchChange} />
        <button id="filterModal" onClick={openModal}>Filter Options</button>
      </div>

      <MemberFilterModal isOpen={isModalOpen} onClose={closeModal} onApplyFilter={applyFilter} />

      <table className="member-info_container">
        <thead className="info-category">
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Email</th>
            <th>Github</th>
            <th>Introduction</th>
            <th>Personal Page</th>
          </tr>
        </thead>
        <tbody className="member-infos">
          {filteredMembers.map((member) => (
            <tr key={member.id}>
              <td>{member.name}</td>
              <td>{member.role}</td>
              <td>{member.email}</td>
              <td><a href={member.github_url}>{member.github_url}</a></td>
              <td>{member.introduction}</td>
              <td><a href={member.personal_page}>Page Link</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Members;