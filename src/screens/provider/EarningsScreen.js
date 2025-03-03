import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const EarningsScreen = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("week");

  const earnings = {
    total: "₹12,500",
    week: "₹2,500",
    month: "₹8,500",
    pending: "₹1,500",
  };

  const transactions = [
    {
      id: "1",
      customer: "Alice Brown",
      service: "Plumbing",
      amount: "₹500",
      date: "20 Feb 2024",
      status: "Completed",
    },
    {
      id: "2",
      customer: "Bob Wilson",
      service: "Plumbing",
      amount: "₹750",
      date: "19 Feb 2024",
      status: "Pending",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.earningsCard}>
        <Text style={styles.totalEarningsLabel}>Total Earnings</Text>
        <Text style={styles.totalEarningsValue}>{earnings.total}</Text>

        <View style={styles.periodSelector}>
          <TouchableOpacity
            style={[
              styles.periodButton,
              selectedPeriod === "week" && styles.selectedPeriod,
            ]}
            onPress={() => setSelectedPeriod("week")}
          >
            <Text
              style={[
                styles.periodText,
                selectedPeriod === "week" && styles.selectedPeriodText,
              ]}
            >
              This Week
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.periodButton,
              selectedPeriod === "month" && styles.selectedPeriod,
            ]}
            onPress={() => setSelectedPeriod("month")}
          >
            <Text
              style={[
                styles.periodText,
                selectedPeriod === "month" && styles.selectedPeriodText,
              ]}
            >
              This Month
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>{earnings.week}</Text>
          <Text style={styles.statLabel}>This Week</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>{earnings.month}</Text>
          <Text style={styles.statLabel}>This Month</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>{earnings.pending}</Text>
          <Text style={styles.statLabel}>Pending</Text>
        </View>
      </View>

      <View style={styles.transactionsContainer}>
        <Text style={styles.sectionTitle}>Recent Transactions</Text>
        {transactions.map((transaction) => (
          <View key={transaction.id} style={styles.transactionCard}>
            <View style={styles.transactionHeader}>
              <View>
                <Text style={styles.customerName}>{transaction.customer}</Text>
                <Text style={styles.serviceType}>{transaction.service}</Text>
              </View>
              <Text style={styles.amount}>{transaction.amount}</Text>
            </View>
            <View style={styles.transactionFooter}>
              <Text style={styles.date}>{transaction.date}</Text>
              <Text
                style={[
                  styles.status,
                  {
                    color:
                      transaction.status === "Completed" ? "green" : "orange",
                  },
                ]}
              >
                {transaction.status}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  earningsCard: {
    backgroundColor: "#007AFF",
    padding: 20,
  },
  totalEarningsLabel: {
    color: "#fff",
    fontSize: 16,
  },
  totalEarningsValue: {
    color: "#fff",
    fontSize: 36,
    fontWeight: "bold",
    marginVertical: 10,
  },
  periodSelector: {
    flexDirection: "row",
    marginTop: 10,
  },
  periodButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 10,
  },
  selectedPeriod: {
    backgroundColor: "#fff",
  },
  periodText: {
    color: "#fff",
  },
  selectedPeriodText: {
    color: "#007AFF",
  },
  statsContainer: {
    flexDirection: "row",
    padding: 20,
    justifyContent: "space-between",
  },
  statCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    width: "30%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#007AFF",
  },
  statLabel: {
    fontSize: 12,
    color: "#666",
    marginTop: 5,
  },
  transactionsContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  transactionCard: {
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
  transactionHeader: {
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
  amount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#007AFF",
  },
  transactionFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  date: {
    color: "#666",
  },
  status: {
    fontWeight: "500",
  },
});

export default EarningsScreen;
