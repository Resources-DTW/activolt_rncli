import {View, Text} from 'react-native';
import React from 'react';

const DeviceInfo = () => {
  return (
    <View className="pt-10">
      <Text
        style={{fontFamily: 'DMSans-Medium'}}
        className="text-[18px] text-[#222222]">
        Device Information
      </Text>
      <View className="my-3">
        <View className="bg-white w-full h-[42px] rounded-[10px] items-center justify-between px-4 my-1 flex-row">
          <Text
            style={{fontFamily: 'DMSans-Medium'}}
            className="text-[14px] text-[#222222]">
            Device ID
          </Text>
          <Text
            style={{fontFamily: 'DMSans-Regular'}}
            className="text-[12px] text-[#606060]">
            ATS2315
          </Text>
        </View>
        <View className="bg-white w-full h-[42px] rounded-[10px] items-center justify-between px-4 my-1 flex-row">
          <Text
            style={{fontFamily: 'DMSans-Medium'}}
            className="text-[14px] text-[#222222]">
            Peak Current
          </Text>
          <Text
            style={{fontFamily: 'DMSans-Regular'}}
            className="text-[12px] text-[#606060]">
            0 (A)
          </Text>
        </View>
        <View className="bg-white w-full h-[42px] rounded-[10px] items-center justify-between px-4 my-1 flex-row">
          <Text
            style={{fontFamily: 'DMSans-Medium'}}
            className="text-[14px] text-[#222222]">
            Peak Voltage
          </Text>
          <Text
            style={{fontFamily: 'DMSans-Regular'}}
            className="text-[12px] text-[#606060]">
            0 (V)
          </Text>
        </View>
        <View className="bg-white w-full h-[42px] rounded-[10px] items-center justify-between px-4 my-1 flex-row">
          <Text
            style={{fontFamily: 'DMSans-Medium'}}
            className="text-[14px] text-[#222222]">
            Load Voltage
          </Text>
          <Text
            style={{fontFamily: 'DMSans-Regular'}}
            className="text-[12px] text-[#606060]">
            0 (V)
          </Text>
        </View>
        <View className="bg-white w-full h-[42px] rounded-[10px] items-center justify-between px-4 my-1 flex-row">
          <Text
            style={{fontFamily: 'DMSans-Medium'}}
            className="text-[14px] text-[#222222]">
            cell 1 Temperature
          </Text>
          <Text
            style={{fontFamily: 'DMSans-Regular'}}
            className="text-[12px] text-[#606060]">
            0 (°C)
          </Text>
        </View>
        <View className="bg-white w-full h-[42px] rounded-[10px] items-center justify-between px-4 my-1 flex-row">
          <Text
            style={{fontFamily: 'DMSans-Medium'}}
            className="text-[14px] text-[#222222]">
            MOSFET Temperature
          </Text>
          <Text
            style={{fontFamily: 'DMSans-Regular'}}
            className="text-[12px] text-[#606060]">
            0 (°C)
          </Text>
        </View>
        <View className="bg-white w-full h-[42px] rounded-[10px] items-center justify-between px-4 my-1 flex-row">
          <Text
            style={{fontFamily: 'DMSans-Medium'}}
            className="text-[14px] text-[#222222]">
            Peak Capacity
          </Text>
          <Text
            style={{fontFamily: 'DMSans-Regular'}}
            className="text-[12px] text-[#606060]">
            0 (Ah)
          </Text>
        </View>
        <View className="bg-white w-full h-[42px] rounded-[10px] items-center justify-between px-4 my-1 flex-row">
          <Text
            style={{fontFamily: 'DMSans-Medium'}}
            className="text-[14px] text-[#222222]">
            Series Cell
          </Text>
          <Text
            style={{fontFamily: 'DMSans-Regular'}}
            className="text-[12px] text-[#606060]">
            4
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DeviceInfo;
