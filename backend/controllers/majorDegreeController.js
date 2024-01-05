const { getMajorDegreeByIds } = require('../services/majorDegreeService');

module.exports = {
    async getMajorDegreeByKeys(req, res) {
        try {
            const { major_id, degree_id } = req.params;

            if (!major_id || !degree_id) {
                res.status(400).json({
                    error: `No major_id or degree_id was provided`
                })
            }

            const result =  await getMajorDegreeByIds(major_id, degree_id);
            res.status(200).json(result);
        } catch (err) {
            console.log(err)
            res.status(500).send({
                error: `An error has occured trying to fetch faculties of major with id ${faculty_id}`
            })
        }
    }
}