import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../styles.css';

import { Pagination, Navigation } from 'swiper/modules';

import { CustomSwiperSlide, AddButton, SlideContent, Form } from './CarroselStyle';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';

export function SwiperNav() {
  const [nomedoc, setNomeDoc] = useState('');
  const [link, setLink] = useState('');

  const handleAddPage = () => {
    const nomeDocInput = prompt('Digite o nome da página:');
    const linkInput = prompt('Digite o link da página:');
    if (nomeDocInput && linkInput) {
      setNomeDoc(nomeDocInput);
      setLink(linkInput);
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    const accessToken = localStorage.getItem('accessToken');
    const decodedToken = jwtDecode(accessToken);
    const email = decodedToken.sub;
    try {
      const response = await axios.patch(
        `https://gerenciador-tarefas-yuip.onrender.com/v1/users/add-doc?email=${email}`,
        { nomedoc, link },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

    } catch (error) {
      if (error.response) {
        alert('Erro ao fazer login: ' + error.response.data.message);
      } else if (error.request) {
        alert('Erro ao fazer login: Sem resposta do servidor');
      } else {
        alert('Erro ao fazer login: ' + error.message);
      }
    }
  };

  const slides = [
    { id: 1},
    { id: 2},
    { id: 3},
    { id: 4},
    { id: 5},
  ];

  return (
    <>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
              <a href={slide.link} target="_blank" rel="noopener noreferrer"/>
              <AddButton onClick={() => handleAddPage(slide.id)}>+</AddButton>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );

}