import { Email } from "../value-objects/email.value-object.js";
import { Name } from "../value-objects/name.value-object.js";

interface UserData {
	name: string;
	email: string;
}

export class User {
	private _name!: string;
	private _email!: string;

	constructor(private readonly userData: UserData) {
		const name = new Name(userData.name);
		const email = new Email(userData.email);
		this._name = name.getValue();
		this._email = email.getValue();
	}

	getUserData() {
		return {
			name: this._name,
			email: this._email,
		};
	}
}
