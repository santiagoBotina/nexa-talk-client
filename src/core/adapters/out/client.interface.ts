export interface IHTTPClient {
  get<T>(endpoint: string): Promise<T | null>;

  post<T, D>(endpoint: string, data: D): Promise<T>;
}
