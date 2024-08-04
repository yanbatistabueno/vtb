"use client";
// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import SoftwareCard from "./SoftwareCard";
import SoftwareSnaphot from "./SoftwareSnapshot";
import ModuloContainer from "./ModuloContainer";
import { useState } from "react";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./Carousel.css";
// init Swiper:

export default function Carousel(props) {
  let [snapshotImage, setSnapshot] = useState();
  function showSlideClicked(softwareName) {
    console.log("Clicou no" + softwareName);
    setSnapshot(softwareName);
  }

  function changeSlide(slide) {
    setSnapshot(slide);
  }

  let moduloStyle = {
    display: "flex",
    flexDirection: "column",
  };
  return (
    <div>
      <h1 className="carousel-title">
        <span>
          {props.type == "software"
            ? "Destaques de Softwares"
            : props.type == "snapshot"
            ? "Snapshot"
            : "Módulos"}
        </span>
      </h1>

      <Swiper
        style={{
          "--swiper-pagination-color": "#981e16",
          "--swiper-navigation-color": "#981e16",
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={props.type == "software" ? { delay: 5000 } : false}
      >
        {props.Slide.map((element) => {
          return (
            <SwiperSlide>
              {/* {props.type == "software" ? (
                <SoftwareCard
                  softwareNome={element.nome}
                  softwareDesc={element.desc}
                />
              ) : (
                <SoftwareSnaphot
                  click={() => {
                    return showSlideClicked(element);
                  }}
                  Slide={element}
                />
              )} */}
              {props.type == "software" ? (
                <SoftwareCard
                  softwareNome={element.nome}
                  softwareDesc={element.desc}
                />
              ) : props.type == "snapshot" ? (
                <SoftwareSnaphot
                  click={() => {
                    return showSlideClicked(element);
                  }}
                  Slide={element}
                />
              ) : (
                <div style={moduloStyle}>
                  <ModuloContainer nome={element.nome} desc={element.desc} />
                  {/* <SoftwareSnaphot
                    click={() => {
                      return showSlideClicked(element);
                    }}
                    Slide={`/software-images/modulos/${element.nome}/${element.nome}_img-1.png`}
                  /> */}
                </div>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>

      {snapshotImage != null && (
        <div className="snapshot-full-preview">
          <button
            className="close-snapshot"
            onClick={() => {
              setSnapshot(null);
            }}
          >
            X
          </button>
          <img src={snapshotImage} alt="" />
          <div>
            {props.Slide.map((slide, index) => {
              return (
                <button
                  className="change-slide"
                  style={{
                    backgroundColor:
                      slide == snapshotImage ? "#981e16" : "white",
                    color: slide == snapshotImage ? "white" : "black",
                  }}
                  onClick={() => {
                    changeSlide(slide);
                  }}
                >
                  {index}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
