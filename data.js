import { User, Post, Comment } from './entities/index';

export const PostsDB = [];
export const CommentDB = [];
export const UserDB = [];

export const CreatePost = ({ userId, title, body }) => {
	const newPost = new Post(userId, body, title);

	PostsDB.push(newPost);

	return newPost;
};
