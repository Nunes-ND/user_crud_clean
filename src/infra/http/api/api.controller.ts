import { Controller, Get, Inject } from "@nestjs/common";
import type { BaseHealthInfo } from "../../../app/handlers/health.handler.js";
import { IHealthChecker } from "../../../app/ports/health-checker.port.js";

@Controller("api")
export class ApiController {
	constructor(
		@Inject(IHealthChecker)
		private readonly healthChecker: IHealthChecker<BaseHealthInfo>,
	) {}

	@Get("health")
	check() {
		return this.healthChecker.checkHealth();
	}
}
