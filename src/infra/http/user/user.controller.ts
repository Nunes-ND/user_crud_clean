import {
	Body,
	ConflictException,
	Controller,
	HttpCode,
	HttpStatus,
	Inject,
	Post,
} from "@nestjs/common";
import { UserAlreadyExistsError } from "../../../app/errors/user-already-exists.error.js";
import { ICreateUserUseCase } from "../../../app/ports/create-user.port.js";
import type { CreateUserOutputDto } from "../../../app/use-cases/user/dtos/create-user-output.dto.js";
import type { CreateUserRequestDto } from "../../../presentation/dtos/create-user-request.dto.js";
import type { CreateUserResponseDto } from "../../../presentation/dtos/create-user.response.dto.js";

@Controller("users")
export class UsersController {
	constructor(
		@Inject(ICreateUserUseCase)
		private readonly createUserUseCase: ICreateUserUseCase<CreateUserOutputDto>,
	) {}

	@Post()
	@HttpCode(HttpStatus.CREATED)
	async createUser(
		@Body() createUserDto: CreateUserRequestDto,
	): Promise<CreateUserResponseDto> {
		try {
			const user: CreateUserOutputDto =
				await this.createUserUseCase.execute(createUserDto);
			const response: CreateUserResponseDto = {
				name: user.name,
				email: user.email,
			};
			return response;
		} catch (error) {
			if (error instanceof UserAlreadyExistsError) {
				throw new ConflictException(error.message);
			}
			throw error;
		}
	}
}
