const loginService = require("../service/login.service");
const jwt = require("jsonwebtoken");

const login = (req, res) => {
    const { username, password } = req.body;
    
    try {
        loginService.login(username, password, (err, data) => {
            if (err) {
                console.error(err);
                return res.sendStatus(500);
            }

            if (data.length === 0) {
                return res.status(404).json({ message: "User not found" });
            }

            const user = data[0]; 
            const token = jwt.sign({ id: user.user_id }, "secret-key", { expiresIn: "1h" });

            return res.status(200).json({
                user_id: user.user_id,
                username: user.username,
                lastname: user.lastname,
                token: token
            });
        });
    } catch (err) {
        console.error(err);
        return res.sendStatus(500);
    }
};

module.exports = {login};