const { getMajorsByFacultyId } = require("../services/majorService");

module.exports = {
    async getMajorsByFaculty(req, res) {
        try {
            
            const { faculty_id } = req.params;
            if (!faculty_id) {
                res.status(400).json({
                    error: "No faculty_id was provided"
                })
            }
            const result =  await getMajorsByFacultyId(faculty_id);
            res.status(200).json(result);
        } catch (err) {
            console.log(err)
            res.status(500).send({
                // error: `An error has occured trying to fetch faculties of major with id ${faculty_id}`
            })
        }
    }
}