import React, { useState } from "react";
import "./App.css";

import { Login } from "./components/Login";
import Footer from "./components/Footer/Index";
import Header from "./components/Header";
import Post from "./components/Post";
import { Btn, DivBtn } from "./styles";
import Mensagem from './components/Mensagem';

import seta  from './assets/Vector.png';



function App() {

  const [show, setShow] = useState(0);   // se verdadeiro = Login

  function menuProximo(){

    setShow(show+1)
    
   
  }

  function menu(){

    if(show === [0]){
      return <Login/>
    }else if(show === [1]){
      return <Post/>
    }else if(show ===[2]){
      return <Mensagem/>
    }else if(show > [2]){
      return setShow(show === [0])
    }
  }
    






  return (
    <div className="App">

      <Header
        // passando props pro componente Header
        logo={"https://i.imgur.com/hWeSc2j.png"}

      />


      <div>
        {
          show && (
            <img width="50px" src={seta} alt="" style={{ float: "left" }} />
          )
        }


      </div>


      
      <DivBtn>

    

        <Btn  bg={true} color={true} onClick={() => setShow(menuProximo)}>
            Login
        </Btn>

        
        <Btn  bg={false} color={false} onClick={() => setShow(menuProximo)}>
            Post
        </Btn>

        
        <Btn  bg={true} color={true} onClick={() => setShow(menuProximo)}>
            Mensagem
        </Btn>

      
    

      
      </DivBtn>

      {menu(show)}

    


  


<Footer />





    </div>
  )
}


export default App;