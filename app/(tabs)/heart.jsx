import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Heart = () => {
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require("../../assets/icons/Library-Heart.png")}
          style={styles.icon}
        />
        <Text style={styles.title}>Your Favorites</Text>
        <Text style={styles.subtitle}>
          Save the coffees you love most and find them here anytime.
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Browse Coffees</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  icon: {
    width: 80,
    height: 80,
    tintColor: "#C67C4E",
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#8B8B94",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#C67C4E",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});

export default Heart;
