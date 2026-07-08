import { router } from "expo-router";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/customButton";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../assets/images/home-image.png")}
        style={styles.background}
        resizeMode="cover"
      ></ImageBackground>

      <View style={styles.gradientOverlay} />

      <View style={styles.content}>
        <Text style={styles.title}>
          Fall in Love with {"\n"} Coffee in Blissful Delight!
        </Text>
        <Text style={styles.subtitle}>
          Welcome to kng&apos;kay coffee corner, where {"\n"} every cup is a
          delightful taste for you.
        </Text>
        <CustomButton
          style={{ width: "75%" }}
          text={"Get Started"}
          onPress={() => {
            router.push("/loginScreen");
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  gradientOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "50%",
    backgroundColor: "rgba(7, 8, 0, 0.31)",
  },
  content: {
    // paddingHorizontal: 5,
    paddingBottom: 30,
  },
  title: {
    color: "white",
    fontSize: 45,
    textAlign: "center",
    marginBottom: 20,
    fontFamily: "black",
  },
  subtitle: {
    color: "#ccc",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 30,
    fontFamily: "medium",
  },
});
