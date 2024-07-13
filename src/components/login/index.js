import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Input, Button, BoldLink, Message } from './LoginStyle';
import { jwtDecode } from 'jwt-decode';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://gerenciador-tarefas-yuip.onrender.com/v1/auth/login', { email, password }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const token = response.data;
      localStorage.setItem('accessToken', token);
      if (response.data) {
        setMessage('Login bem-sucedido!');
        setTimeout(() => {
          navigate('/app');
        }, 600);
      }
    } catch (error) {
      if (error.response) {
        setMessage('Erro ao fazer login: ' + error.response.data.message);
      } else if (error.request) {
        setMessage('Erro ao fazer login: Sem resposta do servidor');
      } else {
        setMessage('Erro ao fazer login: ' + error.message);
      }
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <label>
          Email:
          <Input 
            type="email" name= "email" 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </label>
        <label>
          Senha:
          <Input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </label>
        <Button type="submit">Login</Button>
        <label>
          Não tem conta? <BoldLink to="/create-client">Criar Cliente</BoldLink>
        </label>
      </Form>
      {message && <Message>{message}</Message>}
    </Container>
  );
};

export default Login;
