import './index.css'
import { DivCaixa } from './style';

import Card from '../../assets/card.png';
import { useState } from 'react';




const Caixa = () => {

  const  [valor , setValor] = useState(0)
  const  [nome , setNome] = useState('')
  const  [data , setData] = useState('')

  const  HandleInputNumero = (e) => {
    setValor(e.target.value)
  }

  
  const  HandleInputNome = (e) => {
    setNome(e.target.value)
  }

  
  const  HandleInputData = (e) => {
    setData(e.target.value)
  }

    return (
        <DivCaixa>

         <aside className="caixa-esquerda">

            <h1>Coloque os dados do seu  <br/> cartão aqui</h1>

            <form action="">
            <label for="numero" id="numero"> Número</label>
                <input type="number" name="" id="numero"  onChange={HandleInputNumero}/> 

                <label for="nome" id="nome">  Nome</label>  
               <input type="text" name="" id="nome"  onChange={HandleInputNome} />  

                <label for="data" id="data"> Data de Validade</label>
                <input type="date" name="" id="data" onChange={HandleInputData} />
             </form>

               

         </aside>

         <aside className="caixa-direita">

          <div className="caixa"> 

          <div className='caixa-conteudo'>

              <p> 
                Nome: {valor} <br/>
                Número: {nome}
                
              </p>
            

              <div className="caixa-img">
               {data}
              <img src={Card} alt="card"/>
              </div>

          </div>
              
               
              
                  
              


              
          </div>

        </aside>

        </DivCaixa>
    )
}

export default Caixa;