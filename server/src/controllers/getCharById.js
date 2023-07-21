const axios = require('axios');


function getCharById(res, id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
        let obj = {
            id: id,
            name: data.name,
            gender: data.gender,
            species: data.species,
            origin: data.origin,
            image: data.image,
            status: data.status
        };

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(obj));
    }).catch((error) => {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end(error.message);
    });
}

module.exports = {
    getCharById,
};