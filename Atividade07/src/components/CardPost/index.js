import React, { useState } from "react";
import { DATA_POST } from "./DATA_POST";
import { CardPostContain, WrapperCard } from "./style";

export default function CardPost() {
  const [post, setPost] = useState(DATA_POST);

  //use o console para ver a estrutura do array post
  console.log(post);

  const handleSetPost = (busca) => {
    //crie abaico o filter
    const filtered = [];
    setPost(filtered);
  };

  // //crie abaico o map
  // const lePosts = DATA_POST;

  // const dataMap = lePosts.map((item) =>{
  //   return <div>
  //     <WrapperCard>
  //       <h2>{item.id}</h2>
  //       <h2>{item.titulo}</h2>
  //       <img src={item.photo} alt="Foto" />
  //     </WrapperCard>
  //   </div>
  // })


  return (
    <CardPostContain>
      <input />
{/* 
    <WrapperCard>
    {dataMap}
    </WrapperCard> */}

     
    </CardPostContain>
  );
}
