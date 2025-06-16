import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateUserRequestDto {
	@IsString()
	@IsNotEmpty()
	@MinLength(2)
	name!: string;

	@IsEmail()
	@IsNotEmpty()
	email!: string;
}
