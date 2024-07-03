import React, { useRef } from "react";
import styled from "styled-components";
import mercado from "../../assets/mercado.avif";
import prod1 from "../../assets/prod1.jpeg";
import prod2 from "../../assets/prod2.png";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../styles.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export const SwiperNav = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    
    const onAutoplayTimeLeft = (s, time, progress) => {
        if (progressCircle.current) {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        }
        if (progressContent.current) {
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
        }
    };

    return (
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
            delay: 7000,
            disableOnInteraction: false,
        }}
        pagination={{
            clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        >
        <SwiperSlide>
            <ImageNav src={mercado}/>
        </SwiperSlide>
        <SwiperSlide>
            <ImageNav src={prod1}/>
        </SwiperSlide>
        <SwiperSlide>
            <ImageNav src={prod2}/>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
        </div>
        </Swiper>
    );
}

const ImageNav = styled.img`
  position: absolute;
  z-index: -1;
`;