import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import Animated, { FadeInDown } from "react-native-reanimated";
import { useRouter } from "expo-router";

export default function App() {
  const router = useRouter();

  return (
    <View className="flex-1 justify-end ">
      <StatusBar style="dark" />
      <Image
        source={require("../assets/images/screen.jpg")}
        className="absolute h-full w-full flex items-center justify-center"
      />

      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.5)"]}
        style={{ width: wp(100), height: hp(70) }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.7 }}
        className="flex justify-end pb-10 space-y-5"
      >
        <Animated.View
          entering={FadeInDown.delay(100).springify()}
          className="flex items-center"
        >
          <Text
            style={{ fontSize: hp(5) }}
            className="text-white font-bold tracking-wide "
          >
            Your Peaceful Path
          </Text>
          <Text
            style={{ fontSize: hp(10) }}
            className="text-[#c095e4] font-bold tracking-wide "
          >
            ZenMove
          </Text>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(100).springify()}>
          <TouchableOpacity
            onPress={() => router.push("/home")}
            style={{ height: hp(7), width: wp(80) }}
            className="bg-[#ffa0c5] flex mx-auto items-center justify-center rounded-3xl"
          >
            <Text
              style={{ fontSize: hp(3) }}
              className="text-white font-bold tracking-wider "
            >
              Explore Zen
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </LinearGradient>
    </View>
  );
}
