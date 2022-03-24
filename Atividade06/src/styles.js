import styled from "styled-components";



 export const DivBtn  = styled.div`
 
    display: flex;
    justify-content: space-between;
    align-items:center;
   

 
 `;


export const Btn = styled.button`

        padding: 7px 25px ;
        margin: 15px  45px;
        background-color: ${props => props.bg ? "#D8D8FF" : "#C4C4C4"} ;
       
        color: ${props => props.color ? "white" : "black"};
        border: none;
        border-radius: 6px;
        cursor: pointer;
        


`;