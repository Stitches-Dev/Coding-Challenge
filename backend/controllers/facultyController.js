const { getFacultiesByUniversityId } = require("../services/facultyService");

module.exports = {
    async getFacultiesByUniversity(req, res) {
        try {
            const { university_id } = req.params;
            if(!university_id) {
                res.status(400).json({
                    error: "No university_id was provided"
                })
            }
            const result =  await getFacultiesByUniversityId(university_id);
            res.status(200).json(result);
        } catch (err) {
            console.log(err)
            res.status(500).send({
                // error: `An error has occured trying to fetch faculties of major with id ${faculty_id}`
            })
        }
    }
}