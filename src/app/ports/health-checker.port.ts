export abstract class IHealthChecker<T> {
	abstract checkHealth(): T;
}
