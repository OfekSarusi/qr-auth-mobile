import { Stack } from "expo-router";
import { SessionProvider } from "../src/context/SessionContext";

export default function RootLayout() {
  return (
    // Provide global session state to the entire application
    <SessionProvider>
      {/* Main stack navigation for authentication flow and main app */}
      <Stack>
        <Stack.Screen name="index" options={{ title: "Scan QR" }} />
        <Stack.Screen name="login" options={{ title: "Login" }} />
        <Stack.Screen name="success" options={{ title: "Success" }} />
        <Stack.Screen name="error" options={{ title: "Error" }} />

        {/* Tabs navigation for the authenticated part of the app */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </SessionProvider>
  );
}