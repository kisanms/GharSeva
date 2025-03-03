import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthNavigator from './AuthNavigator';
import CustomerNavigator from './CustomerNavigator';
import ProviderNavigator from './ProviderNavigator';
import AdminNavigator from './AdminNavigator';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Auth" component={AuthNavigator} />
      <Stack.Screen name="Customer" component={CustomerNavigator} />
      <Stack.Screen name="Provider" component={ProviderNavigator} />
      <Stack.Screen name="Admin" component={AdminNavigator} />
    </Stack.Navigator>
  );
};

export default AppNavigator;