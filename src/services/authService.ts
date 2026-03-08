import { AuthResponse } from "../models/Auth";
import { api } from "./api";

export async function validatePassword(
  userId: string,
  password: string
): Promise<AuthResponse> {
  const response = await api.post<AuthResponse>("/auth/validate", {
    user_id: userId,
    password,
  });

  return response.data;
}