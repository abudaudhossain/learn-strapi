import {
  Avatar,
  BaseCheckbox,
  Box,
  Flex,
  IconButton,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Typography,
  VisuallyHidden,
} from "@strapi/design-system";
import { Pencil, Trash } from "@strapi/icons";
import React from "react";
import todoRequest from "../../api/todo";

const TodoTable = ({ todoData, setTodoData }) => {
  const ROW_COUNT = 6;
  const COL_COUNT = 10;
  console.log(todoData, "table");

  const handleToggle = (id, index) => {
    todoRequest.toggele(id);
    const newTodoList = [...todoData];
    console.log(id, index);
    newTodoList[index] = {
      ...newTodoList[index],
      isDone: !todoData[index].isDone,
    };

    setTodoData(newTodoList);

    console.log(newTodoList, todoData);
  };

  const handleDelete = async (id, index) => {
    const result = await todoRequest.delete(id);
    if (result.type) {
      const newTodoList = [...todoData];
      setTodoData([
        ...newTodoList.slice(0, index),
        ...newTodoList.slice(index + 1),
      ]);
    }
  };

  return (
    <Box padding={8} background="neutral100">
      <Table colCount={COL_COUNT} rowCount={ROW_COUNT}>
        <Thead>
          <Tr>
            <Th>
              <BaseCheckbox aria-label="Select all entries" />
            </Th>
            <Th>
              <Typography variant="sigma">ID</Typography>
            </Th>
            <Th>
              <Typography variant="sigma">Description</Typography>
            </Th>
            <Th>
              <VisuallyHidden>Actions</VisuallyHidden>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {todoData.map((entry, index) => (
            <Tr key={entry.id}>
              <Td>
                <BaseCheckbox
                  aria-label={`Select ${entry.contact}`}
                  value={entry.isDone}
                  onClick={() => handleToggle(entry.id, index)}
                />
              </Td>
              <Td>
                <Typography textColor="neutral800">{entry.id}</Typography>
              </Td>

              <Td>
                <Typography textColor="neutral800">{entry.name}</Typography>
              </Td>
              <Td>
                <Flex>
                  <IconButton
                    onClick={() => console.log("edit")}
                    label="Edit"
                    noBorder
                    icon={<Pencil />}
                  />
                  <Box paddingLeft={1}>
                    <IconButton
                      onClick={async () => await handleDelete(entry.id, index)}
                      label="Delete"
                      noBorder
                      icon={<Trash />}
                    />
                  </Box>
                </Flex>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default TodoTable;
