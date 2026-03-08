import * as Application from "expo-application";
import * as Device from "expo-device";
import * as Localization from "expo-localization";
import { Platform, StyleSheet, Text, View } from "react-native";

export default function DeviceScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Device Information</Text>

      <View style={styles.card}>
        <Text style={styles.item}>
          <Text style={styles.label}>Device Model:</Text> {Device.modelName ?? "Unknown"}
        </Text>
        <Text style={styles.item}>
          <Text style={styles.label}>Operating System:</Text> {Platform.OS}
        </Text>
        <Text style={styles.item}>
          <Text style={styles.label}>OS Version:</Text> {Device.osVersion ?? "Unknown"}
        </Text>
        <Text style={styles.item}>
          <Text style={styles.label}>App Version:</Text> {Application.nativeApplicationVersion ?? "Unknown"}
        </Text>
        <Text style={styles.item}>
          <Text style={styles.label}>Device Manufacturer:</Text> {Device.manufacturer ?? "Unknown"}
        </Text>
        <Text style={styles.item}>
          <Text style={styles.label}>Device Language / Locale:</Text> {Localization.getLocales()[0]?.languageTag ?? "Unknown"}
        </Text>
      </View>
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
    marginBottom: 20,
    color: "#111827",
    textAlign: "center",
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
    marginBottom: 16,
    lineHeight: 23,
    color: "#111827",
  },
  label: {
    fontWeight: "800",
  },
});