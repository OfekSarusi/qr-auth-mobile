import { router } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useSession } from "../src/context/SessionContext";
import { validatePassword } from "../src/services/authService";

export default function LoginScreen() {
  // Get the resolved user from session and a function to update auth state
  const { user, setIsAuthenticated } = useSession();

  // Local state for the password input and loading indicator
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    // Prevent login attempt if no user was loaded from the QR flow
    if (!user) {
      Alert.alert("Error", "No user data found");
      return;
    }

    // check that the password field is not empty
    if (!password.trim()) {
      Alert.alert("Error", "Please enter a password");
      return;
    }

    try {
      setLoading(true);
      // Send user id and password to backend for validation
      const result = await validatePassword(user.user_id, password);

      if (result.authenticated) {
        // Mark session as authenticated and move to success screen
        setIsAuthenticated(true);
        router.replace("/success");
      } else {
        // Invalid password - navigate to error screen
        router.replace("/error");
      }
    } catch (error) {
      router.replace("/error");
    } finally {
      // Always stop loading after request completes
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>No user loaded</Text>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.card}>
        <Text style={styles.title}>Authentication</Text>
        <Text style={styles.subtitle}>
          Please enter your password to continue
        </Text>

        <Text style={styles.email}>
          <Text style={styles.label}>Email: </Text>
          {user.email}
        </Text>

        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Enter password"
          placeholderTextColor="#9ca3af"
          secureTextEntry
        />

        {loading ? (
          // Show spinner during API request
          <ActivityIndicator size="large" />
        ) : (
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        )}
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 70,
    backgroundColor: "#f6f7fb",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 22,
    padding: 24,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
    color: "#111827",
  },
  subtitle: {
    fontSize: 15,
    textAlign: "center",
    color: "#6b7280",
    marginBottom: 28,
  },
  label: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 8,
    color: "#111827",
  },
  email: {
    fontSize: 17,
    marginBottom: 22,
    color: "#374151",
  },
  input: {
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 12,
    padding: 14,
    marginBottom: 22,
    backgroundColor: "#fff",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#0d0d0e",
    paddingVertical: 12,
    borderRadius: 14,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
});