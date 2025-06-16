import type { User } from "../../infra/database/entities/user.entity.js";
import type { CreateUserDto } from "../use-cases/user/dtos/create-user.dto.js";

export abstract class IUserRepository {
	abstract create(userInput: CreateUserDto): Promise<User>;
	abstract findByEmail(email: string): Promise<User | null>;
}
