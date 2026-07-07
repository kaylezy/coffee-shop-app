import { useRouter } from "expo-router";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/customButton";
import { useAuth } from "../context/AuthContext";

const OnboardingScreen = () => {
  const router = useRouter();
  const { user } = useAuth();

  const fullName = user?.user_metadata?.full_name || "Coffee Lover";
  const email = user?.email || "guest@coffee.com";

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../assets/images/home-image.png")}
        style={styles.background}
        resizeMode="contain"
      ></ImageBackground>
      <View style={styles.overlay} />
      <View style={styles.content}>
        <Text style={styles.welcome}>Welcome!</Text>
        <Text style={styles.name}>{fullName}</Text>
        <Text style={styles.detailLabel}>Signed in as</Text>
        <Text style={styles.detailEmail}>{email}</Text>
        <Text style={styles.description}>
          Your coffee journey starts here. Tap continue to explore the menu,
          track your orders, and enjoy daily offers.
        </Text>

        <CustomButton
          text="Continue to Home"
          onPress={() => router.push("/home")}
          style={styles.button}
        />
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  content: {
    padding: 24,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    backgroundColor: "rgba(255,255,255,0.95)",
  },
  welcome: {
    color: "#13062d",
    fontSize: 34,
    fontFamily: "black",
    marginBottom: 10,
  },
  name: {
    color: "#C67C4E",
    fontSize: 34,
    fontFamily: "black",
    marginBottom: 4,
  },
  detailLabel: {
    color: "#777",
    fontSize: 14,
    fontFamily: "bold",
    marginTop: 4,
  },
  detailEmail: {
    color: "#333",
    fontSize: 18,
    marginBottom: 16,
    fontFamily: "semibold",
  },
  description: {
    color: "#444",
    fontSize: 18,
    lineHeight: 24,
    marginBottom: 24,
    fontFamily: "light",
  },
  button: {
    marginTop: 8,
  },
});
