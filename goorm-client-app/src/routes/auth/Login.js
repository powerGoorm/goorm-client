import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import { Container, Card, Form, Button }  from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {

  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    id: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(loginData);
    try{
        // 서버의 로그인 API 엔드포인트로 POST 요청을 보냅니다.
        const response = await axios.post('http://Goorm-server-eb-env.eba-34dkepc4.ap-northeast-2.elasticbeanstalk.com/login', loginData);

        console.log(response);
        sessionStorage.setItem('sessionToken', response.data.sessionToken);
        navigate('/home'); // 로그인 성공 후 리디렉션할 경로
    }
    catch (error) {
      
      console.error('Login failed:', error);
      alert('로그인 실패: 아이디 혹은 비밀번호를 확인해주세요.');
    }
  };

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []); // useEffect는 로그인 화면에서 스크롤을 방지하기 위함.


  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
          <Card style={{ width: '24rem' }} className="p-4">
            <Card.Body>
              <h2 className="text-center mb-4">로그인</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-1">
                  <Form.Control  
                  type="text" 
                  placeholder="아이디" 
                  name="id"
                  value={loginData.id}
                  onChange={handleChange}
                  required/>
                </Form.Group>
                <Form.Group className="mb-5">
                  <Form.Control  
                  type="password" 
                  placeholder="비밀번호" 
                  name="password"
                  value={loginData.password}
                  onChange={handleChange}
                  required/>
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">
                  로그인
                </Button>
                <div className="mt-3 text-center">
                  <Link to="/signup" className="text-decoration-none me-3">회원가입</Link>
                  <Link to="/resetpassword" className="text-decoration-none">비밀번호 재설정</Link>
                </div>
              </Form>
            </Card.Body>
          </Card>
    </Container>
  );
}

export default Login;
