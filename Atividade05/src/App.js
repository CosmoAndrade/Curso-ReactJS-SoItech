import React, { useState } from "react";
import "./App.css";
import { Login } from "./components/Login";
import Footer from "./components/Footer/Index";
import Header from "./components/Header";
import Post from "./components/Post";
import { Btn, DivBtn } from "./styles";
function App() {
  // criando o estado que vai ser testado no ternário e atualizado no onClick
  const [show, setShow] = useState(true);

  return (
    <div className="App">

      <Header
        // passando props pro componente Header
        logo={"https://i.imgur.com/hWeSc2j.png"}

      />

        <DivBtn>

          <Btn bg="#D8D8FF"  onClick={() => setShow(!show)}>
                {show ? "Login" : "Post"}
          </Btn>

        
        <Btn  bg="#C4C4C4" color="white" onClick={() => setShow(!show)}>
                {show ? "Post" : "Login"}
        </Btn>

        </DivBtn>

        {show ? <Post /> : <Login />}

      


     


      <Footer />

    </div>
  );
}

export default App;
