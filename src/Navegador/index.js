import { ContainerNavegador, TextNav } from "./NavegadorStyle";
import React, { useState } from "react";
import { Link } from 'react-router-dom';

export default function NavegadorMain() {
    return (
        <ContainerNavegador>
            <Link to="/app">
                <TextNav>HOME</TextNav>
            </Link>
            <Link to="/produtos">
                <TextNav>PRODUTOS</TextNav>
            </Link>
            <Link to="/comparar-produtos">
                <TextNav>COMPARAR PRODUTOS</TextNav>
            </Link>
            <Link to="/contatos">
                <TextNav>CONTATOS</TextNav>
            </Link>
        </ContainerNavegador>
    )
}