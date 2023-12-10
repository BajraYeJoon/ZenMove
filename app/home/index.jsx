import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { heightPercentageToDP } from "react-native-responsive-screen";

export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-white flex space-y-3" edges={["top"]}>
      <StatusBar style="dark" />

      <View className="flex-row justify-between items-center mx-4">
        <View className="space-y-2">
          <Text
            style={{ fontSize: heightPercentageToDP(4.5) }}
            className="font-bold tracking-wider text-neutral-500"
          >
            Ready to
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
