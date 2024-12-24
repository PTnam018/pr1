import express from 'express'

import {
    createPost,
    getAllPost,
    getPostByPostId,
    updatePost,
    deletePost,
} from '../controllers/postController.js'

const router = express.Router()


router.post('/createPost', createPost)
router.get('/getAllPost', getAllPost)
router.get('/getPostByPostId/:postId', getPostByPostId)
router.post('/updatePost/:title/:content/:image/:postId', updatePost)
router.post('/deletePost/:postId', deletePost)


export default router