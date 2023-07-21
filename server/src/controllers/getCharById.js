const axios = require('axios');
const URL = 'https://rickandmortyapi.com/api/character/';

// function getCharById(res, id) {
//     axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
//         let obj = {
//             id: id,
//             name: data.name,
//             gender: data.gender,
//             species: data.species,
//             origin: data.origin,
//             image: data.image,
//             status: data.status
//         };

//         res.writeHead(200, { "Content-Type": "application/json" });
//         res.end(JSON.stringify(obj));
//     }).catch((error) => {
//         res.writeHead(500, { "Content-Type": "text/plain" });
//         res.end(error.message);
//     });
// }

function getCharById(req,res) {
    const { id } = req.params;

    axios(`${URL}${id}`).then(({ data }) => {

        if (data.error) {
            return res.status(404).send('Not found');
        }

        let obj = {
            id: Number(id),
            name: data.name,
            gender: data.gender,
            species: data.species,
            origin: data.origin,
            image: data.image,
            status: data.status
        };

        res.status(200).json(obj);
    }).catch((error) => {
        res.status(500).send(error.message);
    });
}

module.exports = {
    getCharById,
};