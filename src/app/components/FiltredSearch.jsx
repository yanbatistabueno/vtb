"use client";
import { useState } from "react";
import SoftwareCard from "./SoftwareCard";
import CoursesCard from "./CoursesCard";
import "./FiltredSearch.css";
export default function SearchInput(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTerm, setFilterTerm] = useState("");

  const numberRegx = /^[0-9]*$/;

  let colectedData = props.data.filter((val) => {
    if (props.type != "clients") {
      if (filterTerm == "") {
        return val;
      } else if (val.tag == filterTerm) {
        return val;
      }
    }

    if (filterTerm == "") {
      return val;
    } else if (val.nome.charAt(0) == filterTerm) {
      return val;
    }
  });

  let filtredData = colectedData.filter((val) => {
    if (searchTerm == "") {
      return val;
    } else if (
      val.nome.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    ) {
      return val;
    } else if (
      props.type != "clients" &&
      val.tag.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    ) {
      return val;
    }
  });

  const selectedTag = filtredData.map((element) => {
    if (props.type != "clients") {
      return element.tag;
    }

    return element.nome.charAt(0);
  });
  function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
  }
  const filtredTags = removeDuplicates(selectedTag);
  function changeFilter(e) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setFilterTerm(e.target.innerText);
  }
  console.log(filterTerm);
  return (
    <div>
      <div className="inputs-container">
        <input
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          type="text"
          placeholder="Pesquise..."
        />
        <div>
          <select
            onChange={(e) => {
              setFilterTerm(e.target.value);
            }}
            name=""
            value={filterTerm}
          >
            <option id="vazio" value="">
              Sem Filtros
            </option>
            {props.tags.map((tag) => {
              return (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              );
            })}
          </select>
          <p>Total de itens encontrados: {filtredData.length}</p>
        </div>
      </div>
      {props.type == "software" && (
        <div className="software-list">
          {filtredData.map((element) => {
            return (
              <SoftwareCard
                key={element.nome}
                softwareNome={element.nome}
                softwareDesc={element.desc}
                softwareAnchor={element.tag}
                onClick={changeFilter}
              />
            );
          })}
        </div>
      )}

      {props.type == "course" && (
        <div className="course-list">
          {filtredTags.map((tag) => {
            return (
              <div key={tag} className="filtred-courses">
                <h2>{tag}</h2>
                {filtredData.map((element) => {
                  if (element.tag == tag) {
                    return (
                      <CoursesCard
                        key={element.nome}
                        courseNome={element.nome}
                        courseTipo={element.tag}
                        courseTime={element.time}
                        onClick={changeFilter}
                      />
                    );
                  }
                })}
              </div>
            );
          })}
        </div>
      )}
      {props.type == "clients" && (
        <div className="clients-list">
          {filtredTags.map((tag) => {
            return (
              <div key={tag} className="filtred-courses">
                <div className="tag-container">
                  <h2>
                    <span>{tag}</span>
                  </h2>
                </div>
                {filtredData.map((element) => {
                  if (element.nome.charAt(0) == tag) {
                    return <p key={element.nome}>{element.nome}</p>;
                  }
                })}
              </div>
            );
          })}
        </div>
      )}
      {filtredData.length == 0 && (
        <h2 className="filtro-erro">
          <span>
            {props.type == "software" ? "Software" : "Curso"} pesquisado não
            existe ou não está no filtro selecionado.
            <br />
            Refaça a pesquisa com o nome e o filtro correto.
          </span>
        </h2>
      )}
    </div>
  );
}
