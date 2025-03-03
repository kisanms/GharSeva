import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const ManageUsersScreen = () => {
  const dummyUsers = [
    { id: "1", name: "John Doe", type: "Customer", status: "Active" },
    { id: "2", name: "Jane Smith", type: "Provider", status: "Active" },
    { id: "3", name: "Mike Johnson", type: "Provider", status: "Pending" },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.userCard}>
      <Text style={styles.userName}>{item.name}</Text>
      <View style={styles.userInfo}>
        <Text style={styles.userType}>{item.type}</Text>
        <Text
          style={[
            styles.userStatus,
            { color: item.status === "Active" ? "green" : "orange" },
          ]}
        >
          {item.status}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manage Users</Text>
      <FlatList
        data={dummyUsers}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  userCard: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  userInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  userType: {
    color: "#666",
  },
  userStatus: {
    fontWeight: "500",
  },
});

export default ManageUsersScreen;
