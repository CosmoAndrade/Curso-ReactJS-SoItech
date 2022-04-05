
import styled from "styled-components";



export const WrapperLista = styled.div`
  display: flex;
  width: 300px ;
  justify-content:space-between ;
  margin-top:5vh ;
  align-items: center;
  padding: 10px 15px;
  background-color: white;
  border-radius: 6px;



  li{
    list-style: none;
    
  }

  i{
    margin-left: 125px;
    margin-right: 15px;
  }


`;


export const DivRiscado = styled.li`

  text-decoration:${props => props.ativo ? 'line-through' : 'none'};
 
 

`;

export const DivContainer = styled.div`

h1{
  text-align: center;
  font-weight:bold;
  border-bottom: 2px solid white;
  margin-bottom: 15px;
}

input {
  width: 250px;
  padding: 4px 5px;
  margin-right: 5px;
  border-radius: 6px;
  border: none;
}

button{
  padding: 2px 5px;
  background-color: white;
  border:none;
  border-radius: 6px;
}


`;