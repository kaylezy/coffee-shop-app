import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { ActivityIndicator, View, useColorScheme } from "react-native";
import { AuthProvider, useAuth } from "../context/AuthContext";

function RootLayoutContent() {
  const [loaded] = useFonts({
    regular: require("../assets/font/Merienda/static/Merienda-Regular.ttf"),
    light: require("../assets/font/Merienda/static/Merienda-Light.ttf"),
    medium: require("../assets/font/Merienda/static/Merienda-Medium.ttf"),
    bold: require("../assets/font/Merienda/static/Merienda-Bold.ttf"),
    semibold: require("../assets/font/Merienda/static/Merienda-SemiBold.ttf"),
    extrabold: require("../assets/font/Merienda/static/Merienda-ExtraBold.ttf"),
    black: require("../assets/font/Merienda/static/Merienda-Black.ttf"),
  });

  const { user, initializing } = useAuth();
  const scheme = useColorScheme();

  if (!loaded || initializing) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#C67C4E",
        }}
      >
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: scheme === "dark" ? "#000" : "#fff",
        },
        headerTintColor: scheme === "dark" ? "#fff" : "#000",
        headerTitleStyle: {
          fontFamily: "bold",
        },
      }}
    >
      {!user ? (
        <>
          <Stack.Screen name="index" />
          <Stack.Screen name="(auth)" />
        </>
      ) : (
        <>
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="details" />
          <Stack.Screen name="delivery" />
          <Stack.Screen name="order" />
          <Stack.Screen name="onboardingScreen" />
        </>
      )}
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <RootLayoutContent />
    </AuthProvider>
  );
}
