import { useState } from "react";
import { ButtonAdd, Container, DivRiscado, InputContain } from "./style";
import "./styles.css";

export default function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [riscado, setRiscado] = useState(false);

  const addItem = (item) => {
    setTaskList((value) => [...value, item]);
  };

  const deleteItem = (elemento) => {
    const filteredList = taskList.filter((items) => items !== elemento);

    setTaskList(filteredList);
  };

  return (
    <div className="App">
      <h1>TO-DO-LIST</h1>
      <hr />

      <InputContain type="text" onChange={(e) => setTask(e.target.value)} />
      <ButtonAdd onClick={() => addItem(task)}>ADD</ButtonAdd>

      {taskList?.map((elemento) => {
        return (
          <Container>
            <DivRiscado riscado={riscado}>
              <input type="checkbox" onChange={() => setRiscado(!riscado)} />
              {elemento}
              <button onClick={() => deleteItem(elemento)}>X</button>
            </DivRiscado>
          </Container>
        );
      })}
    </div>
  );
}
