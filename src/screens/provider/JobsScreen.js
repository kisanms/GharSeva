import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const JobsScreen = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  const jobs = {
    upcoming: [
      {
        id: "1",
        customer: "Alice Brown",
        service: "Plumbing",
        date: "2024-02-20",
        time: "10:00 AM",
        location: "Sector 12, Delhi",
        status: "Confirmed",
      },
      {
        id: "2",
        customer: "Bob Wilson",
        service: "Plumbing",
        date: "2024-02-21",
        time: "2:00 PM",
        location: "Sector 15, Delhi",
        status: "Pending",
      },
    ],
    completed: [
      {
        id: "3",
        customer: "Charlie Davis",
        service: "Plumbing",
        date: "2024-02-19",
        time: "11:00 AM",
        location: "Sector 18, Delhi",
        status: "Completed",
        rating: 5,
      },
    ],
  };

  const renderJobCard = ({ item }) => (
    <TouchableOpacity style={styles.jobCard}>
      <View style={styles.jobHeader}>
        <View>
          <Text style={styles.customerName}>{item.customer}</Text>
          <Text style={styles.serviceType}>{item.service}</Text>
        </View>
        <Text
          style={[
            styles.status,
            {
              color:
                item.status === "Completed"
                  ? "green"
                  : item.status === "Confirmed"
                  ? "#007AFF"
                  : "orange",
            },
          ]}
        >
          {item.status}
        </Text>
      </View>

      <View style={styles.jobDetails}>
        <View style={styles.detailRow}>
          <Ionicons name="calendar-outline" size={16} color="#666" />
          <Text style={styles.detailText}>{item.date}</Text>
        </View>
        <View style={styles.detailRow}>
          <Ionicons name="time-outline" size={16} color="#666" />
          <Text style={styles.detailText}>{item.time}</Text>
        </View>
        <View style={styles.detailRow}>
          <Ionicons name="location-outline" size={16} color="#666" />
          <Text style={styles.detailText}>{item.location}</Text>
        </View>
      </View>

      {item.rating && (
        <View style={styles.ratingContainer}>
          <Ionicons name="star" size={16} color="#FFD700" />
          <Text style={styles.ratingText}>{item.rating}</Text>
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "upcoming" && styles.activeTab]}
          onPress={() => setActiveTab("upcoming")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "upcoming" && styles.activeTabText,
            ]}
          >
            Upcoming
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === "completed" && styles.activeTab]}
          onPress={() => setActiveTab("completed")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "completed" && styles.activeTabText,
            ]}
          >
            Completed
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={jobs[activeTab]}
        renderItem={renderJobCard}
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
    padding: 15,
    backgroundColor: "#fff",
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
  listContainer: {
    padding: 15,
  },
  jobCard: {
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
  jobHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  customerName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  serviceType: {
    color: "#666",
    fontSize: 14,
  },
  status: {
    fontWeight: "500",
  },
  jobDetails: {
    gap: 5,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  detailText: {
    color: "#666",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  ratingText: {
    color: "#666",
    fontWeight: "500",
  },
});

export default JobsScreen;
