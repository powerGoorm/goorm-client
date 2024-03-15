import React, { useEffect, useState } from 'react';

function MemberFilterModal({ isOpen, onClose, onApplyFilter }) {
  const [selectedRole, setSelectedRole] = useState('All');

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleSubmit = (event) => {
    event.stopPropagation();
    onApplyFilter(selectedRole);
    onClose();
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      const modal = document.querySelector('#filterModal');
      if (modal && !modal.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('click', handleOutsideClick);
    }

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  if (!isOpen) {
    return null;
  }

  // Filter modal 창에 표시되는 부분
  return (
    <div id="filterModal" onClick={stopPropagation} style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', zIndex: 1000 }}>
      <h2>Filter Options</h2>
      <select onChange={handleRoleChange} value={selectedRole}>
        <option value="All">All Roles</option>
        <option value="Front End">Front End</option>
        <option value="Back End">Back End</option>
      </select>
      <button onClick={handleSubmit}> Apply </button>
      <button onClick={onClose}> X </button>
    </div>
  );
}

export default MemberFilterModal;