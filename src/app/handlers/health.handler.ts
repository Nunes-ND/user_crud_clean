import type { IHealthChecker } from "../ports/health.checker.port.js";

export interface BaseHealthInfo {
	status: string;
	source: string;
}

export class HealthHandler implements IHealthChecker<BaseHealthInfo> {
	checkHealth(): BaseHealthInfo {
		return {
			status: "ok",
			source: "Application Layer HealthService",
		};
	}
}
