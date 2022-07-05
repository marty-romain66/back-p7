// middleware for admin
const Post = require('../models').Post;
const User = require('../models').User;
export const adminMiddleware = (req, res, next) => {
    const userId = req.params.id;

    User.findOne({
            where: {
                id: userId
            }
        })
        .then(user => {
            if (user.isAdmin) {
              res.status(200).json({
                message: 'Admin'
                });
                next();
            } else {
                res.status(401).json({
                    message: 'Vous n\'avez pas les droits pour effectuer cette action'
                });
            }
        })
        .catch(error => res.status(500).json({
            error
        }));
}