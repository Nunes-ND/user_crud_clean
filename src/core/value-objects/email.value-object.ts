export class Email {
	private value!: string;

	constructor(value: string) {
		const emailValidatorRegex =
			/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
		if (value.length > 254) {
			throw new Error("Email too long");
		}
		if (!emailValidatorRegex.test(value)) {
			throw new Error("Invalid email");
		}
		this.value = value;
	}

	getValue() {
		return this.value;
	}
}
