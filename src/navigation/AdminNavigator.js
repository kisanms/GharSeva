import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// Import admin screens (we'll create these next)
import AdminDashboardScreen from "../screens/admin/AdminDashboardScreen";
import ManageUsersScreen from "../screens/admin/ManageUsersScreen";
import ManageServicesScreen from "../screens/admin/ManageServicesScreen";
import AdminSettingsScreen from "../screens/admin/AdminSettingsScreen";

const Tab = createBottomTabNavigator();

const AdminNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Dashboard") {
            iconName = focused ? "grid" : "grid-outline";
          } else if (route.name === "Users") {
            iconName = focused ? "people" : "people-outline";
          } else if (route.name === "Services") {
            iconName = focused ? "list" : "list-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Dashboard" component={AdminDashboardScreen} />
      <Tab.Screen name="Users" component={ManageUsersScreen} />
      <Tab.Screen name="Services" component={ManageServicesScreen} />
      <Tab.Screen name="Settings" component={AdminSettingsScreen} />
    </Tab.Navigator>
  );
};

export default AdminNavigator;
