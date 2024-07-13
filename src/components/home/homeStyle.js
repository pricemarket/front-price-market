import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  flex-direction: column;
`;

export const LinhaNav = styled.div`
  width: 100%;
  height: 3px;
  background-color: black;
  display: flex;
  flex-direction: row;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  color: #4A90E2;
  margin: 20px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  background: linear-gradient(135deg, #6EE2F5 10%, #6454F0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid rgba(74, 144, 226, 0.5); 
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1); 
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 5px 7px rgba(0, 0, 0, 0.15);
`;