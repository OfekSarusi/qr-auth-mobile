import { router } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function SuccessScreen() {

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/(tabs)/home");
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.card}>

        <Text style={styles.icon}>✓</Text>

        <Text style={styles.title}>
          Authentication Successful
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.replace("/(tabs)/home")}
        >
          <Text style={styles.buttonText}>
            Continue
          </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 120,
    backgroundColor: "#f6f7fb",
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },

  icon: {
    fontSize: 60,
    color: "#16a34a",
    marginBottom: 10,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 25,
    color: "#111827",
  },

  button: {
    backgroundColor: "#0d0d0e",
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 12,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

});