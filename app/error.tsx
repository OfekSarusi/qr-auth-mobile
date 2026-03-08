import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ErrorScreen() {
  // Display authentication failure message and allow user to retry login
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Authentication Failed</Text>
        <Text style={styles.subtitle}>
          The password you entered is incorrect.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.replace("/login")} // navigate back to login screen
        >
          <Text style={styles.buttonText}>Try Again</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 90,
    backgroundColor: "#f6f7fb",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 24,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#111827",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 22,
    color: "#4b5563",
    lineHeight: 22,
  },
  button: {
    backgroundColor: "#0d0d0e",
    paddingVertical: 14,
    paddingHorizontal: 26,
    borderRadius: 12,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});