import React, { useState } from "react";
import './SignUp.css';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Card, InputGroup } from 'react-bootstrap';
import axios from 'axios';

const SignUp = () => {

  const navigate = useNavigate();

  //사용자 정보 저장
  const [formData, setFormData] = useState({
    name: '',
    id: '',
    password: '',
    /* passwordConfirm: '',*/
    git: '',
    introduce: null,
  });
  
  // 입력값 변경 핸들러
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // 폼 제출 핸들러
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    
    try {
      const response = await axios.post('http://goorm-server-eb-env.eba-34dkepc4.ap-northeast-2.elasticbeanstalk.com/members/add', formData);
      const { code, message } = response.data.status;
      console.log(response.data);

      console.log(response.data);
  
      // 성공 응답 처리
      if (code == 200) {
        alert(message); 
        navigate('/login');
      }
      // 실패 응답 처리 (이미 존재하는 아이디)
      else if (code == 404) {
        alert(message);
        // 실패 로직, 필요한 경우 사용자에게 추가 행동 안내
      }
      // 기타 응답 코드 처리
      else {
        alert('알 수 없는 오류가 발생했습니다.');
      }
    } catch (error) {
      console.error('회원가입 요청 중 에러 발생:', error);
      alert('회원가입 처리 중 문제가 발생했습니다.');
    }
  };

  return (
  <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
  <Card className="p-4" style={{ width: '30rem' }}>
    <Card.Body>
      <h2 className="text-center mb-4">회원가입</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="name">이름 <span style={{color: 'red'}}>*</span></Form.Label>
          <Form.Control
            type="text" 
            id="name" 
            name="name" 
            onChange={handleChange} 
            required />
        </Form.Group>
        {/* 아이디 입력 필드 */}
        <Form.Group className="mb-3">
          <Form.Label htmlFor="id">아이디 <span style={{color: 'red'}}>*</span></Form.Label>
          <InputGroup>
              <Form.Control 
                type="text"
                id="id"
                name="id"
                onChange={handleChange}
                required />
              {/* <Button variant="outline-secondary" className="check-id-button"
              >중복확인</Button> */}
          </InputGroup>
        </Form.Group>
        {/* 비밀번호 입력 필드 */}
        <Form.Group className="mb-3">
          <Form.Label htmlFor="password">비밀번호 <span style={{color: 'red'}}>*</span></Form.Label>
          <Form.Control 
            type="password" 
            id="password" 
            name="password" 
            onChange={handleChange}
            required />
        </Form.Group>
         {/* 비밀번호 확인 입력 필드 */}
        {/* <Form.Group className="mb-3">
          <Form.Label htmlFor="password-confirm">비밀번호 재확인 <span style={{color: 'red'}}>*</span></Form.Label>
          <Form.Control
            type="password"
            id="password-confirm"
            name="passwordConfirm"
            isInvalid={formData.password !== formData.passwordConfirm}
            onChange={handleChange}
            required />
            <Form.Control.Feedback type="invalid">
              비밀번호가 일치하지 않습니다.
            </Form.Control.Feedback>
        </Form.Group> */}
         {/* 깃허브 주소 입력 필드 */}
        <Form.Group className="mb-3">
          <Form.Label htmlFor="git">깃허브 주소 <span style={{color: 'red'}}>*</span></Form.Label>
          <Form.Control 
            type="url" 
            id="github" 
            name="git" 
            onChange={handleChange} 
            placeholder="https://github.com/example"
            required />
        </Form.Group>
           {/* 자기 소개 입력 필드 */}
        <Form.Group className="mb-3">
          <Form.Label htmlFor="introduce">자기 소개</Form.Label>
          <Form.Control
          as="textarea"
          id="introduce"
          name="introduce"
          maxLength="200"
          style={{ resize: 'none' }}
          placeholder="200자 이내로 작성해주세요."
          onChange={handleChange}/>
        </Form.Group> 
        <div className="d-grid">
          <Button variant="primary" type="submit">가입 하기</Button>
        </div>
      </Form>
    </Card.Body>
  </Card>
</Container>
  )
}

export default SignUp;