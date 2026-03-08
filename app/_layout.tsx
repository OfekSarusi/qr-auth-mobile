import { Stack } from "expo-router";
import { SessionProvider } from "../src/context/SessionContext";

export default function RootLayout() {
  return (
    <SessionProvider>
      <Stack>
        <Stack.Screen name="index" options={{ title: "Scan QR" }} />
        <Stack.Screen name="login" options={{ title: "Login" }} />
        <Stack.Screen name="success" options={{ title: "Success" }} />
        <Stack.Screen name="error" options={{ title: "Error" }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </SessionProvider>
  );
}