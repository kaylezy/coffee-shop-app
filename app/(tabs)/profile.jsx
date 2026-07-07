import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/customButton";
import { useAuth } from "../../context/AuthContext";

const ProfilePage = () => {
  const router = useRouter();
  const { user, logout } = useAuth();
  const [loading, setLoading] = useState(false);

  const fullName = user?.user_metadata?.full_name || "Coffee Lover";
  const email = user?.email || "guest@coffee.com";
  const userInitials = fullName
    .split(" ")
    .map((name) => name.charAt(0).toUpperCase())
    .join("")
    .substring(0, 2);

  const handleLogout = async () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      {
        text: "Cancel",
        onPress: () => {},
        style: "cancel",
      },
      {
        text: "Logout",
        onPress: async () => {
          setLoading(true);
          try {
            await logout();
            Alert.alert("Success", "Logged out successfully!");
            router.replace("/");
          } catch (error) {
            Alert.alert("Error", error?.message || "Failed to logout");
          } finally {
            setLoading(false);
          }
        },
        style: "destructive",
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>My Profile</Text>
        </View>

        {/* Profile Card */}
        <View style={styles.profileCard}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatar}>{userInitials}</Text>
          </View>
          <Text style={styles.fullName}>{fullName}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>

        {/* User Info Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account Information</Text>

          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Full Name</Text>
            <Text style={styles.infoValue}>{fullName}</Text>
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Email Address</Text>
            <Text style={styles.infoValue}>{email}</Text>
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Account Status</Text>
            <Text style={styles.infoValueActive}>Active</Text>
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>

          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Edit Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Change Password</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>My Orders</Text>
          </TouchableOpacity>
        </View>

        {/* Logout Button */}
        <View style={styles.buttonContainer}>
          <CustomButton
            text={loading ? "Logging out..." : "Logout"}
            onPress={handleLogout}
            style={{ backgroundColor: "#E53935" }}
          />
        </View>

        <View style={{ height: 30 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  scrollContent: {
    paddingVertical: 20,
  },
  header: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#240F51",
    
  },
  profileCard: {
    marginHorizontal: 20,
    marginBottom: 24,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 24,
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#C67C4E",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  avatar: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  fullName: {
    fontSize: 22,
    fontWeight: "700",
    color: "#240F51",
    marginBottom: 4,
    fontFamily: 'extrabold',
  },
  email: {
    fontSize: 14,
    color: "#777",
    fontFamily: 'bold',
  },
  section: {
    marginHorizontal: 20,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#240F51",
    marginBottom: 12,
    
  },
  infoItem: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: "#C67C4E",
    
  },
  infoLabel: {
    fontSize: 12,
    color: "#777",
    fontWeight: "500",
    marginBottom: 4,
    fontFamily: 'bold',
  },
  infoValue: {
    fontSize: 16,
    color: "#333",
    fontWeight: "600",
    fontFamily: 'black',
  },
  infoValueActive: {
    fontSize: 16,
    color: "#27AE60",
    fontWeight: "600",
  },
  actionButton: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  actionButtonText: {
    fontSize: 16,
    color: "#C67C4E",
    fontWeight: "600",
  },
  buttonContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
});

export default ProfilePage;
