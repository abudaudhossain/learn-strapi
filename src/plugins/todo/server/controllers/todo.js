"use strict";

module.exports = {
  async find(ctx) {
    try {
      return (ctx.body = await strapi.plugin("todo").service("todo").find(ctx.query));
    } catch (error) {
      ctx.throw(500, error);
    }
  },
};
