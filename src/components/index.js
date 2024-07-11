import styled from "styled-components";
import React from "react";
import { SwiperNav } from "./carrosel/carrossel";
import NavegadorMain from "../Navegador";

export default function AppMain() {
    return(
        <Container>
            <NavegadorMain></NavegadorMain>
            <LinhaNav></LinhaNav>
            <SwiperNav></SwiperNav>
        </Container>
    )
}

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

export const LinhaNav = styled.div`
  width: 100%;
  height: 3px;
  background-color: black;
  display: flex;
  flex-direction: row;
`;