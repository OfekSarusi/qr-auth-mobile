// Response returned from the authentication API endpoint
export interface AuthResponse {
  authenticated: boolean;
  error?: string;
}