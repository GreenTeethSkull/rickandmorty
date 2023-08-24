const { User } = require('../DB_connection');

const postUser = async (req, res) => {
    const { email, password } = req.body;

    // Validar que se recibieron email y password
    if (!email || !password) {
        return res.status(400).send("Faltan datos");
    }

    try {
        // Crear y guardar el nuevo usuario
        const user = await User.findOrCreate({
            where : {
                email,
                password
            }
        });

        // Responder con el usuario guardado
        res.status(200).json(user);
    } catch (error) {
        // En caso de error, responder con status 500 y el mensaje de error
        res.status(500).json({ message: error.message });
    }
};

module.exports = postUser;