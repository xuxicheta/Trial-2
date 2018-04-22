interface IApiError {
  message: string,
  code: number,
  details?: any
}

export class ApiError extends Error {
  code: number;
  details: any;
  constructor({ message, code, details } : IApiError) {
    super(message);
    if (details) this.details = details;
    this.code = code;
  }
}
