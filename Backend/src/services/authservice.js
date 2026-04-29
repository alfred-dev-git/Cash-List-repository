import { pool } from "../config/db.js";

export const loginUser = async (email, password) => {
    const [rows] = await pool.query(
        "SELECT * FROM usuario WHERE email = ?",
        [email]
    );

    const user = rows[0];

    if (!user) return null;

    if (user.password !== password) return null;

    return user;
};