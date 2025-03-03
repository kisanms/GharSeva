import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native";

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");

  const handleResetPassword = () => {
    // Will implement password reset logic later
    console.log("Reset password for:", email);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reset Password</Text>
      <Text style={styles.description}>
        Enter your email address and we'll send you instructions to reset your
        password.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Button title="Send Reset Link" onPress={handleResetPassword} />

      <Text
        style={styles.backToLogin}
        onPress={() => navigation.navigate("Login")}
      >
        Back to Login
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  description: {
    textAlign: "center",
    marginBottom: 20,
    color: "#666",
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  backToLogin: {
    textAlign: "center",
    marginTop: 20,
    color: "#007AFF",
    textDecorationLine: "underline",
  },
});

export default ForgotPasswordScreen;
