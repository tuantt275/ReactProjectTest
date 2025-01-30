import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Todo from "./component/Todo";
import TodoList from "./component/TodoList";

const App = () => {
  const [userInput, setUserInput] = useState("");
  const [list, setList] = useState([]);

  const updateInput = (value) => {
    setUserInput(value);
  };

  const addItem = () => {
    const isDupicate = list.some((item) => item.value === userInput.trim());
    if (!userInput.trim()) {
      alert("Trường nhập không được để trống!");
      return;
    }
    if (isDupicate) {
      alert(userInput + " đã tồn tại trong danh sách!");
      return;
    }
    const newTodo = {
      id: Math.random(),
      value: userInput,
      checked: false,
    };
    setList((prevList) => [...prevList, newTodo]);
    setUserInput("");
  };

  const deleteItem = (key) => {
    setList((prevList) => prevList.filter((item) => item.id !== key));
  };

  const editItem = (index) => {
    const editedTodo = prompt("Sửa:", list[index].value);
    const isDupicate = list.some((item) => item.value === editedTodo);
    if (editedTodo !== null) {
      if (isDupicate) {
        alert(editedTodo + " đã tồn tại trong danh sách!");
        return;
      }
      setList((prevList) => {
        const updatedTodos = [...prevList];
        updatedTodos[index].value = editedTodo;
        return updatedTodos;
      });
    } else {
      alert("Hủy thay đổi?");
    }
  };

  const checked = (id) => {
    setList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const deleteCheckedItems = () => {
    setList((prevList) => prevList.filter((item) => !item.checked));
  };

  return (
    <Container>
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "3rem",
          fontWeight: "border",
        }}
      >
        TODO LIST
      </Row>
      <hr />
      <Todo
        userInput={userInput}
        updateInput={updateInput}
        addItem={addItem}
        deleteCheckedItems={deleteCheckedItems}
      />
      <TodoList
        list={list}
        deleteItem={deleteItem}
        editItem={editItem}
        checked={checked}
      />
    </Container>
  );
};

export default App;
