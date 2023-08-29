"use client";
// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import SoftwareCard from "./SoftwareCard";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Carousel.css";
// init Swiper:

export default function Carousel(props) {
  return (
    <div>
      <h1>
        <span>Destaques de Softwares</span>
      </h1>
      <Swiper
        style={{
          "--swiper-pagination-color": "#981e16",
          "--swiper-navigation-color": "#981e16",
        }}
        pagination={true}
        navigation={true}
        modules={[Navigation, Pagination]}
      >
        {props.Slide.map((element) => {
          return (
            <SwiperSlide>
              <SoftwareCard
                softwareNome={element.nome}
                softwareDesc={element.desc}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
