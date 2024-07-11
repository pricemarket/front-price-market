import styled from "styled-components";

export const ContainerNavegador = styled.div`
  width: 100vw;
  height: 15vh;
  display: flex;
  flex-direction: row;
  background-color: white;
`

export const TextNav = styled.text`
  font-size: 18px;      
  font-family: 'Arial, sans-serif';
  color: #2e2e2e;          
  line-height: 1.5; 
  text-align: left;      
  margin: 20px 0;      
  padding: 10px 40px;         
  font-weight: 400;     
  letter-spacing: 0.5px;
`;

export const ContainerBotaoInicio = styled.div`
  position: absolute;
  width: 150px;
  height: 30px;
  z-index: 2;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  background-size: cover;
`;