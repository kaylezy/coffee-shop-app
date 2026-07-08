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

const SignupScreen = () => {
  const router = useRouter();
  const { register } = useAuth();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isChecked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    if (!fullName || !email || !password || !confirmPassword) {
      Alert.alert("Registration Failed", "Please fill in all fields.");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Registration Failed", "Passwords do not match.");
      return;
    }

    setLoading(true);
    try {
      await register(fullName, email, password);
      Alert.alert(
        "Success",
        "Account created successfully! Check your email for account verification.",
        [
          {
            text: "OK",
            onPress: () =>
              router.replace(
                // "/onboardingScreen?email=" + encodeURIComponent(email),
                "/loginScreen?email=" + encodeURIComponent(email),
              ),
          },
        ],
      );
    } catch (authError) {
      Alert.alert(
        "Registration Failed",
        authError?.message || "Unable to register. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header text={"Sign Up"} />
        <Pressable>
          <Text
            style={{ textAlign: "center", color: "white", fontSize: 16 }}
            onPress={() => {
              router.push("/loginScreen");
            }}
          >
            Already have an account{" "}
            <Text style={{ color: "blue" }}>Log In</Text>
          </Text>
        </Pressable>
      </View>
      <ScrollView style={styles.backgroundcontainer}>
        <View style={styles.textContainer}>
          <Text style={styles.mainText}>Get Started</Text>
          <Text style={styles.subText}>
            Create an account or log in to explore our coffee app.
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <CustomTextInput
            label={"Full Name"}
            placeHolder={"Enter your full name"}
            onTextChange={(value) => {
              setFullName(value);
            }}
          />
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
            secureTextEntry={true}
            placeHolder={"Enter your password"}
            onTextChange={(value) => {
              setPassword(value);
            }}
          />

          <CustomTextInput
            label={"Confirm Password"}
            secureTextEntry={true}
            placeHolder={"Confirm your password"}
            onTextChange={(value) => {
              setConfirmPassword(value);
            }}
          />

          <View style={styles.privacy}>
            <Checkbox
              color={"#C67C4E"}
              style={styles.checkbox}
              value={isChecked}
              onValueChange={() => {
                setChecked(!isChecked);
              }}
            />

            <Text style={styles.policyText}>
              By signing up, you agree to the{" "}
              <Text style={{ color: "#2C14DD" }}>
                Terms of {"\n"}Service and Privacy Policy
              </Text>{" "}
            </Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <CustomButton
            onPress={handleSignUp}
            style={{ width: "60%" }}
            text={loading ? "Registering..." : "Register"}
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
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
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
    gap: 10,
    marginTop: 5,
  },
  inputContainer: {
    gap: 16,
    marginTop: 10,
  },
  checkbox: {
    margin: 8,
    borderRadius: 4,
  },
  privacy: {
    marginTop: 10,
    flexDirection: "row",
  },
  policyText: {
    marginTop: 5,
    fontWeight: "medium",
  },
  buttonContainer: {
    marginTop: 20,
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
    marginTop: 20,
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
    marginVertical: 10,
    width: 220,
  },
  socialIcon: { width: 25, height: 25, marginRight: 10 },
  socialText: { color: "#333" },
});

export default SignupScreen;
