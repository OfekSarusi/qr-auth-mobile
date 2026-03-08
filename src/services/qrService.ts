import { User } from "../models/User";
import { api } from "./api";

export async function resolveQrToken(qrToken: string): Promise<User> {
  const response = await api.post<User>("/qr/resolve", {
    qr_token: qrToken,
  });

  return response.data;
}