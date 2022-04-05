import React, { useState } from "react";
import { DivContainer, DivRiscado, WrapperLista } from "./style";

export default function Post() {
  const [postagem, setpostagem] = useState("");
  const [listaDePostagem, setListaDePostagem] = useState([]);
  const [done, setDone] = useState(false)

//const verdade = true;
//const riscado = { textDecoration: "line-through" };

  const handleInput = (e) => {

    setpostagem(e.target.value)
   
  }


  const clear = (item) => {
    const itemFiltered = listaDePostagem.filter(
      (elemento) => elemento !== item
    );

    setListaDePostagem(itemFiltered)
   
  };


  const addItem = (item) => {


    if (item) {
      setListaDePostagem((valor) => [...valor, item])
    } else {
      alert('Campo Vazio')
    }

  }

const handleChecked = () => {
  setDone(!done)
  

  console.log(done)
}



  const postagens =
    listaDePostagem.map((item) => {
      return (
        <WrapperLista>
          

          <input type={"checkbox"}
           onChange={handleChecked} 
         
           />

         <DivRiscado 
         
           ativo={done}
          >
            {item}
          </DivRiscado> 

          {/* <li style={verdade ? riscado : null}>{item}</li> */}

          
          <button onClick={() => clear(item)}>
            <i class="fa-solid fa-trash-can"></i>
          </button>

        </WrapperLista>
      );
    });

  return (

    <DivContainer>

      <h1>TODO LIST</h1>


      <input
        onChange={handleInput}
        placeholder="postagem"
      />

      <button
        onClick={() => addItem(postagem)}>
        ADD
      </button>



      {postagens}


    </DivContainer>
  );
}
