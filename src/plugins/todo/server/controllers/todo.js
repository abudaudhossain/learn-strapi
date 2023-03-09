"use strict";

module.exports = {
  async find(ctx) {
    try {
      const todos = await strapi.plugin("todo").service("todo").find(ctx.query);

      return (ctx.body = {
        type: "Success",
        messtage: "Todo Delete Successfully ",
        todos: todos,
        meta: {
          count: todos.length,
        },
      });
    } catch (error) {
      ctx.throw(500, error);
    }
  },
  async findOne(ctx) {
    try {
      const { id } = ctx.params;
      const todo = await strapi.plugin("todo").service("todo").findOne(id);
      return (ctx.body = {
        type: "Success",
        messtage: "Todo finde Successfully ",
        todo: todo,
      });
    } catch (error) {
      ctx.throw(500, error);
    }
  },
  async create(ctx) {
    try {
      const todo = await strapi
        .plugin("todo")
        .service("todo")
        .create(ctx.request.body);

      return (ctx.body = {
        type: "Success",
        messtage: "Create New todo Successfully ",
        todo,
      });
    } catch (error) {
      ctx.throw(500, error);
    }
  },
  async update(ctx) {
    try {
      const todo = await strapi
        .plugin("todo")
        .service("todo")
        .update(ctx.params.id, ctx.request.body);

      return (ctx.body = {
        type: "Success",
        messtage: "Todo Update Successfully ",
        todo: todo,
      });
    } catch (error) {
      ctx.throw(500, error);
    }
  },
  async delete(ctx) {
    try {
      const todo = await strapi
        .plugin("todo")
        .service("todo")
        .delete(ctx.params.id);

      return (ctx.body = {
        type: "Success",
        messtage: "Todo Delete Successfully ",
        todo: todo,
      });
    } catch (error) {
      ctx.throw(500, error);
    }
  },
  async toggel(ctx) {
    try {
      const todo = await strapi
        .plugin("todo")
        .service("todo")
        .toggel(ctx.params.id);

      return (ctx.body = {
        type: "Success",
        messtage: "Todo Update Successfully ",
        todo: todo,
      });
    } catch (error) {
      ctx.throw(500, error);
    }
  },
};
