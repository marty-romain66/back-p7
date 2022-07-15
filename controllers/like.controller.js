// créer un like
const Like = require ('../models').Like;
const User = require('../models').User;
const Post = require('../models').Post;


// Ajouter un nouveau like
exports.createLike = (req, res) => {
    const likes = {
        postId: req.params.postId,
        userId: req.body.userId,
        userName : req.body.userName,
    like: req.body.like
    };

    Like.findOne({
        where: {
            postId: req.body.postId,
            userId: req.body.userId,
        }
    }).then(like => {
        if (like) {
            res.status(401).send({
                message: "Ce like existe déjà"
            });
        } else {
            Like.create(likes).then(like => {
                res.status(201).send(like);
            }).catch(error => {
                res.status(401).send(error);
            });
        }
    }
    ).catch(error => {
        res.status(401).send(error);
    }
    );
}
exports.deleteLike = (req, res) => {
    const postId = req.params.postId;
    const userId = req.body.userId;

    Like.destroy({
        where: {
            postId: postId,
            userId: userId,
        }
    }).then(like => {
        if (like) {
            res.status(200).send({
                message: "Like supprimé"
            });
        } else {
            res.status(400).send({
                message: "Impossible de supprimer ce like"
            });
        }
    }
    ).catch(error => {
        res.status(400).send(error);
    }
    );
}
   