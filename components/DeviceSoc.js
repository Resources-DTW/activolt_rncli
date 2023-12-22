import {View, Text, ProgressBarAndroid} from 'react-native';
import React from 'react';

const DeviceSoc = ({soc}) => {
  return (
    <View className="py-3">
      <View className="bg-white rounded-[10px] py-5 px-4 w-full">
        <Text
          style={{fontFamily: 'DMSans-Medium'}}
          className="text-[18px] text-[#222222]">
          SOC (%)
        </Text>
        <ProgressBarAndroid
          styleAttr="Horizontal"
          color="#00A66E"
          indeterminate={false}
          progress={soc / 100}
          style={{height: 30}}
        />
        <View className="flex-row items-center justify-between w-full">
          <Text className="text-[#555555] text-[12px]">0%</Text>
          <Text className="text-[#555555] text-[12px]">{soc}%</Text>
          <Text className="text-[#555555] text-[12px]">100%</Text>
        </View>
      </View>
    </View>
  );
};

export default DeviceSoc;
