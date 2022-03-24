import React, { useState } from 'react';
import { DivContainer } from "./style";
import './index.css'
export default function Post() {

    const [texto , seTexto] = useState('')
    const [img , setImg] = useState('')
    const [exibeImg , setExibeImg] = useState (true)


    const mudarTexto = (e) => {
      seTexto(e.target.value)
    }

    const mudarImg = (e) => {
      setImg(e.target.value)
    }

  return (
    <DivContainer>

      <div className="caixa1">

        
      <input type="text" placeholder="TÍTULO" onChange={mudarTexto} />
      <input type="text" placeholder="URL DA IMAGEM" onChange={mudarImg} />



      <button onClick={() =>setExibeImg(!exibeImg)}>
          {exibeImg ? "Delete" : "Enviar"}
      </button>
      

      </div>

    {
      exibeImg ? (
        <div className="caixa2">
        <div className="caixa">
             <img width="200px" src={img} alt=""  />
        </div>
          <p>{texto}</p>
      </div>
      ) : ""

    }
     


     
    </DivContainer>
  );
}
