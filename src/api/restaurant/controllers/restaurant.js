'use strict';

/**
 * restaurant controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::restaurant.restaurant', ({ strapi }) => ({
    async exampleAction(ctx) {
        try {
            console.log(strapi.requestContext.get().state,"custom controlar.................")
            ctx.body = 'ok, this is custom action';
        } catch (error) {
            ctx.body = error;
        }
    }
}));
