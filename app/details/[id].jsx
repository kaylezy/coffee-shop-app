import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { coffees } from "../../components/coffeeData";
import CustomButton from "../../components/customButton";

const Detail = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const coffee = coffees.find((item) => item.id.toString() === id?.toString());

  const [isLiked, setIsLiked] = useState(false);
  const [selectedSize, setSelectedSize] = useState("M");

  if (!coffee) {
    return (
      <SafeAreaView style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>Coffee not found.</Text>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backButtonText}>Go back</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backIcon}>
          <Image
            source={require("../../assets/icons/Arrow-Left.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Detail</Text>
        <TouchableOpacity
          style={styles.favoriteButton}
          onPress={() => setIsLiked(!isLiked)} // toggle state
        >
          <Image
            source={require("../../assets/icons/Library-Heart.png")}
            style={[styles.icon, { tintColor: isLiked ? "#C6764E" : "gray" }]}
          />
        </TouchableOpacity>
      </View>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.imageContainer}>
          <Image
            source={coffee.image}
            style={styles.coffeeImage}
            resizeMode="cover"
          />
        </View>

        {/* container that divides the title text, rating and the image */}
        <View style={styles.headerContainer}>
          <View style={styles.headerRow}>
            <View>
              <Text style={styles.coffeeTitle}>{coffee.name}</Text>
              <Text style={styles.coffeeSubtitle}>Ice/Hot</Text>
            </View>
            <View style={styles.ratingContainer}>
              <Image
                source={require("../../assets/icons/Rating.png")}
                style={styles.starIcon}
              />
              <Text style={styles.ratingText}>{coffee.rating}</Text>
              <Text style={styles.ratingCount}>(230)</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", gap: 25 }}>
            <Image
              source={require("../../assets/icons/Library-bike.png")}
              style={styles.imageHeader}
            />
            <Image
              source={require("../../assets/icons/Library-bean.png")}
              style={styles.imageHeader}
            />
            <Image
              source={require("../../assets/icons/Library-milk.png")}
              style={styles.imageHeader}
            />
          </View>
        </View>
        <View
          style={{
            borderBottomColor: "#46454531",
            borderBottomWidth: 1,
            marginHorizontal: 10,
            marginVertical: 12,
          }}
        />
        <Text style={{ fontSize: 16, fontWeight: "bold", paddingVertical: 10 }}>
          Description
        </Text>
        <Text style={styles.descriptionText}>
          A delightful {coffee.name} with {coffee.subtitle} — rich aroma, smooth
          texture, and a balanced finish. Enjoy hot or iced, with 150ml
          beverage, 25ml of coffee and 85ml of fresh milk.{" "}
          <Text style={{ color: "#C6764E", fontWeight: "bold" }}>
            Read More.
          </Text>
        </Text>

        <Text style={styles.sectionTitle}>Size</Text>
        <View style={styles.sizeRow}>
          {["S", "M", "L"].map((size) => (
            <TouchableOpacity
              key={size}
              style={[
                styles.sizeButton,
                selectedSize === size && styles.sizeButtonActive,
              ]}
              onPress={() => setSelectedSize(size)}
            >
              <Text
                style={[
                  styles.sizeText,
                  selectedSize === size && styles.sizeTextActive,
                ]}
              >
                {size}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <View>
          <Text style={styles.footerLabel}>Price</Text>
          <Text style={styles.footerPrice}>{coffee.price}</Text>
        </View>

        <CustomButton
          style={{ width: "70%", borderRadius: 20 }}
          text={"Buy Now"}
          onPress={() => {
            router.push(`/order?coffeeId=${coffee.id}`);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 120,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  backIcon: {
    width: 44,
    height: 44,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
  },
  favoriteButton: {
    width: 44,
    height: 44,
    borderRadius: 14,

    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: "#313131",
  },
  imageContainer: {
    borderRadius: 24,
    overflow: "hidden",
    backgroundColor: "#FFFFFF",
    marginBottom: 24,
  },
  coffeeImage: {
    width: "100%",
    height: 260,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  imageHeader: {
    width: 40,
    height: 34,
    backgroundColor: "#6b69690d",
    borderRadius: 10,
    padding: 5,
  },
  headerRow: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: 18,
  },
  coffeeTitle: {
    fontSize: 24,
    fontWeight: "800",
    color: "#1B1B1F",
  },
  coffeeSubtitle: {
    fontSize: 14,
    color: "#8B8B94",
    marginTop: 6,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 20,
  },
  starIcon: {
    width: 16,
    height: 16,
    tintColor: "#F2C94C",
    marginRight: 6,
  },
  ratingText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1B1B1F",
  },
  ratingCount: {
    fontSize: 12,
    color: "#8B8B94",
    marginLeft: 4,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1B1B1F",
    marginBottom: 12,
  },
  descriptionText: {
    fontSize: 14,
    color: "#6B6B72",
    lineHeight: 22,
    marginBottom: 24,
  },
  sizeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 40,
  },
  sizeButton: {
    width: 110,
    height: 50,
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: "#E7E7E8",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  sizeButtonActive: {
    backgroundColor: "#f1cdb67d",
    borderColor: "#C67C4E",
  },
  sizeText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1B1B1F",
  },
  sizeTextActive: {
    color: "#C67C4E",
  },
  footer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: "#ffffff98",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: -8 },
  },
  footerLabel: {
    fontSize: 16,
    color: "#8B8B94",
    marginBottom: 6,
  },
  footerPrice: {
    fontSize: 24,
    fontWeight: "800",
    color: "#C67C4E",
  },
  buyButton: {
    backgroundColor: "#C67C4E",
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  buyButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
  fallbackContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#F8F8F8",
  },
  fallbackText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1B1B1F",
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: "#C67C4E",
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 16,
  },
  backButtonText: {
    color: "#FFFFFF",
    fontWeight: "700",
  },
});

export default Detail;
