import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  flex-direction: column;
`;

export const Navegador = styled.div`
  width: 100vw;
  height: 20vh;
  background-color: blue;
  display: flex;
`
export const ImageNav = styled.img`
  position: absolute;
  z-index: -1;
`;