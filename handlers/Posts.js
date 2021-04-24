import PostInstance from '../entities/Post.js';

export const createPost = (req, res) => {
	const { userId, body, title } = req.body;

	const newPost = PostInstance.CreatePost({ userId, body, title });

	res.status(200).send({ message: 'Post creado con éxito', Post: newPost });
};
