import { useState } from "react";
import { DATA_POST } from "./DATA_POST";
import "./styles.css";

function CardPost() {
  const [post, setPost] = useState(DATA_POST);
  const [busca, setBusca] = useState("");

  const filtrados =
    post &&
    post.filter((item) =>
      item.comentarios[0].texto.toUpperCase().includes(busca?.toUpperCase())
    );

  const lePosts = filtrados.map((item, i) => {
    return (
      <div key={item.id}>
        <p>
          Este é o post {i + 1} de {post.length - 1}
        </p>
        <div>
          <h2>{item.titulo}</h2>
          <img src={item.photo} alt="imagem-post" />
        </div>

        <div>
          <div>
            <h6>1° Nota:</h6>
            {item.comentarios[0].avaliacao}
          </div>
          <div>
            <h6>1°Comentário:</h6>
            {item.comentarios[0].texto}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <input
        onChange={(e) => setBusca(e.target.value)}
        placeholder={"Busca por palavras contidas no primeiro comentário"}
      />
      {lePosts}
    </div>
  );
}

export default CardPost;
