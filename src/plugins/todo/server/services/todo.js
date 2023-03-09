"use strict";

module.exports = ({ strapi }) => ({
  async find(query) {
    const todos = await strapi.entityService.findMany("plugin::todo.todo", query)
    console.log(todos, 1)

    return todos;
  },
});
