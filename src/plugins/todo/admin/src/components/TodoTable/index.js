import { Avatar, BaseCheckbox, Box, Flex, IconButton, Table, Tbody, Td, Th, Thead, Tr, Typography, VisuallyHidden } from "@strapi/design-system";
import { Pencil, Trash } from "@strapi/icons";
import React from "react";

const TodoTable = () => {
  const ROW_COUNT = 6;
  const COL_COUNT = 10;
  const entry = {
    cover: "https://avatars.githubusercontent.com/u/3874873?v=4",
    description: "Chez Léon is a human sized Parisian",
    category: "French cuisine",
    contact: "Leon Lafrite",
  };
  const entries = [];
  for (let i = 0; i < 5; i++) {
    entries.push({
      ...entry,
      id: i,
    });
  }
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
          {entries.map((entry) => (
            <Tr key={entry.id}>
              <Td>
                <BaseCheckbox aria-label={`Select ${entry.contact}`} />
              </Td>
              <Td>
                <Typography textColor="neutral800">{entry.id}</Typography>
              </Td>
            
              <Td>
                <Typography textColor="neutral800">
                  {entry.description}
                </Typography>
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
                      onClick={() => console.log("delete")}
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
