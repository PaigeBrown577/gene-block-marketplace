const express = require('express')

const PostCtrl = require('../controllers/post-ctrl')

const router = express.Router()

router.post('/post', PostCtrl.createPost)
router.put('/movie/:id', PostCtrl.updatePost)
router.delete('/movie/:id', PostCtrl.deletePost)
router.get('/movie/:id', PostCtrl.getPostById)
router.get('/movies', PostCtrl.getPosts)

module.exports = router
