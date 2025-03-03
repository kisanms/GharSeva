import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// Import provider screens (we'll create these next)
import ProviderHomeScreen from "../screens/provider/ProviderHomeScreen";
import JobsScreen from "../screens/provider/JobsScreen";
import EarningsScreen from "../screens/provider/EarningsScreen";
import ProviderProfileScreen from "../screens/provider/ProviderProfileScreen";

const Tab = createBottomTabNavigator();

const ProviderNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Jobs") {
            iconName = focused ? "briefcase" : "briefcase-outline";
          } else if (route.name === "Earnings") {
            iconName = focused ? "wallet" : "wallet-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={ProviderHomeScreen} />
      <Tab.Screen name="Jobs" component={JobsScreen} />
      <Tab.Screen name="Earnings" component={EarningsScreen} />
      <Tab.Screen name="Profile" component={ProviderProfileScreen} />
    </Tab.Navigator>
  );
};

export default ProviderNavigator;
