import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Header from "../../components/Header/Header";

import ImgCarousel from "../../components/Carousel/ImgCarousel";
import Search from "../../components/Search/Search";
import YogaPoses from "../../components/YogaPoses/YogaPoses";

export default function Home() {
  return (
    <SafeAreaView
      className="flex-1 bg-[#fcedf2] flex space-y-3"
      edges={["top"]}
    >
      <StatusBar style="dark" />
      <Header />
      <Search />

      <ImgCarousel />
      <YogaPoses />
    </SafeAreaView>
  );
}
