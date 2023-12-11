import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function Search() {
  return (
    <View
      className="my-4  flex items-center justify-center mx-auto bg-purple-200 rounded-md "
      style={{ width: wp(90), height: hp(6) }}
    >
      <TouchableOpacity>
        <View className="flex flex-row items-center justify-between">
          <Icon
            name="search"
            size={20}
            color="gray"
            style={{ marginRight: 10 }}
          />
          <Text className="text-gray-500 text-lg">
            Search for personalized poses
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
