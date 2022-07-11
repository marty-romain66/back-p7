// jwt
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();


module.exports = (req, res, next) => {
    try {
        /*** récupération du token dans le header de la requête d'autorisation et la récupération aprés l'espace du deuxieme élément du tableau qui est le token ***/
        const token = req.headers.authorization.split(' ')[1];
        /*** vérification et décodage du token avec la clé de sécurité ***/
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
        /*** décodage du isAdmin ***/
        const isAdmin = decodedToken.isAdmin;
        if (isAdmin !== true) {
            throw 'interdit aux non admins';

        } else {
            next();
        }
    } catch {
        res.status(401).json({
            error
        });
    }
};