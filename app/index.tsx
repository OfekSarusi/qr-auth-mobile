import { CameraView, useCameraPermissions } from "expo-camera";
import { router } from "expo-router";
import { useRef, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { useSession } from "../src/context/SessionContext";
import { resolveQrToken } from "../src/services/qrService";

export default function QRScreen() {
  // Camera permission state and function to request access
  const [permission, requestPermission] = useCameraPermissions();

  // Local UI state for scan flow
  const [scanned, setScanned] = useState(false);
  const [loading, setLoading] = useState(false);

  // Prevents duplicate scans while processing the current QR code
  const scanningLock = useRef(false);

  // Save the resolved user in the global session
  const { setUser } = useSession();

  const handleBarCodeScanned = async ({ data }: { data: string }) => {
    // Ignore additional scans while a request is already in progress
    if (scanningLock.current || loading) return;

    scanningLock.current = true;
    setScanned(true);
    setLoading(true);

    try {
      // Normalize scanned QR content before sending it to the backend
      const token = data.trim();

      console.log("Scanned raw data:", data);
      console.log("Resolved token:", token);

      // Resolve the QR token into user data
      const user = await resolveQrToken(token);

      // Store user data globally for the next screens
      setUser(user);

      // Navigate to password authentication screen
      router.push("/login");
    } 
    
    catch (error) {
      console.log("QR resolve error:", error);
      Alert.alert("Error", "Failed to resolve QR token");

      // Allow scanning again after a failed request
      setScanned(false);
      scanningLock.current = false;
    } finally {
      setLoading(false);
    }
  };

  // Still checking camera permission state
  if (!permission) {
    return (
      <View style={styles.centered}>
        <Text>Checking camera permission...</Text>
      </View>
    );
  }

  // Ask the user for camera permission if not granted yet
  if (!permission.granted) {
    return (
      <View style={styles.centered}>
        <Text style={styles.title}>Camera permission is required</Text>
        <TouchableOpacity style={styles.primaryButton} onPress={requestPermission}>
          <Text style={styles.primaryButtonText}>Grant Permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scan QR Code</Text>
      <Text style={styles.subtitle}>
        Scan a QR code to load the user and continue
      </Text>

      <View style={styles.cameraContainer}>
        <CameraView
          style={styles.camera}
          facing="back"
          barcodeScannerSettings={{ barcodeTypes: ["qr"] }}
          onBarcodeScanned={handleBarCodeScanned}
        />
      </View>

      {/* Show loading indicator while resolving the QR token */}
      {loading && <ActivityIndicator size="large" style={styles.loader} />}

      {/* Allow the user to reset the scan state and scan again */}
      {scanned && !loading && (
        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => {
            setScanned(false);
            scanningLock.current = false;
          }}
        >
          <Text style={styles.secondaryButtonText}>Scan Again</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f6f7fb",
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#f6f7fb",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    textAlign: "center",
    color: "#111827",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    color: "#6b7280",
  },
  cameraContainer: {
    height: 380,
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 20,
    backgroundColor: "#000",
  },
  camera: {
    flex: 1,
  },
  loader: {
    marginBottom: 20,
  },
  primaryButton: {
    backgroundColor: "#2563eb",
    paddingVertical: 15,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 10,
  },
  primaryButtonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "700",
  },
  secondaryButton: {
    backgroundColor: "#0d0d0e",
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
    marginBottom: 12,
  },
  secondaryButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});