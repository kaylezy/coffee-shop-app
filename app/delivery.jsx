import { router } from "expo-router";
import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const DeliveryScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Map section */}

      <View style={styles.mapContainer}>
        <Image
          source={require("../assets/icons/Maps.jpeg")} // your map image
          style={styles.mapImage}
          resizeMode="cover"
        />

        {/* Back and settings buttons */}
        <TouchableOpacity
          onPress={() => {
            router.back();
          }}
          style={[styles.iconButton, { left: 20 }]}
        >
          <Image
            source={require("../assets/icons/Arrow-Left.png")}
            style={styles.icon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.iconButton, { right: 20 }]}>
          <Image
            source={require("../assets/icons/Librarygps.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          alignSelf: "center",
          borderWidth: 1,
          borderColor: "#b4b3b3",
          width: 50,
          height: 5,
          borderRadius: 50,
          backgroundColor: "#b4b3b3",
          marginVertical: 20,
        }}
      />
      {/* Delivery info */}
      <View style={styles.infoContainer}>
        <Text style={styles.timeText}>10 minutes left</Text>
        <Text style={styles.addressText}>Delivery to Jl. Kpg Sutoyo</Text>

        {/* Progress bar */}
        <View style={styles.progressBar}>
          {[...Array(4)].map((_, i) => (
            <View
              key={i}
              style={[
                styles.progressSegment,
                i < 3 && styles.progressSegmentActive,
              ]}
            />
          ))}
        </View>

        {/* Delivery status */}
        <View style={styles.statusBox}>
          <Image
            source={require("../assets/icons/Library-bike.png")}
            style={styles.statusIcon}
          />
          <View style={{ flex: 1 }}>
            <Text style={styles.statusTitle}>Delivered your order</Text>
            <Text style={styles.statusSubtitle}>
              We will deliver your goods to you in the shortest possible time.
            </Text>
          </View>
        </View>

        {/* Courier info */}
        <View style={styles.courierBox}>
          <Image
            source={require("../assets/images/Profile.png")} // courier photo
            style={styles.courierImage}
          />
          <View style={{ flex: 1 }}>
            <Text style={styles.courierName}>Brooklyn Simmons</Text>
            <Text style={styles.courierRole}>Personal Courier</Text>
          </View>
          <TouchableOpacity style={styles.callButton}>
            <Image
              source={require("../assets/icons/Library-Calling.png")}
              style={styles.callIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  mapContainer: { height: "60%", position: "relative" },
  mapImage: { width: "100%", height: "100%" },
  iconButton: {
    position: "absolute",
    top: 20,
    backgroundColor: "#dcdcdc81",
    borderRadius: 20,
    padding: 10,
    elevation: 3,
  },
  icon: { width: 30, height: 30, tintColor: "#333" },
  infoContainer: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: "center",
    gap: 5,
  },
  timeText: { fontSize: 20, fontWeight: "bold", color: "#000" },
  addressText: { color: "#8B8B94", marginTop: 4, fontSize: 20 },
  progressBar: {
    flexDirection: "row",
    marginVertical: 20,
    justifyContent: "space-between",
  },
  progressSegment: {
    flex: 1,
    height: 4,
    backgroundColor: "#E3E3E3",
    marginHorizontal: 3,
    borderRadius: 2,
  },
  progressSegmentActive: { backgroundColor: "#4CAF50" },
  statusBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff38",
    borderRadius: 12,
    padding: 10,
    marginBottom: 20,
    borderColor: "#b2b2b2ae",
    borderWidth: 1,
  },
  statusIcon: {
    width: 55,
    height: 55,
    tintColor: "#C67C4E",
    marginRight: 20,
    borderWidth: 1,
    padding: 1,
    borderRadius: 10,
    borderColor: "#b2b2b2ae",
  },
  statusTitle: { fontWeight: "bold", fontSize: 18, color: "#333" },
  statusSubtitle: { color: "#8B8B94", fontSize: 16, marginTop: 6 },
  courierBox: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    padding: 14,
  },
  courierImage: { width: 50, height: 50, borderRadius: 10, marginRight: 12 },
  courierName: { fontWeight: "bold", fontSize: 18, color: "#333" },
  courierRole: { color: "#8B8B94", fontSize: 16 },
  callButton: {
    borderWidth: 1,
    borderColor: "#bbbbbb",
    borderRadius: 10,
    padding: 10,
  },
  callIcon: { width: 20, height: 20, tintColor: "#050505" },
});

export default DeliveryScreen;
