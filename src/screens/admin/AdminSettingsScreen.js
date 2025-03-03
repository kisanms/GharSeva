import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const AdminSettingsScreen = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    emailAlerts: true,
    maintenance: false,
    autoApproval: false,
  });

  const settingsGroups = {
    general: [
      {
        id: "notifications",
        title: "Push Notifications",
        description: "Receive notifications for new registrations and reports",
        icon: "notifications-outline",
      },
      {
        id: "emailAlerts",
        title: "Email Alerts",
        description: "Receive important updates via email",
        icon: "mail-outline",
      },
    ],
    system: [
      {
        id: "maintenance",
        title: "Maintenance Mode",
        description: "Temporarily disable user access",
        icon: "construct-outline",
      },
      {
        id: "autoApproval",
        title: "Auto Approval",
        description: "Automatically approve new service providers",
        icon: "checkmark-circle-outline",
      },
    ],
  };

  const handleToggle = (settingId) => {
    setSettings((prev) => ({
      ...prev,
      [settingId]: !prev[settingId],
    }));
  };

  const renderSettingItem = (item) => (
    <View key={item.id} style={styles.settingItem}>
      <View style={styles.settingInfo}>
        <View style={styles.settingHeader}>
          <Ionicons name={item.icon} size={24} color="#666" />
          <Text style={styles.settingTitle}>{item.title}</Text>
        </View>
        <Text style={styles.settingDescription}>{item.description}</Text>
      </View>
      <Switch
        value={settings[item.id]}
        onValueChange={() => handleToggle(item.id)}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={settings[item.id] ? "#007AFF" : "#f4f3f4"}
      />
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>General Settings</Text>
        <View style={styles.settingsGroup}>
          {settingsGroups.general.map(renderSettingItem)}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>System Settings</Text>
        <View style={styles.settingsGroup}>
          {settingsGroups.system.map(renderSettingItem)}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Support</Text>
        <TouchableOpacity style={styles.supportItem}>
          <View style={styles.supportItemContent}>
            <Ionicons name="help-circle-outline" size={24} color="#666" />
            <Text style={styles.supportItemText}>Help Center</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.supportItem}>
          <View style={styles.supportItemContent}>
            <Ionicons name="document-text-outline" size={24} color="#666" />
            <Text style={styles.supportItemText}>Documentation</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#666" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  settingsGroup: {
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  settingInfo: {
    flex: 1,
    marginRight: 10,
  },
  settingHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: "500",
    marginLeft: 10,
  },
  settingDescription: {
    fontSize: 14,
    color: "#666",
    marginLeft: 34,
  },
  supportItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  supportItemContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  supportItemText: {
    fontSize: 16,
    marginLeft: 10,
  },
});

export default AdminSettingsScreen;
