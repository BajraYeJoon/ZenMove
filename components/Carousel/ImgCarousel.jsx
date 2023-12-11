import { View, Text } from "react-native";
import React from "react";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";
import { sliderImages } from "../../constants";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FlatList } from "react-native";

export default function ImageSlider() {
  return (
    <View>
      <Carousel
        data={sliderImages}
        loop={true}
        autoplay={false}
        renderItem={ItemCard}
        hasParallaxImages={true}
        sliderWidth={wp(100)}
        firstItem={1}
        itemWidth={wp(100) - 60}
        slideStyle={{
          display: "flex",
          alignItems: "center",
          borderRadius: 30,
          marginTop: 20,
        }}
      />
    </View>
  );
}

const ItemCard = ({ item, index }, parallaxProps) => {
  return (
    <View style={{ width: wp(100) - 70, height: hp(25) }}>
      <ParallaxImage
        source={item}
        containerStyle={{ borderRadius: 30, flex: 1 }}
        style={{ resizeMode: "cover" }}
        parallaxFactor={0.2}
        {...parallaxProps}
      />
    </View>
  );
};
