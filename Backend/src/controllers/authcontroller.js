import { loginUser } from "../services/authservice.js";
import { generateToken } from "../utils/jwt.js";

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await loginUser(email, password);

        if (!user) {
            return res.status(401).json({
                message: "Credenciales inválidas"
            });
        }

        const token = generateToken(user);

        res.json({
            user: {
                id: user.idusuario,
                email: user.email,
                name: user.nombre
            },
            token
        });

    } catch (error) {
        res.status(500).json({ message: "Error del servidor" });
    }
};