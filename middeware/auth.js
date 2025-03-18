const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if(!token){
        return res.status(401).json({message: "haven't token"});
    };

    try{
        const decoded = jwt.verify(token, "secret-key");

        req.user = decoded;
        req.token = token;
        req.userId = decoded.id;

        next();
    }catch(err){
        return err;
    };
};

module.exports = verifyToken;