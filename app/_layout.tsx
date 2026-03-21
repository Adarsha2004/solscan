import "../src/polyfills";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "../src/polyfills";

export default function RootLayout() {
  return (
    // safeareaprovider wrapes the enitre app to handle notch or safe area
    <SafeAreaProvider>
      {/* the root navigator is a Stack. This means screens pile on top of each other */}
      {/* The tabs group is the ase and token/[mint] appears on top of tabs grp */}
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="token/[mint]" />
      </Stack>
    </SafeAreaProvider>
  );
} 