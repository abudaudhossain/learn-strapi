"use strict";

module.exports = ({ strapi }) => ({
  async find(query) {
    const todos = await strapi.entityService.findMany(
      "plugin::todo.todo",
      query
    );
    console.log(todos, 1);

    return todos;
  },
  async findOne(query) {
    const todos = await strapi.entityService.findOne(
      "plugin::todo.todo",
      query
    );
    console.log(query, todos, "find one =============");

    return todos;
  },
  async create(data) {
    console.log(data, "=============");
    const entry = await strapi.entityService.create("plugin::todo.todo", data);
    return entry;
  },
  async update(query, data) {
    const entry = await strapi.entityService.update(
      "plugin::todo.todo",
      query,
      {
        data: data,
      }
    );

    return entry;
  },
  async toggel(query) {
    const result = await strapi.entityService.findOne(
      "plugin::todo.todo",
      query
    );
    const entry = await strapi.entityService.update(
      "plugin::todo.todo",
      query,
      {
        data: { isDone: !result.isDone },
      }
    );

    return entry;
  },
  async delete(query) {
    const todo = await strapi.entityService.delete("plugin::todo.todo", query);

    return todo;
  },
});
