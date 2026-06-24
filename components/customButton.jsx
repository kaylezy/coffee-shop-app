import { StyleSheet, Text, TouchableOpacity } from "react-native";

const CustomButton = ({ text, textColor, style, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text
        style={[styles.buttonText, { color: textColor ? textColor : "white" }]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#C67C4E",
    borderRadius: 10,
    paddingVertical: 18,
    alignItems: "center",
    marginHorizontal: 50,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CustomButton;
