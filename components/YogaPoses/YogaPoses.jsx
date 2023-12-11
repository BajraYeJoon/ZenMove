import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import Animated, { FadeInDown } from "react-native-reanimated";
import { yogaBodyParts } from "../../constants";
import { useState, useEffect } from "react";

export default function YogaPoses() {
  const [yogaBodyParts, setYogaBodyParts] = useState();
  const router = useRouter();

  useEffect(() => {
    fetch("https://yoga-api-nzy4.onrender.com/v1/poses?level=beginner")
      .then((response) => response.json())
      .then((data) => setYogaBodyParts(data.poses)) // Change this number to the number of items you want

      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <View className="mx-4 mt-8">
      <Text style={{ fontSize: hp(3) }} className="font-bold text-purple-400">
        Yoga Excercises
      </Text>

      <FlatList
        data={yogaBodyParts}
        numColumns={2}
        keyExtractor={(item) => item.english_name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50, paddingTop: 6 }}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        renderItem={({ item, index }) => (
          <YogaCard router={router} index={index} item={item} />
        )}
      />
    </View>
  );
}

const YogaCard = ({ item, router, index }) => {
  return (
    <Animated.View
      entering={FadeInDown.duration(400)
        .delay(index * 200)
        .springify()}
    >
      <TouchableOpacity
        onPress={() => router.push({ pathname: "/exercises", params: item })}
        style={{ width: wp(44), height: wp(52) }}
        className="flex justify-end p-4 mb-4"
      >
        <Image
          source={{ uri: item.url_png }}
          resizeMode="cover"
          style={{ width: wp(44), height: wp(52) }}
          className="rounded-[35px] absolute object-contain"
        />
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.9)"]}
          style={{ width: wp(44), height: hp(15) }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          className="absolute bottom-0 rounded-b-[35px]"
        />

        <Text
          style={{ fontSize: hp(2.3) }}
          className="text-white font-semibold text-center tracking-wide"
        >
          {item?.name}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};
