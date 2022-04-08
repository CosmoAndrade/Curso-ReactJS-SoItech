import styled from "styled-components";

export const InputContain = styled.input`
  border: none;
  border-radius: 5px;
  height: 20px;
  width: 250px;
  padding: 7px 0;
`;

export const ButtonAdd = styled.button`
  border: none;
  border-radius: 5px;
  padding: 1%;
  margin-left: 10px;
  width: 60px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DivRiscado = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 5px;
  margin-top: 5px;
  width: 320px;
  background-color: white;
  border-radius: 6px;
  text-decoration: ${(props) => (props.riscado ? " line-through" : "none")};

  input {
    margin-bottom: 6px;
    padding: 10px 0;
  }

  button {
    margin-bottom: 5px;
  }
`;
