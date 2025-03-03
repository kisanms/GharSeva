import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ManageServicesScreen = () => {
  const [activeTab, setActiveTab] = useState("categories");

  const categories = [
    {
      id: "1",
      name: "Plumbing",
      providers: 12,
      status: "Active",
      icon: "water",
    },
    {
      id: "2",
      name: "Electrical",
      providers: 8,
      status: "Active",
      icon: "flash",
    },
    {
      id: "3",
      name: "Cleaning",
      providers: 15,
      status: "Active",
      icon: "brush",
    },
  ];

  const providers = [
    {
      id: "1",
      name: "John Smith",
      service: "Plumbing",
      rating: 4.8,
      jobs: 125,
      status: "Active",
    },
    {
      id: "2",
      name: "Mike Johnson",
      service: "Electrical",
      rating: 4.5,
      jobs: 98,
      status: "Pending",
    },
  ];

  const renderCategoryCard = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={styles.categoryIcon}>
          <Ionicons name={item.icon} size={24} color="#007AFF" />
        </View>
        <View style={styles.categoryInfo}>
          <Text style={styles.cardTitle}>{item.name}</Text>
          <Text style={styles.providerCount}>{item.providers} Providers</Text>
        </View>
        <Text
          style={[
            styles.status,
            { color: item.status === "Active" ? "green" : "orange" },
          ]}
        >
          {item.status}
        </Text>
      </View>
    </TouchableOpacity>
  );

  const renderProviderCard = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={styles.providerInfo}>
          <Text style={styles.cardTitle}>{item.name}</Text>
          <Text style={styles.serviceType}>{item.service}</Text>
        </View>
        <Text
          style={[
            styles.status,
            { color: item.status === "Active" ? "green" : "orange" },
          ]}
        >
          {item.status}
        </Text>
      </View>
      <View style={styles.statsRow}>
        <View style={styles.stat}>
          <Ionicons name="star" size={16} color="#FFD700" />
          <Text style={styles.statText}>{item.rating}</Text>
        </View>
        <View style={styles.stat}>
          <Ionicons name="briefcase-outline" size={16} color="#666" />
          <Text style={styles.statText}>{item.jobs} jobs</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "categories" && styles.activeTab]}
          onPress={() => setActiveTab("categories")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "categories" && styles.activeTabText,
            ]}
          >
            Categories
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === "providers" && styles.activeTab]}
          onPress={() => setActiveTab("providers")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "providers" && styles.activeTabText,
            ]}
          >
            Providers
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.addButton}>
        <Ionicons name="add" size={24} color="#fff" />
        <Text style={styles.addButtonText}>
          Add {activeTab === "categories" ? "Category" : "Provider"}
        </Text>
      </TouchableOpacity>

      <FlatList
        data={activeTab === "categories" ? categories : providers}
        renderItem={
          activeTab === "categories" ? renderCategoryCard : renderProviderCard
        }
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  tabContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 15,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#007AFF",
  },
  tabText: {
    color: "#666",
    fontWeight: "500",
  },
  activeTabText: {
    color: "#007AFF",
  },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#007AFF",
    margin: 15,
    padding: 12,
    borderRadius: 8,
  },
  addButtonText: {
    color: "#fff",
    marginLeft: 8,
    fontSize: 16,
    fontWeight: "500",
  },
  listContainer: {
    padding: 15,
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  categoryIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#E8F2FF",
    justifyContent: "center",
    alignItems: "center",
  },
  categoryInfo: {
    flex: 1,
    marginLeft: 12,
  },
  providerInfo: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  providerCount: {
    color: "#666",
    marginTop: 4,
  },
  serviceType: {
    color: "#666",
    marginTop: 4,
  },
  status: {
    fontWeight: "500",
  },
  statsRow: {
    flexDirection: "row",
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  stat: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },
  statText: {
    marginLeft: 4,
    color: "#666",
  },
});

export default ManageServicesScreen;
