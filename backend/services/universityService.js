const { University } = require('../models');

module.exports = {
    async getAllUniversities(queryParams) {
        const options = {}
        if (queryParams.limit) {
            options.limit = parseInt(queryParams.limit);
        }
        if (queryParams.offset) {
            options.offset = parseInt(queryParams.offset);
        }
        return await University.findAll(options);
    },
}