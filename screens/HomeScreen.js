import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import Tab from '../components/Tab';
import HomeHeader from '../components/HomeHeader';
import DeviceInfo from '../components/DeviceInfo';
import DeviceSoc from '../components/DeviceSoc';
import DeviceWidgets from '../components/DeviceWidgets';
import CellTemp from '../components/CellTemp';

const soc = 55;

const HomeScreen = () => {
  return (
    <View className="flex-1 items-center justify-center px-5">
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="py-8 mb-7 w-full flex-1">
        <HomeHeader />
        <DeviceInfo />
        <DeviceSoc soc={soc} />
        <DeviceWidgets />
        <CellTemp title="Cell 2 Temperature" value={16} min={0} max={32} />
        <CellTemp title="Cell 3 Temperature" value={14} min={0} max={32} />
        <Tab />
        <View className="mb-[50px] mt-5 flex-row w-full items-center justify-between">
          <TouchableOpacity
            className="bg-[#00A66E] rounded-[150px] py-3 px-6"
            onPress={() => {}}>
            <Text
              style={{fontFamily: 'DMSans-Medium'}}
              className="text-[16px] text-white">
              Live Update
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="rounded-[150px] border-[1px] border-[#555555] py-[10px] px-5"
            onPress={() => {}}>
            <Text
              style={{fontFamily: 'DMSans-Regular'}}
              className="text-[16px] text-[#555555]">
              Modify Settings
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
