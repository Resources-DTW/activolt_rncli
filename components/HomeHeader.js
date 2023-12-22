import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const HomeHeader = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-row items-center justify-between w-full">
      <Text
        style={{fontFamily: 'DMSans-Medium'}}
        className="text-[20px] text-[#333333]">
        Dashboard
      </Text>
      <TouchableOpacity
        className="bg-[#00A66E] px-6 py-2 rounded-3xl items-center justify-center"
        onPress={() => navigation.navigate('Scan')}>
        <Text style={{fontFamily: 'DMSans-Regular'}} className="text-white">
          Disconnect
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeader;
