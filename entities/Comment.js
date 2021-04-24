import { v4 as uuid } from 'uuid';

class Comment {
	constructor(postId, name, email, body) {
		this.id = uuid();
		this.postId = postId;
		this.name = name;
		this.email = email;
		this.body = body;
	}
}

export default Comment;
