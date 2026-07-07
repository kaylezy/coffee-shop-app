import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

const Header = ({ text }) => {
  return (
    <View
      style={{
        flexDirection: "column",
        gap: 20,
        justifyContent: "space-between",
        paddingTop: 30,
      }}
    >
      <Pressable
        onPress={() => {
          router.back();
        }}
        style={{
          backgroundColor: "white",
          height: 32,
          width: 32,
          alignItems: "center",
          borderRadius: 16,
          justifyContent: "center",
        }}
      >
        <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
      </Pressable>

      <Text
        style={{
          fontSize: 40,
          color: "white",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        {text}
      </Text>

      <View />
    </View>
  );
};

export default Header;
