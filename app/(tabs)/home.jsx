import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { coffees } from "../../components/coffeeData";
import CustomCard from "../../components/customCard";

const Home = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("All Coffee");

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "",
          position: "absolute",
          left: 0,
          right: 0,
          height: "50%",
        }}
      >
        <View style={styles.headerWrapper}>
          <View style={styles.header}>
            <View style={{ marginTop: 60 }}>
              <Text style={styles.locationLabel}>Location</Text>
              <Text style={styles.locationText}>Bilzen, Tanjungbalai </Text>
            </View>
            <TouchableOpacity style={styles.profileButton}>
              <Image
                source={require("../../assets/icons/Arrow-Down.png")}
                style={styles.profileIcon}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.searchContainer}>
            <View style={styles.searchBox}>
              <Image
                source={require("../../assets/icons/Library-Search.png")}
                style={styles.searchIcon}
              />
              <TextInput
                placeholder="Search coffee"
                placeholderTextColor="#C4C4C4"
                style={styles.searchInput}
              />
            </View>
            <TouchableOpacity style={styles.filterButton}>
              <Image
                source={require("../../assets/icons/Library-Filter.png")}
                style={styles.filterIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.promoBanner}>
        <Image
          source={require("../../assets/images/Banner-img.png")}
          style={styles.promoImage}
          resizeMode="cover"
        />
        <View style={styles.promoOverlay} />
        <View style={styles.promoTextContainer}>
          <Text style={styles.promoLabel}>Promo</Text>

          <View style={styles.promoView}>
            <Text style={styles.promoText}>Buy one get</Text>
          </View>
          <View style={[styles.promoView, { top: 110, width: 182 }]}>
            <Text style={[styles.promoText, { top: -18 }]}>one FREE</Text>
          </View>

          {/* <Text style={[styles.promoText]}>Buy one get</Text>
          <Text style={styles.promoText}>one FREE</Text> */}
        </View>
      </View>

      <View style={{ position: "absolute", bottom: 0, top: "56%" }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tabsScroll}
        >
          {[
            { label: "All Coffee" },
            { label: "Machiato" },
            { label: "Latte" },
            { label: "Americano" },
            { label: "Africana" },
          ].map((tab, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.tabButton,
                activeTab === tab.label && styles.activeTabButton,
              ]}
              onPress={() => setActiveTab(tab.label)}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === tab.label && styles.activeTabText,
                ]}
              >
                {tab.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <ScrollView
          style={styles.cardsScroll}
          contentContainerStyle={styles.cardsGrid}
          showsVerticalScrollIndicator={false}
        >
          {coffees.map((coffee) => (
            <TouchableOpacity
              key={coffee.id}
              activeOpacity={0.85}
              style={styles.gridCardWrapper}
              onPress={() => router.push(`/details/${coffee.id}`)}
            >
              <CustomCard
                name={coffee.name}
                subtitle={coffee.subtitle}
                price={coffee.price}
                image={coffee.image}
                rating={coffee.rating}
                style={styles.gridCard}
                onAdd={() => {}}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    // backgroundColor: "#313131",
    // padding: 10
  },
  headerWrapper: {
    backgroundColor: "#313131",
    paddingHorizontal: 20,
    paddingTop: 10,
    height: "80%",
    // paddingBottom: 24,
  },
  header: {
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
  },
  locationLabel: {
    color: "#B3B3B8",
    fontSize: 14,
    marginBottom: 6,
  },
  locationText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  profileButton: {
    marginLeft: 10,
    marginTop: 80,
    // width: 44,
    // height: 44,
    // borderRadius: 14,
    // backgroundColor: "#C77A4D",
    // alignItems: "center",
    // justifyContent: "center",
  },
  profileIcon: {
    width: 20,
    height: 20,
    tintColor: "#FFFFFF",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 24,
    marginBottom: 20,
  },
  searchBox: {
    flex: 1,
    backgroundColor: "#2A2A2A",
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    height: 52,
  },
  searchInput: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: 16,
    marginLeft: 10,
  },
  searchIcon: {
    width: 18,
    height: 18,
    tintColor: "#A8A8AE",
  },
  filterButton: {
    backgroundColor: "#C67C4E",
    borderRadius: 16,
    padding: 14,
    marginLeft: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  filterIcon: {
    width: 18,
    height: 18,
    tintColor: "#FFFFFF",
  },
  promoBanner: {
    position: "relative",
    top: "23%",
    marginHorizontal: 15,
    // marginTop: 20,
    borderRadius: 24,
    overflow: "hidden",
    height: 180,
  },
  promoImage: {
    width: "100%",
    height: "100%",
  },
  promoOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.25)",
  },
  promoTextContainer: {
    position: "absolute",
    left: 20,
    top: 20,
    // backgroundColor: "red",
  },
  promoLabel: {
    backgroundColor: "#FF5C5C",
    color: "#FFFFFF",
    fontWeight: "700",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 4,
    alignSelf: "flex-start",
    marginBottom: 10,
    fontSize: 12,
  },
  promoView: {
    backgroundColor: "black",
    position: "absolute",
    top: 60,
    width: 250,
    height: 35,
  },
  promoText: {
    color: "white",
    fontSize: 50,
    fontWeight: "bold",
    position: "absolute",
    top: -22,
    left: 5,
  },
  // tabsContainer: {
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   marginHorizontal: 20,
  //   marginTop: 20,
  //   marginLeft: 10,
  // },
  tabButton: {
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    backgroundColor: "#EEEEEE",
    minWidth: 20,
    alignSelf: "center",
    marginLeft: 10,
  },
  activeTabButton: {
    backgroundColor: "#C67C4E",
  },
  tabText: {
    color: "#333333",
    fontWeight: "600",
    fontSize: 16,
  },
  activeTabText: {
    color: "#FFFFFF",
  },
  tabsScroll: {
    paddingLeft: 10,
    paddingRight: 10,
    // marginTop: 10,
    height: 50,
    // marginBottom: 80,
    // backgroundColor: "red",
  },
  cardsScroll: {
    flex: 1,
    marginTop: "-80%",
    // backgroundColor: "red",
  },
  cardsGrid: {
    paddingHorizontal: 20,
    // paddingTop: 12,
    paddingBottom: 40,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  gridCard: {
    width: "100%",
  },
  gridCardWrapper: {
    width: "48%",
    marginBottom: 12,
  },
});

export default Home;
