'use strict';

/**
 * main-image service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::main-image.main-image');
