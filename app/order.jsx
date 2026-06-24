import { useLocalSearchParams, useRouter } from "expo-router";
import { useMemo, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { coffees } from "../components/coffeeData";
import CustomButton from "../components/customButton";

export default function Order() {
  const { coffeeId } = useLocalSearchParams();
  const router = useRouter();
  const coffee =
    coffees.find((c) => c.id.toString() === coffeeId?.toString()) || coffees[0];

  const [deliveryType, setDeliveryType] = useState("deliver");
  const [quantity, setQuantity] = useState(1);

  const itemPrice = useMemo(
    () => parseFloat(coffee.price.replace("$", "")),
    [coffee],
  );
  const deliveryFee = deliveryType === "deliver" ? 1.0 : 0.0;
  const subtotal = itemPrice * quantity;
  const total = useMemo(
    () => (subtotal + deliveryFee).toFixed(2),
    [subtotal, deliveryFee],
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backIcon}>
          <Image
            source={require("../assets/icons/Arrow-Left.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Order</Text>
        <View style={{ width: 44 }} />
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.toggleRow}>
          <TouchableOpacity
            style={[
              styles.toggleButton,
              deliveryType === "deliver" && styles.toggleActive,
            ]}
            onPress={() => setDeliveryType("deliver")}
          >
            <Text
              style={[
                styles.toggleText,
                deliveryType === "deliver" && styles.toggleTextActive,
              ]}
            >
              Deliver
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.toggleButton,
              deliveryType === "pickup" && styles.toggleActive,
            ]}
            onPress={() => setDeliveryType("pickup")}
          >
            <Text
              style={[
                styles.toggleText,
                deliveryType === "pickup" && styles.toggleTextActive,
              ]}
            >
              Pick Up
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionLabel}>Delivery Address</Text>
        <Text style={styles.addressTitle}>Jl. Kpg Sutoyo</Text>
        <Text style={styles.addressText}>
          Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai.
        </Text>

        <View style={styles.actionRow}>
          <TouchableOpacity style={styles.actionButton}>
            <Image
              source={require("../assets/icons/Edit.png")}
              style={{ width: 15, height: 15 }}
            />
            <Text style={styles.actionText}>Edit Address</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Image
              source={require("../assets/icons/Document.png")}
              style={{ width: 14, height: 14 }}
            />
            <Text style={styles.actionText}>Add Note</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.divider} />

        <View style={styles.itemRow}>
          <Image source={coffee.image} style={styles.itemImage} />
          <View style={{ flex: 1, marginLeft: 12 }}>
            <Text style={styles.itemTitle}>{coffee.name}</Text>
            <Text style={styles.itemSubtitle}>{coffee.subtitle}</Text>
          </View>
          <View style={styles.qtyRow}>
            <TouchableOpacity
              onPress={() => setQuantity(Math.max(1, quantity - 1))}
              style={styles.qtyBtn}
            >
              <Text style={styles.qtyText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.qtyValue}>{quantity}</Text>
            <TouchableOpacity
              onPress={() => setQuantity(quantity + 1)}
              style={styles.qtyBtn}
            >
              <Text style={styles.qtyText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.divider} />

        <TouchableOpacity style={styles.discountRow}>
          <Image
            source={require("../assets/icons/Discount.png")}
            style={{ width: 24, height: 24 }}
          />
          <Text style={styles.discountText}>1 Discount is Applies</Text>
          <Image
            source={require("../assets/icons/Arrow-Right.png")}
            style={{ marginLeft: "38%", width: 24, height: 24 }}
          />
        </TouchableOpacity>

        <Text style={[styles.sectionLabel, { marginTop: 20 }]}>
          Payment Summary
        </Text>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Price</Text>
          <Text style={styles.summaryValue}>${subtotal.toFixed(2)}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Delivery Fee</Text>
          <Text style={styles.summaryValue}>${deliveryFee.toFixed(2)}</Text>
        </View>

        <View style={{ height: 24 }} />

        {/* <TouchableOpacity style={styles.paymentMethod}>
          <Text style={styles.paymentMethodLabel}>Cash/Wallet</Text>
          <Text style={styles.paymentMethodAmount}>${total}</Text>
        </TouchableOpacity> */}
      </ScrollView>

      <View style={styles.footer}>
        <View style={{ flexDirection: "row", gap: 10, alignItems: 'center' }}>
          <Image
            source={require("../assets/icons/Wallet.png")}
            style={{ width: 24, height: 24 }}
          />
          <View style={{gap: 5}}>
            <Text style={styles.footerLabel}>Cash/Wallet</Text>
            <Text style={[styles.footerLabel, {color: '#C4764E'}]}>$ {total}</Text>
          </View>
          <TouchableOpacity>
            <Image
              source={require("../assets/icons/Arrow-Down.png")}
              style={{ marginLeft: "70%", width: 24, height: 24 }}
            />
          </TouchableOpacity>
        </View>
        <CustomButton
          style={{ width: "100%", borderRadius: 20, marginLeft: 0,  }}
          text={"Order"}
          onPress={() => {
            router.push(`./delivery`);
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8F8F8" },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 18,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  backIcon: {
    width: 44,
    height: 44,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  content: { padding: 20, paddingBottom: 100 },
  icon: { width: 20, height: 20, tintColor: "#313131" },
  title: { fontSize: 20, fontWeight: "700" },
  toggleRow: {
    flexDirection: "row",
    backgroundColor: "#F2F2F2",
    padding: 6,
    borderRadius: 10,
    marginBottom: 18,
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 8,
  },
  toggleActive: { backgroundColor: "#C67C4E" },
  toggleText: { fontSize: 14, fontWeight: "700", color: "#333" },
  toggleTextActive: { color: "#fff" },
  sectionLabel: { fontSize: 16, fontWeight: "700", marginBottom: 20 },
  addressTitle: { fontSize: 14, fontWeight: "700", marginBottom: 5 },
  addressText: { color: "#8B8B94", marginBottom: 12 },
  actionRow: { flexDirection: "row", gap: 8, marginBottom: 12 },
  actionButton: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 50,
    marginRight: 8,
    borderColor: "#313131",
    borderWidth: 1,
  },
  actionText: { color: "#333", fontWeight: "600" },
  divider: { height: 1, backgroundColor: "#EAEAEA", marginVertical: 12 },
  itemRow: { flexDirection: "row", alignItems: "center", paddingVertical: 8 },
  itemImage: { width: 64, height: 64, borderRadius: 12 },
  itemTitle: { fontSize: 16, fontWeight: "800" },
  itemSubtitle: { color: "#8B8B94", marginTop: 4 },
  qtyRow: { flexDirection: "row", gap: 20, alignItems: "center" },
  qtyBtn: {
    backgroundColor: "#fff",
    width: 30,
    height: 30,
    borderRadius: 50,
    borderColor: "#E3E3E3",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  qtyText: { fontSize: 18, fontWeight: "700" },
  qtyValue: { textAlign: "center", marginVertical: 6, fontWeight: "700" },
  discountRow: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 15,
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
    borderColor: "#E3E3E3",
    borderWidth: 1,
  },
  discountText: { fontSize: 16, fontWeight: "700" },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6,
  },
  summaryLabel: { color: "#313131", fontWeight: "semibold" },
  summaryValue: { fontWeight: "700" },
  paymentMethod: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  paymentMethodLabel: { fontWeight: "700" },
  paymentMethodAmount: { color: "#C67C4E", fontWeight: "800" },
  footer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    gap: 20,
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: "#ffffff98",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    flexDirection: "column",
    // justifyContent: "space-between",
    // alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: -8 },
  },
  footerLabel: { fontWeight: "800", fontSize: 18 },
  footerSub: { color: "#8B8B94", fontSize: 12 },
  orderBtn: {
    backgroundColor: "#C67C4E",
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 12,
  },
  orderBtnText: { color: "#FFFFFF", fontWeight: "800" },
});
