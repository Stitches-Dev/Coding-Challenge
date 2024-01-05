const { getAllUniversities } = require("../services/universityService");

module.exports = {
    async getAllUniversities(req, res) {
        try {
            const { limit, offset } = req.query;
            const result =  await getAllUniversities({ limit, offset });
            res.status(200).json(result);
        } catch (err) {
            console.log(err)
            res.status(500).send({
                error: `An error has occured trying to fetch the universities with limit ${limit} and offset ${offset}`
            })
        }
    }
}