import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ProfileScreen = ({ navigation }) => {
  const menuItems = [
    { id: 1, title: "Personal Information", icon: "person-outline" },
    { id: 2, title: "Addresses", icon: "location-outline" },
    { id: 3, title: "Payment Methods", icon: "card-outline" },
    { id: 4, title: "Notifications", icon: "notifications-outline" },
    { id: 5, title: "Help & Support", icon: "help-circle-outline" },
    { id: 6, title: "Privacy Policy", icon: "shield-outline" },
    { id: 7, title: "Terms & Conditions", icon: "document-text-outline" },
  ];

  const renderMenuItem = (item) => (
    <TouchableOpacity
      key={item.id}
      style={styles.menuItem}
      onPress={() => console.log(`Navigate to ${item.title}`)}
    >
      <View style={styles.menuItemContent}>
        <Ionicons name={item.icon} size={24} color="#666" />
        <Text style={styles.menuItemText}>{item.title}</Text>
      </View>
      <Ionicons name="chevron-forward" size={24} color="#666" />
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileInfo}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>JS</Text>
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.userName}>John Smith</Text>
            <Text style={styles.userEmail}>john.smith@example.com</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.menuContainer}>{menuItems.map(renderMenuItem)}</View>

      <TouchableOpacity style={styles.logoutButton}>
        <Ionicons name="log-out-outline" size={24} color="#FF3B30" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    backgroundColor: "#fff",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#007AFF",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  userInfo: {
    marginLeft: 15,
  },
  userName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  userEmail: {
    color: "#666",
    marginTop: 2,
  },
  editButton: {
    marginTop: 15,
    padding: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#007AFF",
    alignSelf: "flex-start",
  },
  editButtonText: {
    color: "#007AFF",
  },
  menuContainer: {
    backgroundColor: "#fff",
    marginTop: 20,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  menuItemContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuItemText: {
    marginLeft: 15,
    fontSize: 16,
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 30,
    padding: 15,
    backgroundColor: "#fff",
  },
  logoutText: {
    color: "#FF3B30",
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "500",
  },
});

export default ProfileScreen;
