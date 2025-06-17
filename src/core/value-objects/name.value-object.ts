export class Name {
	private value!: string;

	constructor(value: string) {
		if (typeof value !== "string") {
			throw new Error("Name must be a string");
		}
		if (!value.trim()) {
			throw new Error("Name cannot be empty");
		}
		if (value.trim().length < 2 || value.trim().length > 100) {
			throw new Error("Name must be between 2 and 100 characters");
		}
		this.value = value.trim().replace(/\s+/g, " ");
	}

	getValue(): string {
		return this.value;
	}
}
