import styled from "styled-components";


export const StyledHeader = styled.div`

    height: 77px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    background-color: #D8D8FF ;
    color: dodgerblue;

   ul {
	display: flex;
	list-style: none;
	padding-right: 15px;
  
   }
   
   li {
	padding: 15px;
   
	
   }
  
   a{
	 color: black;
	 text-decoration:underline;
	 text-transform: uppercase;

   }

   a:hover{
      color: blue;
   }

   h2{
	   margin-left:25px;
   }



`;