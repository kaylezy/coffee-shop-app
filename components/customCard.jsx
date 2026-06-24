import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CustomCard = ({ name, subtitle, price, image, rating, onAdd, style }) => {
  return (
    <View style={[styles.card, style]}>
      <View style={styles.imageWrapper}>
        <Image source={image} style={styles.image} resizeMode="cover" />
        <View style={styles.ratingBadge}>
          <Image
            source={require("../assets/icons/Rating.png")}
            style={styles.ratingIcon}
          />
          <Text style={styles.ratingText}>{rating}</Text>
        </View>
      </View>

      <Text style={styles.title}>{name}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}

      <View style={styles.footer}>
        <Text style={styles.price}>{price}</Text>
        <TouchableOpacity style={styles.addButton} onPress={onAdd}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 10 },
    elevation: 6,
    overflow: "hidden",
    padding: 7,
  },
  imageWrapper: {
    width: "100%",
    height: 160,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 16,
  },
  ratingBadge: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "rgba(19, 18, 18, 0.29)",
    borderBottomLeftRadius: 50,
    borderTopRightRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  ratingIcon: {
    width: 12,
    height: 12,
    tintColor: "#F2C94C",
    marginRight: 6,
  },
  ratingText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "700",
  },
  title: {
    fontSize: 16,
    fontWeight: "800",
    marginTop: 12,
    marginHorizontal: 14,
  },
  subtitle: {
    color: "#8B8B94",
    fontSize: 12,
    marginTop: 6,
    marginHorizontal: 14,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 14,
    marginHorizontal: 14,
    marginBottom: 14,
  },
  price: {
    fontSize: 18,
    fontWeight: "800",
    color: "#1B1B1F",
  },
  addButton: {
    backgroundColor: "#C67C4E",
    borderRadius: 12,
    height: 34,
    width: 34,
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },
});

export default CustomCard;
