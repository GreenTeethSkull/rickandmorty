//const users = require('./../utils/users');

//function login (req,res) {
//    const { email, password } = req.query;
//    let access = false;

//    users.forEach((user)=>{
//        if((user.email === email) && (user.password === password)){
//            access = true;
//        }
//    });

//    // res.status(200).json({'access':access});
//    return res.status(200).json({access});
//}

//module.exports = {
//    login,
//};

const { User } = require('../DB_connection');

const login = async (req,res) => {
    try {
        const { email, password } = req.query;

        if (!email || !password) {
            return res.status(400).send('Faltan Datos');
        }

        const user = await User.findOne({
            where : {
                email
            }
        });

        if (!user) {
            return res.status(404).send('Usuario no encontrado');
        }

        return user.password === password ? res.status(200).json({access:true}) : res.status(403).send('Contraseña Incorrecta');
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
}


module.exports = login;