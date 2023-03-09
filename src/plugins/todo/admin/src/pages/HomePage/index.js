/*
 *
 * HomePage
 *
 */

import React, { useEffect, useState } from "react";
// import PropTypes from 'prop-types';
import pluginId from "../../pluginId";

import {
  BaseHeaderLayout,
  Box,
  Button,
  ContentLayout,
  EmptyStateLayout,
  HeaderLayout,
  Layout,
  Link,
  Loader,
  SubNav,
  SubNavHeader,
  SubNavLink,
  SubNavLinkSection,
  SubNavSection,
  SubNavSections,
  Typography,
} from "@strapi/design-system";
import { ArrowLeft, Cross, Pencil, Plus } from "@strapi/icons";
import { Illo } from "../../components/Illo";
import TodeModal from "../../components/TodoModal";
import TodoTable from "../../components/TodoTable";
import todoRequest from "../../api/todo";
// import { Link } from 'react-router-dom';

const HomePage = () => {
  const [todoData, setTodoData] = useState([]);
  const [showModle, setShowModle] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handelShowModle = (value) => {
    setShowModle(!value);
  };
  const fetchData = async () => {
    if (isLoading === false) setIsLoading(true);
    const data = await todoRequest.getAllTodos();
    setTodoData(data.todos);
    setIsLoading(false);
  };

  useEffect(async () => {
    await fetchData();
  }, []);
  if (isLoading) return <Loader>Loading content...</Loader>;

  console.log(todoData, "home");

  return (
    <Layout>
      <BaseHeaderLayout
        navigationAction={
          <Link startIcon={<ArrowLeft />} to="/">
            Go back
          </Link>
        }
        primaryAction={
          <Button
            onClick={() => handelShowModle(showModle)}
            startIcon={<Plus />}
          >
            Add New Todo
          </Button>
        }
        secondaryAction={
          <Button variant="tertiary" startIcon={<Pencil />}>
            Edit
          </Button>
        }
        title="Todo Plugin"
        subtitle={`All Your todos in one place.  ${
          todoData.length < 1
            ? "Not fund"
            : todoData.length === 1
            ? +todoData.length + " todo found"
            : todoData.length + " todos found"
        }.`}
        as="h2"
      />

      <ContentLayout>
        {todoData.length === 0 ? (
          <Box padding={8} background="neutral100">
            <EmptyStateLayout
              icon={<Illo />}
              content="You don't have any content yet..."
              action={
                <Button
                  onClick={() => handelShowModle(showModle)}
                  variant="secondary"
                  startIcon={<Plus />}
                >
                  Create your first Todo
                </Button>
              }
            />
          </Box>
        ) : (
          <TodoTable todoData={todoData} setTodoData={setTodoData} />
        )}
        {showModle && (
          <TodeModal
            handelShowModle={handelShowModle}
            showModle={showModle}
            setTodoData={setTodoData}
            todoData={todoData}
          />
        )}
      </ContentLayout>
    </Layout>
  );
};

export default HomePage;
