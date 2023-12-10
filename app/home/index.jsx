import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Header from "../../components/Header/Header";

export default function Home() {
  return (
    <SafeAreaView
      className="flex-1 bg-[#fcedf2] flex space-y-3"
      edges={["top"]}
    >
      <StatusBar style="dark" />
      <Header />
    </SafeAreaView>
  );
}
