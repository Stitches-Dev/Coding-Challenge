const { University } = require("../models");

module.exports = {
  async getAllUniversities(queryParams) {
    // optimize code
        
const options = {};
    if (queryParams.limit && queryParams.offset) {
       options.limit = parseInt(queryParams.limit); 
       options.offset = parseInt(queryParams.offset);
    }
   


    //   const options = {
    //   limit: parseInt(queryParams.limit) ?? undefined,
    //   offset: parseInt(queryParams.offset) ?? undefined,
    // };

    
    // const options = {};
    // if (queryParams.limit) {
    //   options.limit = parseInt(queryParams.limit);
    // }
    // if (queryParams.offset) {
    //   options.offset = parseInt(queryParams.offset);
    // }
    return await University.findAll(options);
  },
};
