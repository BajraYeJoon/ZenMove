import { View, Text } from "react-native";
import React from "react";
import { Image } from "react-native";
import { heightPercentageToDP } from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Header() {
  return (
    <View className="flex-row justify-between items-center mx-4 mt-4">
      <View className="flex-col gap-2">
        <Image
          source={require("../../assets/images/logo.png")}
          className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
          alt="Bordered avatar"
        />
        <View className="space-y-2">
          <Text
            style={{ fontSize: heightPercentageToDP(2) }}
            className="font-bold tracking-wider text-neutral-500"
          >
            Hi, Good Morning
          </Text>
          <Text
            style={{ fontSize: heightPercentageToDP(4) }}
            className="font-bold tracking-wide text-[#c095e4]"
          >
            Sophia !
          </Text>
        </View>
      </View>
      <View>
        <Icon name="bell" size={heightPercentageToDP(4)} color="#c095e4" />
      </View>
    </View>
  );
}
