import React, { useState } from "react";
import CardPost from "./components/CardPost";
import { DATA_POST } from "./components/CardPost/DATA_POST";
import { CardPostContain, WrapperCard } from "./components/CardPost/style";


function App() {
  var pessoas = [
    { nome: "jullia", sobrenome: "izidorio", idade: 24 },
    { nome: "juliana", sobrenome: "paiva", idade: 24 },
    { nome: "junior", sobrenome: "izidorio", idade: 30 },
    { nome: "joyce", sobrenome: "lima", idade: 22 },
    { nome: "jullia", sobrenome: "lima", idade: 18 },
  ];

  // console.log(pessoas)
  // console.log(pessoas.length)

  const [numeros, setNumeros] = useState([1, 2, 3, 4, 5]);
  const carros = ["uno", "palio", "celta", "gol", "fiesta"];

  const meuMap = pessoas.map((item) => {
    return <di>{item.nome} <br/></di> 
  });

  console.log(meuMap)

  //constante
  const filterInNumeros = numeros.filter((item) => {
    return item > 3;
  });

  const meuFilter = pessoas.filter((item) => {
    return item.nome === "jullia";
  });

  const meuForEach = pessoas.forEach((item) => {
    return (item.nome = "maria");
  });

  const meuFind = pessoas.find((item) => {
    return item.idade === 24;
  });

  const includesInNumeros = numeros.includes(2);

  const meuIncludes = pessoas.filter((item) => item.nome.includes("j"));

  const data = DATA_POST

  const dataMap = data.map((item , index) => {
    return < CardPostContain key={index}>
        <WrapperCard>
        <h2>{item.id}</h2>
        <h2>{item.titulo}</h2>
        <img src={item.photo} alt="foto" />
        </WrapperCard>
      </ CardPostContain>
  })

  return (
    <div>
     
     <CardPost/>

    {/* {meuMap} */}
    {dataMap}


    </div>
  );
}

export default App;
