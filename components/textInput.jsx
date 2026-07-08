import Entypo from "@expo/vector-icons/Entypo";
import { useState } from "react";
import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const CustomTextInput = ({
  label,
  placeHolder,
  keyboardType,
  onTextChange,
}) => {
  const [visible, setVisible] = useState(false);
  const { width } = Dimensions.get("screen");

  const isPasswordField = label
    .toLowerCase()
    .includes("password" || "confirmPassword");

  return (
    <View style={styles.container}>
      <View style={{ gap: 10 }}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          secureTextEntry={isPasswordField && !visible}
          style={{ width: width * 0.7 }}
          keyboardType={keyboardType}
          placeholder={placeHolder}
          placeholderTextColor={"gray"}
          onChangeText={(text) => {
            onTextChange(text);
          }}
        />
      </View>
      {isPasswordField && (
        <Pressable
          onPress={() => {
            setVisible(!visible);
          }}
        >
          {visible ? (
            <Entypo name="eye" size={24} color="#C67C4E" />
          ) : (
            <Entypo name="eye-with-line" size={24} color="#C67C4E" />
          )}
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 20,
    borderColor: "#C67C4E",
    borderWidth: 1,
    height: 61,
    paddingHorizontal: 16,
    justifyContent: "space-between",
    gap: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    color: "black",
    fontSize: 15,
    fontWeight: "600",
  },
});

export default CustomTextInput;
