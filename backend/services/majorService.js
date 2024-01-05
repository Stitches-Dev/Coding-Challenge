const { Major, Faculty } = require('../models');

module.exports = {
    async getMajorsByFacultyId(faculty_id) {
        return await Major.findAll({
            where: {
                faculty_id
            },
            attributes: {
                exclude: ['faculty_id']
            },
        });
    }
}