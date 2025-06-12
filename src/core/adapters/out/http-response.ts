export class HTTPResponse<T = never> {
  public code: string;
  public message: string;
  public data?: T;

  constructor(
    public status: number,
    code: string,
    message: string,
    data?: T,
  ) {
    this.code = code;
    this.message = message;
    this.data = data;
  }
}

export enum HTTPMessages {
  SUCCESS = "Success",
  ERROR = "Error",
  NOT_FOUND = "Not Found",
  UNAUTHORIZED = "Unauthorized",
  FORBIDDEN = "Forbidden",
  BAD_REQUEST = "Bad Request",
  INTERNAL_SERVER_ERROR = "Internal Server Error",
}
