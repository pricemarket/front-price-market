import React, { useEffect, useState } from 'react';
import { Container,AddButton, Form, ContainerDoc, ModalOverlay, ModalContent, Input, SubmitButton, CloseButton, Message } from './CarroselStyle';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';

export function SwiperNav() {
  const [nomedoc, setNomeDoc] = useState('');
  const [link, setLink] = useState('');
  const [documentos, setDocumentos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    handleGetDocumento();
  }, []);

  const handleAddPage = () => {
    setNomeDoc('');
    setLink('');
    setIsModalOpen(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const accessToken = localStorage.getItem('accessToken');
    const decodedToken = jwtDecode(accessToken);
    const email = decodedToken.sub;
    try {
      await axios.patch(
        `https://gerenciador-tarefas-yuip.onrender.com/v1/users/add-doc?email=${email}`,
        { nomedoc, link },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      handleGetDocumento();
      setIsModalOpen(false);
      setNomeDoc('');
      setLink('');
    } catch (error) {
      if (error.response) {
        alert('Erro ao adicionar documento: ' + error.response.data.message);
      } else if (error.request) {
        alert('Erro ao adicionar documento: Sem resposta do servidor');
      } else {
        alert('Erro ao adicionar documento: ' + error.message);
      }
    }
  };

  const handleGetDocumento = async () => {
    const accessToken = localStorage.getItem('accessToken');
    const decodedToken = jwtDecode(accessToken);
    const email = decodedToken.sub;
    try {
      const response = await axios.get(
        `https://gerenciador-tarefas-yuip.onrender.com/v1/users/get-docs?email=${email}`,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      exibeContainerComDocumento(response.data); // Atualiza os documentos recebidos
    } catch (error) {
      if (error.response) {
        alert('Erro ao buscar documento: ' + error.response.data.message);
      } else if (error.request) {
        alert('Erro ao buscar documento: Sem resposta do servidor');
      } else {
        alert('Erro ao buscar documento: ' + error.message);
      }
    }
  };

  const exibeContainerComDocumento = (documentosRecebidos) => {
    setDocumentos(documentosRecebidos);
  };

  return (
    <Container>
      <ContainerDoc>
        <AddButton onClick={() => handleAddPage()}>+</AddButton>
      </ContainerDoc>
      {documentos.map((doc, index) => (
        <ContainerDoc key={index}>
          <a href={doc.link} target="_blank" rel="noopener noreferrer">{doc.nome}</a>
        </ContainerDoc>
      ))}
      {isModalOpen && (
        <>
          <ModalOverlay onClick={() => setIsModalOpen(false)} />
          <ModalContent>
            <CloseButton onClick={() => setIsModalOpen(false)}>&times;</CloseButton>
            <Form onSubmit={handleSubmit}>
              <Input
                type="text"
                placeholder="Digite o Nome da Página"
                value={nomedoc}
                onChange={(e) => setNomeDoc(e.target.value)}
                required
              />
              <Input
                type="url"
                placeholder="DIgite o Link da Página"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                required
              />
              <SubmitButton type="submit">Adicionar</SubmitButton>
            </Form>
          </ModalContent>
        </>
      )}
    </Container>
  );
}
