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
  const [visible, setVisible] = useState(true);

  // console.log(visible);

  const { width } = Dimensions.get("screen");
  return (
    <View style={styles.container}>
      <View style={{ gap: 10 }}>
        <Text style={styles.label}>{label}</Text>

        <TextInput
          secureTextEntry={!visible}
          style={{ width: width * 0.7 }}
          keyboardType={keyboardType}
          placeholder={placeHolder}
          placeholderTextColor={"gray"}
          onChangeText={(text) => {
            onTextChange(text);
          }}
        />
      </View>

      <View>
        {label.toLowerCase() === "password" ?  (
          <Pressable
            onPress={() => {
              setVisible(!visible);
            }}
          >
            {visible ? (
                <Entypo name="eye-with-line" size={24} color="#C67C4E" />
            ) : (
           
              
              <Entypo name="eye" size={24} color="#C67C4E" /> 
            )}
          </Pressable>
        ) : null}
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 20,
    borderColor: '#C67C4E',
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
    fontWeight: "semibold",
  },
});

export default CustomTextInput;
