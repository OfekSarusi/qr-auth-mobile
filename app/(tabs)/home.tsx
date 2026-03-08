import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSession } from "../../src/context/SessionContext";
import { formatDate } from "../../src/utils/formatDate";

export default function HomeScreen() {
  // Retrieve authenticated user data from session context
  const { user, setUser, setIsAuthenticated } = useSession();

  const handleLogout = () => {
    // Clear user session and return to root screen
    setUser(null);
    setIsAuthenticated(false);
    router.replace("/");
  };

  // Fallback UI in case user data is missing
  if (!user) {
    return (
      <View style={styles.container}>
        <Text>No user data available</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>

      <View style={styles.card}>
        <Text style={styles.item}>
          <Text style={styles.label}>Full Name:</Text> {user.full_name}
        </Text>

        <Text style={styles.item}>
          <Text style={styles.label}>Email:</Text> {user.email}
        </Text>

        <Text style={styles.item}>
          <Text style={styles.label}>Company:</Text> {user.company}
        </Text>

        <Text style={styles.item}>
          <Text style={styles.label}>Department:</Text> {user.department}
        </Text>

        <Text style={styles.item}>
          <Text style={styles.label}>User ID:</Text> {user.user_id}
        </Text>

        <Text style={styles.item}>
          <Text style={styles.label}>Account Creation Date:</Text>{" "}
          {formatDate(user.account_creation_date)}
        </Text>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#f6f7fb",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#ffffff",
    borderRadius: 18,
    padding: 22,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },

  item: {
    fontSize: 16,
    marginBottom: 14,
  },

  label: {
    fontWeight: "700",
  },

  logoutButton: {
    marginTop: 30,
    backgroundColor: "#0d0d0e",
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 10,
    alignSelf: "center",
  },

  logoutButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
});