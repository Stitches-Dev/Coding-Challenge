const { Op } = require("sequelize");
const { MajorDegree } = require('../models');

module.exports = {
    async getMajorDegreeByIds(major_id, degree_id) {
        return await MajorDegree.findOne({
            where: {
                [Op.and]: [
                    { major_id},
                    { degree_id }
                ]
            },
            attributes: {
                exclude: ['major_id', 'degree_id']
            }
        });
    }
}