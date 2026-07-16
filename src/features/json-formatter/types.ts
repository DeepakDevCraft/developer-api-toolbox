export interface JsonValidationResult {
  isValid: boolean;
  error?: string;
}

export interface JsonOperationResult {
  success: boolean;
  output: string;
  error?: string;
}