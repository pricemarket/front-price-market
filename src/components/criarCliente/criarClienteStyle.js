import styled from 'styled-components';

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
  border: 1px solid #ccc;
  padding: 40px;
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

export const DescricaoTexto = styled.span`
  font-weight: bold;
  color: #333;
  font-size: 16px;
  padding-bottom: 30px;
`;