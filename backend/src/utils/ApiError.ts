export class ApiError extends Error {
  public statusCode: number;
  public code: string;
  public field?: string;

  constructor(statusCode: number, message: string, code: string, field?: string) {
    super(message);
    this.statusCode = statusCode;
    this.code = code;
    this.field = field;
    Object.setPrototypeOf(this, ApiError.prototype);
  }

  static badRequest(message: string, field?: string) {
    return new ApiError(400, message, 'BAD_REQUEST', field);
  }

  static unauthorized(message = 'Unauthorized') {
    return new ApiError(401, message, 'UNAUTHORIZED');
  }

  static forbidden(message = 'Forbidden') {
    return new ApiError(403, message, 'FORBIDDEN');
  }

  static notFound(message = 'Resource not found') {
    return new ApiError(404, message, 'NOT_FOUND');
  }

  static conflict(message: string, field?: string) {
    return new ApiError(409, message, 'CONFLICT', field);
  }

  static validation(message: string, field?: string) {
    return new ApiError(422, message, 'VALIDATION_ERROR', field);
  }

  static internal(message = 'Internal server error') {
    return new ApiError(500, message, 'INTERNAL_SERVER_ERROR');
  }
}
