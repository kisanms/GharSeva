import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CustomerHomeScreen = ({ navigation }) => {
  const services = [
    { id: 1, name: "Plumbing", icon: "water" },
    { id: 2, name: "Electrical", icon: "flash" },
    { id: 3, name: "Cleaning", icon: "brush" },
    { id: 4, name: "Painting", icon: "color-palette" },
    { id: 5, name: "Carpentry", icon: "hammer" },
    { id: 6, name: "Appliance Repair", icon: "build" },
  ];

  const renderServiceCard = (service) => (
    <TouchableOpacity
      key={service.id}
      style={styles.serviceCard}
      onPress={() => console.log(`Selected service: ${service.name}`)}
    >
      <Ionicons name={service.icon} size={32} color="#007AFF" />
      <Text style={styles.serviceText}>{service.name}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome to GharSeva</Text>
        <Text style={styles.subText}>What service do you need today?</Text>
      </View>

      <View style={styles.searchBar}>
        <Ionicons name="search" size={20} color="#666" />
        <Text style={styles.searchText}>Search for services...</Text>
      </View>

      <View style={styles.servicesGrid}>{services.map(renderServiceCard)}</View>

      <View style={styles.recentBookings}>
        <Text style={styles.sectionTitle}>Recent Bookings</Text>
        <Text style={styles.emptyText}>No recent bookings</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    padding: 20,
    backgroundColor: "#fff",
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subText: {
    fontSize: 16,
    color: "#666",
    marginTop: 5,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    margin: 20,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  searchText: {
    marginLeft: 10,
    color: "#666",
  },
  servicesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
    justifyContent: "space-between",
  },
  serviceCard: {
    width: "30%",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  serviceText: {
    marginTop: 5,
    textAlign: "center",
    fontSize: 12,
  },
  recentBookings: {
    margin: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  emptyText: {
    textAlign: "center",
    color: "#666",
    padding: 20,
  },
});

export default CustomerHomeScreen;
