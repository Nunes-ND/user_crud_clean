import type { User } from "../../infra/database/entities/user.entity.js";
import type { CreateUserInputDto } from "../use-cases/user/dtos/create-user-input.dto.js";

export abstract class IUserRepository {
	abstract create(userInput: CreateUserInputDto): Promise<User>;
	abstract findByEmail(email: string): Promise<User | null>;
}
