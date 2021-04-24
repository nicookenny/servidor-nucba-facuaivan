import CommentInstance from '../entities/Comment.js';

export const createComment = (req, res) => {
	const { postId, name, email, body } = req.body;

	const newComment = CommentInstance.CreateComment({ postId, name, email, body });

	res.status(200).send({ message: 'Comentario creao con exito', Comment: newComment });
};