/*
 *
 * HomePage
 *
 */

import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';

import { BaseHeaderLayout, Box, Button, ContentLayout, EmptyStateLayout, HeaderLayout, Layout, Link, SubNav, SubNavHeader, SubNavLink, SubNavLinkSection, SubNavSection, SubNavSections, Typography } from '@strapi/design-system';
import { ArrowLeft, Cross, Pencil, Plus } from '@strapi/icons';
import { Illo } from '../../components/Illo';
import TodeModal from '../../components/TodoModal';
// import { Link } from 'react-router-dom';

const HomePage = () => {
  const [todoData, setTodoData] = useState([])
  const [showModle, setShowModle] = useState(false);

  const handelShowModle = (value)=>{
    setShowModle(!value)
  }
  return (

    <Layout>
      <BaseHeaderLayout
        navigationAction={<Link startIcon={<ArrowLeft />} to="/">
          Go back
        </Link>} primaryAction={<Button onClick = {() =>handelShowModle(showModle)} startIcon={<Plus />}>Add New Todo</Button>} secondaryAction={<Button variant="tertiary" startIcon={<Pencil />}>
          Edit
        </Button>} title="Todo Plugin"
        subtitle="All Your todos in one place." as="h2" />


      <ContentLayout>
        {
          todoData.length === 0 ? (
            <Box padding={8} background="neutral100">
              <EmptyStateLayout icon={<Illo />} content="You don't have any content yet..." action={<Button onClick = {() =>handelShowModle(showModle)} variant="secondary" startIcon={<Plus />}>
                Create your first Todo
              </Button>} />
            </Box>
          ) : (
            <Typography ellipsis>Count and Table</Typography>
          )
        }
        {showModle && <TodeModal handelShowModle={handelShowModle} showModle={showModle}/>}
      </ContentLayout>
    </Layout>


  );
};

export default HomePage;
