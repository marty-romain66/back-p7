const express = require('express');
const router = express.Router();

const postController = require('../controllers/post.controller');
const commentController = require('../controllers/comment.controller');

const auth = require('../middlewares/auth.middleware');
const multer = require('../middlewares/multer-config');
const admin = require('../middlewares/admin.middleware');

// Routes pour les posts
router.post('/',  multer, postController.createPost);
router.get('/'  ,postController.getAllPosts);
router.get('/:id',  postController.getOnePost);
router.put('/:id', auth, multer, postController.modifyPost);
router.delete('/:id',  postController.deletePost);
router.delete('/admin/:id', postController.deletePostByAdmin);
router.get("/afterpost/:id" , postController.getPostsAfterPost);

// Routes pour les commentaires
router.post('/:postId/comments',  commentController.createComment);
router.get('/:postId/comments',  commentController.getAllComments);
router.get('/:postId/comments/:id', auth, commentController.getOneComment);
router.put('/:postId/comments/:id', auth, admin, commentController.modifyComment);
router.delete('/:postId/comments/:id',  commentController.deleteComment);
router.delete('/admin/:postId/comments/:id',  commentController.deleteCommentByAdmin);

module.exports = router;
