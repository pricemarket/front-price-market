import React, { useState } from 'react';
import axios from 'axios';
import { DescricaoTexto, Container, Form, Input, Button } from '../criarCliente/criarClienteStyle';
import { Message } from '../login/LoginStyle';
import { useNavigate } from 'react-router-dom';

const ClienteForm = () => {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const [cliente, setCliente] = useState({
    chaveDeAcesso: '',
    name: '',
    cpf: '',
    email: '',
    profissao: '',
    sexo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCliente({
      ...cliente,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      chaveDeAcesso: cliente.chaveDeAcesso,
      name: cliente.name,
      email: cliente.email,
      cpf: cliente.cpf,
      profissao: cliente.profissao,
      sexo: cliente.sexo
    };

    try {
      const response = await axios.post('https://gerenciador-tarefas-yuip.onrender.com/v1/users/criar-cliente', data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      setMessage('Cliente Criado com Sucesso!');
        setTimeout(() => {
          navigate('/');
        }, 600);
      setCliente({
        chaveDeAcesso: '',
        name: '',
        cpf: '',
        email: '',
        profissao: '',
        sexo: ''
      });

    } catch (error) {

      if (error.response) {
        setMessage('Erro ao criar cliente: ' + error.response.data.message);
      } else if (error.request) {
        setMessage('Erro ao criar cliente: Sem resposta do servidor');
      } else {
        setMessage('Erro ao criar cliente: ' + error.message);
      }
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <DescricaoTexto>Criar Conta:</DescricaoTexto>
        <label>
          Nome
          <Input type="text" name="name" value={cliente.name} onChange={handleChange} />
        </label>
        <label>
          Email
          <Input type="email" name="email" value={cliente.email} onChange={handleChange} />
        </label>
        <label>
          CPF
          <Input type="text" name="cpf" value={cliente.cpf} onChange={handleChange} />
        </label>
        <label>
          Profissão
          <Input type="text" name="profissao" value={cliente.profissao} onChange={handleChange} />
        </label>
        <label>
          Sexo
          <Input type="text" name="sexo" value={cliente.sexo} onChange={handleChange} />
        </label>
        <label>
          Senha
          <Input type="password" name="chaveDeAcesso" value={cliente.chaveDeAcesso} onChange={handleChange} />
        </label>
        <Button type="submit">Cadastrar</Button>
      </Form>
      {message && <Message>{message}</Message>}
    </Container>
  );
};

export default ClienteForm;
