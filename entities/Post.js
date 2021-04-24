import { v4 as uuid } from 'uuid';

class Post {
	constructor(userId, body, title) {
		this.id = uuid();
		this.userId = userId;
		this.body = body;
		this.title = title;
	}
}

export default Post;
