import React, { useState } from "react";
import {
  Button,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalLayout,
  TextInput,
  Typography,
} from "@strapi/design-system";
import todoRequest from "../../api/todo";

const TodeModal = ({ handelShowModle, showModle, setTodoData, todoData }) => {
  const [content, setContent] = useState("");

  const handleUpdateTodo = async (todo) => {
    console.log(todo);
    // const t = await todoRequest.update({ name: todo });
    // setTodoData([...todoData, t.todo]);
    setContent("");
    handelShowModle(showModle);
  };

  return (
    <ModalLayout onClose={() => handelShowModle(showModle)} labelledBy="title">
      <ModalHeader></ModalHeader>
      <ModalBody>
        <TextInput
          placeholder="Enter new todo"
          label="Todo"
          name="todo"
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
      </ModalBody>
      <ModalFooter
        startActions={
          <Button onClick={() => handelShowModle(showModle)} variant="tertiary">
            Cancel
          </Button>
        }
        endActions={
          <>
            <Button onClick={() => handleUpdateTodo(content)}>Update</Button>
          </>
        }
      />
    </ModalLayout>
  );
};

export default TodeModal;
