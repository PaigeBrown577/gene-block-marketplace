const Post = require('../models/post-model')

createPost = (req, res) => {
    const body = req.body;
    body.displayName = body.name;
    body.meeting_location = body.finalMeetingLocation;
    body.image = body.imageArray;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a post',
        })``
    }

    const post = new Post(body)

    if (!post) {
        return res.status(400).json({ success: false, error: err })
    }

    post
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: post._id,
                message: 'Post created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Post not created!',
            })
        })
}

updatePost = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Post.findOne({ _id: req.params.id }, (err, post) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Post not found!',
            })
        }
        post.displayName = body.displayName;
        post.userID = body.userID;
        post.tag = body.tag;
        post.date = body.date;
        post.title = body.title;
        post.price = body.price;
        post.text = body.text;
        post.meeting_location = body.meeting_location;
        post.image = body.image;
        post.email = body.email;
        post
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: post._id,
                    message: 'Post updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Post not updated!',
                })
            })
    })
}

deletePost = async (req, res) => {
    await Post.findOneAndDelete({ _id: req.params.id }, (err, post) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!post) {
            return res
                .status(404)
                .json({ success: false, error: `Post not found` })
        }

        return res.status(200).json({ success: true, data: post })
    }).catch(err => console.log(err))
}

getPostById = async (req, res) => {
    await Post.findOne({ _id: req.params.id }, (err, post) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        return res.status(200).json({ success: true, data: post })
    }).catch(err => console.log(err))
}

getPosts = async (req, res) => {
    // console.log('here');
    await Post.find({}, (err, posts) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!posts.length) {
            return res
                .status(404)
                .json({ success: false, error: `Post not found` })
        }

        posts.sort((a, b) => (a.updatedAt < b.updatedAt) ? 1 : -1)

        return res.status(200).json({ success: true, data: posts })
    }).catch(err => console.log(err))
}

module.exports = {
    createPost,
    updatePost,
    deletePost,
    getPosts,
    getPostById,
}
