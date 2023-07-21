let myFavorites = [];

function postFav (req,res) {
    const car = req.body;

    myFavorites.push(car);

    return res.status(200).json(myFavorites);
}

function deleteFav (req,res) {
    const { id } = req.params;

    let filterfav = myFavorites.filter((car)=>car.id!==Number(id));
    myFavorites = filterfav;

    return res.status(200).json(myFavorites);
}

module.exports = {
    postFav,
    deleteFav,
}