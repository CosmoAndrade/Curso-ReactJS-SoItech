import React, { useState } from "react";
import { ButtonContainer, ContadorWrapper } from "./style";

export function Login() {
 

  return (
    <ContadorWrapper>

      <input type="email" placeholder="E-MAIL" />
      <input type="password" placeholder="SENHA" />
      
      <ButtonContainer >
        ENVIAR
      </ButtonContainer>
      
      
     
    </ContadorWrapper>
  );
}
