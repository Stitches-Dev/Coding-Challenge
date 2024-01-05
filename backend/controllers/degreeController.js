const { getAvailableDegreesForMajor } = require("../services/degreeService");
const { getMajorDegreeByIds } = require("../services/majorDegreeService");

module.exports = {
  async getAvailableDegreesForMajorById(req, res) {
    // get major degree for major by id
    try {
      const { major_id } = req.params;
      if (!major_id) {
        res.status(400).json({
          error: "No major_id was provided",
        });
      }
      const result = await getAvailableDegreesForMajor(major_id);
      res.status(200).json(result);
    } catch (err) {
      console.log(err);
      res.status(500).send({
        error: `An error has occured trying to fetch major degree by id : ${major_id}`,
      });
    }
  },
};
