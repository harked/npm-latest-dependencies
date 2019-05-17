const axios = require('axios');

const getAllDependencies = async (packageName) => {
    try {
        const allDependencies = [];

        await axios.get(`http://registry.npmjs.org/${packageName}/latest`)
          .then(function (response) {          
              let arrDependencies = Object.keys(response.data.dependencies);

              for (let x = 0; x < arrDependencies.length; x++) {
                  allDependencies.push(arrDependencies[x]);
              }
          })
          .catch(function (error) {
              throw new Error(error);
          });

        // for (let y = 0; y < allDependencies.length; y++) {
        //     const pkg = getAllDependencies(allDependencies[y]);
        // }

        return allDependencies;

    } catch (err) {
        throw new Error ("Failed to get package!");
    };
};

// Write below to get package dependencies
getAllDependencies('forever');

module.exports = getAllDependencies;