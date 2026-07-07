import { Checkbox } from "expo-checkbox";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/customButton";
import Header from "../../components/header";
import CustomTextInput from "../../components/textInput";
import { useAuth } from "../../context/AuthContext";

const LogIn = () => {
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Login Failed", "Please enter both email and password.");
      return;
    }

    setLoading(true);
    try {
      await login(email, password);
      Alert.alert("Success", "Logged in successfully!", [
        {
          text: "OK",
          onPress: () =>
            router.replace(
              "/onboardingScreen?email=" + encodeURIComponent(email),
            ),
        },
      ]);
    } catch (authError) {
      Alert.alert(
        "Login Failed",
        authError?.message || "Unable to log in. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header text={"Login"} />
        <Pressable>
          <Text
            style={{ textAlign: "center", color: "white", fontSize: 16 }}
            onPress={() => {
              router.push("/signupScreen");
            }}
          >
            Don&apos;t have an account{" "}
            <Text style={{ color: "blue" }}>Sign Up</Text>
          </Text>
        </Pressable>
      </View>
      <ScrollView style={styles.backgroundcontainer}>
        <View style={styles.textContainer}>
          <Text style={styles.mainText}>Welcome Back</Text>
          <Text style={styles.subText}>
            Hey you’re back, fill in your details to get back in
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <CustomTextInput
            label={"Email"}
            keyboardType={"email-address"}
            placeHolder={"Enter your email"}
            onTextChange={(value) => {
              setEmail(value);
            }}
          />

          <CustomTextInput
            label={"Password"}
            placeHolder={"Enter your password"}
            onTextChange={(value) => {
              setPassword(value);
            }}
          />
          <Pressable style={{ alignSelf: "flex-end" }}>
            <Text style={{ color: "#C67C4E" }}>Forgot password?</Text>
          </Pressable>

          <View style={styles.privacy}>
            <Checkbox
              color={"#C67C4E"}
              style={styles.checkbox}
              value={isChecked}
              onValueChange={() => {
                setChecked(!isChecked);
              }}
            />

            <Text style={styles.policyText}>Remember me</Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <CustomButton
            onPress={handleLogin}
            style={{ width: "60%" }}
            text={loading ? "Logging in..." : "Login"}
          />
        </View>

        <View style={styles.orRow}>
          <View style={styles.orLine} />
          <Text style={styles.orText}>Or</Text>
          <View style={styles.orLine} />
        </View>

        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require("../../assets/images/google-logo.webp")}
            style={styles.socialIcon}
          />
          <Text style={styles.socialText}>Continue with Google</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  backgroundcontainer: {
    backgroundColor: "white",
    borderRadius: 15,
    marginTop: 20,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  container: {
    backgroundColor: "#C67C4E",
    flex: 1,
    paddingHorizontal: 20,
  },
  mainText: {
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
  },
  subText: {
    color: "#000000c6",
  },
  textContainer: {
    gap: 16,
    marginTop: 30,
  },
  inputContainer: {
    gap: 16,
    marginTop: 30,
  },
  checkbox: {
    margin: 8,
    borderRadius: 4,
  },
  privacy: {
    flexDirection: "row",
  },
  policyText: {
    marginTop: 10,
    fontWeight: "medium",
  },
  buttonContainer: {
    marginTop: 30,
    gap: 16,
    // flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
    // position: "absolute",
    // bottom: 40,
    // left: "10%",
  },
  orRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 18,
    marginBottom: 18,
  },
  orLine: { flex: 1, height: 1, backgroundColor: "#d1d1d1" },
  orText: { marginHorizontal: 10, color: "#888" },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    padding: 12,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#eee",
    marginBottom: 12,
    width: 220,
  },
  socialIcon: { width: 25, height: 25, marginRight: 10 },
  socialText: { color: "#333" },
});

export default LogIn;
