class ErrorResponse extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    // Ensure the name of this error is the same as the class name
    this.name = this.constructor.name;
  }
}

export default ErrorResponse;
