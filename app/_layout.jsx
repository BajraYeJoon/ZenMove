import { Stack } from "expo-router";
import React from "react";
import { View, Text } from "react-native";

export default function _layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
