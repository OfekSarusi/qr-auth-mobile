import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    // Bottom tab navigation for the main application screens
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="device"
        options={{
          title: "Device Info",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="phone-portrait" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}