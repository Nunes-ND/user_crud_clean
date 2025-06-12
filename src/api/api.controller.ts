import { Controller, Get } from "@nestjs/common";

@Controller("api")
export class ApiController {
	@Get("health")
	check() {
		return { status: "ok" };
	}
}
