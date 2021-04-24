import { v4 as uuid } from 'uuid';

class User {
	constructor(name, username, email) {
		this.id = uuid();
		this.name = name;
		this.username = username;
		this.email = email;
	}
}

export default User;
