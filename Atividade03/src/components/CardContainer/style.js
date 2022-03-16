import styled from "styled-components";


export const StyleCardContainer = styled.div`

   
   display: grid;
   grid-template-columns: auto auto auto auto ;
    justify-content: space-evenly;
    align-items: center;
    
   




`;

export const Card = styled.div`
        width:200px;
        height: 200px;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        margin-top:50px;
        margin-bottom:50px;

        p{
            align-items: center;
            text-align: center;
        }


`;

export const BtnCard = styled.button`
        padding: 7px 25px;
        border-radius:6px;
        border:none;
        background-color: ${props => props.background};
        color:white;

`;