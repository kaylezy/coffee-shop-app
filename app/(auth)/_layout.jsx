import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerTintColor: "#000",
      }}
    >
      <Stack.Screen name="loginScreen" />
      <Stack.Screen name="signupScreen" />
    </Stack>
  );
}
