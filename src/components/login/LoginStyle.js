import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
  width: 300px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
`;

export const BoldLink = styled(Link)`
  font-weight: bold;
  text-decoration: none;
  color: red;

  &:hover {
    text-decoration: underline;
  }
`;

export const Message = styled.div`
  color: green;
  font-weight: bold;
  margin-top: 20px;
  background-color: #e7ffe7;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
`;