
const { MajorDegree } = require('../models');

module.exports = {
  async getAvailableDegreesForMajor(major_id) {
    // TODO get available degree for majorId
    return await MajorDegree.findAll({
      where: {
        major_id: major_id,
      },
      attributes:
         ["degree_id"]
      ,
    });
  },
};
