'use strict';

/**
 * learner service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::learner.learner');
