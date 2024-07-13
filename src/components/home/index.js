import React from "react";
import { SwiperNav } from "../carrosel/carrossel";
import NavegadorMain from "../../Navegador";
import { Container, LinhaNav, Title } from "./homeStyle";

export default function AppMain() {
    return(
        <Container>
          <Title>Bem vindo! Sou seu Gerenciador de Tarefas Pessoal</Title>
            <SwiperNav></SwiperNav>
        </Container>
    )
}