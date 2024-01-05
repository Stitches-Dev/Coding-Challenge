const { Faculty } = require('../models');

module.exports = {
    async getFacultiesByUniversityId(university_id) {
        return await Faculty.findAll({
            where: {
                university_id: university_id
            },
            attributes: {
                exclude: ['university_id']
            }
        });
    }
}