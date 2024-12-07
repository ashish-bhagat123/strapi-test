'use strict';

/**
 * podcast controller
 */

const {createCoreController} = require('@strapi/strapi').factories;


module.exports = createCoreController('api::podcast.podcast', ({strapi}) => ({
  async find(ctx) {
    // Call the default core controller's find method to get the result
    const {data, meta} = await super.find(ctx);

    // Map over the data array to spread the attributes key
    const modifiedData = data.map(item => ({
      id: item.id,
      ...item.attributes,  // Spreading the attributes key
    }));

    // Return the modified data with meta
    return {data: modifiedData, meta};
  },
  async findOne(ctx) {
    const {id} = ctx.params;
    // Modify query to find by slug
    const entity = await strapi.db.query('api::podcast.podcast').findOne({
      where: {slug: id},
    });

    if (!entity) {
      return ctx.notFound('Content not found');
    }

    // Sanitize the entity data
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return {data: sanitizedEntity, meta: {}};
  }
}));
