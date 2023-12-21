import {View, Text, TouchableOpacity, useWindowDimensions} from 'react-native';
import React, {useState} from 'react';

const Tab = () => {
  const [selected, setSelected] = useState([0]);

  return (
    <View className="flex-1 items-center justify-center my-5">
      <View className="flex-row items-center justify-between w-full">
        <TouchableOpacity
          style={
            selected === 0
              ? {
                  borderBottomColor: '#00A66E',
                  borderBottomWidth: 3,
                  paddingBottom: 7,
                }
              : {border: 'none'}
          }
          onPress={() => setSelected(0)}>
          <Text>Discharge Enabled</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            selected === 1
              ? {
                  borderBottomColor: '#00A66E',
                  borderBottomWidth: 3,
                  paddingBottom: 7,
                }
              : {border: 'none'}
          }
          onPress={() => setSelected(1)}>
          <Text>Charge Enabled</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            selected === 2
              ? {
                  borderBottomColor: '#00A66E',
                  borderBottomWidth: 3,
                  paddingBottom: 7,
                }
              : {border: 'none'}
          }
          onPress={() => setSelected(2)}>
          <Text>Device Balanced</Text>
        </TouchableOpacity>
      </View>
      {selected === 0 && (
        <View className="my-3">
          <View className="bg-white w-full h-[42px] rounded-[10px] items-center justify-between px-4 my-1 flex-row">
            <Text
              style={{fontFamily: 'DMSans-Medium'}}
              className="text-[14px] text-[#222222]">
              Cell 1 (V)
            </Text>
            <Text
              style={{fontFamily: 'DMSans-Regular'}}
              className="text-[12px] text-[#606060]">
              2V
            </Text>
          </View>
          <View className="bg-white w-full h-[42px] rounded-[10px] items-center justify-between px-4 my-1 flex-row">
            <Text
              style={{fontFamily: 'DMSans-Medium'}}
              className="text-[14px] text-[#222222]">
              Cell 2 (V)
            </Text>
            <Text
              style={{fontFamily: 'DMSans-Regular'}}
              className="text-[12px] text-[#606060]">
              3V
            </Text>
          </View>
          <View className="bg-white w-full h-[42px] rounded-[10px] items-center justify-between px-4 my-1 flex-row">
            <Text
              style={{fontFamily: 'DMSans-Medium'}}
              className="text-[14px] text-[#222222]">
              Cell 3 (V)
            </Text>
            <Text
              style={{fontFamily: 'DMSans-Regular'}}
              className="text-[12px] text-[#606060]">
              3V
            </Text>
          </View>
          <View className="bg-white w-full h-[42px] rounded-[10px] items-center justify-between px-4 my-1 flex-row">
            <Text
              style={{fontFamily: 'DMSans-Medium'}}
              className="text-[14px] text-[#222222]">
              Cell 4 (V)
            </Text>
            <Text
              style={{fontFamily: 'DMSans-Regular'}}
              className="text-[12px] text-[#606060]">
              3V
            </Text>
          </View>
          <View className="bg-white w-full h-[42px] rounded-[10px] items-center justify-between px-4 my-1 flex-row">
            <Text
              style={{fontFamily: 'DMSans-Medium'}}
              className="text-[14px] text-[#222222]">
              Cell 5 (V)
            </Text>
            <Text
              style={{fontFamily: 'DMSans-Regular'}}
              className="text-[12px] text-[#606060]">
              3V
            </Text>
          </View>
          <View className="bg-white w-full h-[42px] rounded-[10px] items-center justify-between px-4 my-1 flex-row">
            <Text
              style={{fontFamily: 'DMSans-Medium'}}
              className="text-[14px] text-[#222222]">
              Cell 6 (V)
            </Text>
            <Text
              style={{fontFamily: 'DMSans-Regular'}}
              className="text-[12px] text-[#606060]">
              3V
            </Text>
          </View>
          <View className="bg-white w-full h-[42px] rounded-[10px] items-center justify-between px-4 my-1 flex-row">
            <Text
              style={{fontFamily: 'DMSans-Medium'}}
              className="text-[14px] text-[#222222]">
              Cell 7 (V)
            </Text>
            <Text
              style={{fontFamily: 'DMSans-Regular'}}
              className="text-[12px] text-[#606060]">
              3V
            </Text>
          </View>
        </View>
      )}
      {selected === 1 && (
        <View className="my-3">
          <View className="bg-white w-full h-[42px] rounded-[10px] items-center justify-between px-4 my-1 flex-row">
            <Text
              style={{fontFamily: 'DMSans-Medium'}}
              className="text-[14px] text-[#222222]">
              Charge 1 (V)
            </Text>
            <Text
              style={{fontFamily: 'DMSans-Regular'}}
              className="text-[12px] text-[#606060]">
              2V
            </Text>
          </View>
          <View className="bg-white w-full h-[42px] rounded-[10px] items-center justify-between px-4 my-1 flex-row">
            <Text
              style={{fontFamily: 'DMSans-Medium'}}
              className="text-[14px] text-[#222222]">
              Charge 2 (V)
            </Text>
            <Text
              style={{fontFamily: 'DMSans-Regular'}}
              className="text-[12px] text-[#606060]">
              3V
            </Text>
          </View>
          <View className="bg-white w-full h-[42px] rounded-[10px] items-center justify-between px-4 my-1 flex-row">
            <Text
              style={{fontFamily: 'DMSans-Medium'}}
              className="text-[14px] text-[#222222]">
              Charge 3 (V)
            </Text>
            <Text
              style={{fontFamily: 'DMSans-Regular'}}
              className="text-[12px] text-[#606060]">
              3V
            </Text>
          </View>
          <View className="bg-white w-full h-[42px] rounded-[10px] items-center justify-between px-4 my-1 flex-row">
            <Text
              style={{fontFamily: 'DMSans-Medium'}}
              className="text-[14px] text-[#222222]">
              Charge 4 (V)
            </Text>
            <Text
              style={{fontFamily: 'DMSans-Regular'}}
              className="text-[12px] text-[#606060]">
              3V
            </Text>
          </View>
          <View className="bg-white w-full h-[42px] rounded-[10px] items-center justify-between px-4 my-1 flex-row">
            <Text
              style={{fontFamily: 'DMSans-Medium'}}
              className="text-[14px] text-[#222222]">
              Charge 5 (V)
            </Text>
            <Text
              style={{fontFamily: 'DMSans-Regular'}}
              className="text-[12px] text-[#606060]">
              3V
            </Text>
          </View>
          <View className="bg-white w-full h-[42px] rounded-[10px] items-center justify-between px-4 my-1 flex-row">
            <Text
              style={{fontFamily: 'DMSans-Medium'}}
              className="text-[14px] text-[#222222]">
              Charge 6 (V)
            </Text>
            <Text
              style={{fontFamily: 'DMSans-Regular'}}
              className="text-[12px] text-[#606060]">
              3V
            </Text>
          </View>
          <View className="bg-white w-full h-[42px] rounded-[10px] items-center justify-between px-4 my-1 flex-row">
            <Text
              style={{fontFamily: 'DMSans-Medium'}}
              className="text-[14px] text-[#222222]">
              Charge 7 (V)
            </Text>
            <Text
              style={{fontFamily: 'DMSans-Regular'}}
              className="text-[12px] text-[#606060]">
              3V
            </Text>
          </View>
        </View>
      )}
      {selected === 2 && (
        <View className="my-3">
          <View className="bg-white w-full h-[42px] rounded-[10px] items-center justify-between px-4 my-1 flex-row">
            <Text
              style={{fontFamily: 'DMSans-Medium'}}
              className="text-[14px] text-[#222222]">
              Balance 1 (V)
            </Text>
            <Text
              style={{fontFamily: 'DMSans-Regular'}}
              className="text-[12px] text-[#606060]">
              2V
            </Text>
          </View>
          <View className="bg-white w-full h-[42px] rounded-[10px] items-center justify-between px-4 my-1 flex-row">
            <Text
              style={{fontFamily: 'DMSans-Medium'}}
              className="text-[14px] text-[#222222]">
              Balance 2 (V)
            </Text>
            <Text
              style={{fontFamily: 'DMSans-Regular'}}
              className="text-[12px] text-[#606060]">
              3V
            </Text>
          </View>
          <View className="bg-white w-full h-[42px] rounded-[10px] items-center justify-between px-4 my-1 flex-row">
            <Text
              style={{fontFamily: 'DMSans-Medium'}}
              className="text-[14px] text-[#222222]">
              Balance 3 (V)
            </Text>
            <Text
              style={{fontFamily: 'DMSans-Regular'}}
              className="text-[12px] text-[#606060]">
              3V
            </Text>
          </View>
          <View className="bg-white w-full h-[42px] rounded-[10px] items-center justify-between px-4 my-1 flex-row">
            <Text
              style={{fontFamily: 'DMSans-Medium'}}
              className="text-[14px] text-[#222222]">
              Balance 4 (V)
            </Text>
            <Text
              style={{fontFamily: 'DMSans-Regular'}}
              className="text-[12px] text-[#606060]">
              3V
            </Text>
          </View>
          <View className="bg-white w-full h-[42px] rounded-[10px] items-center justify-between px-4 my-1 flex-row">
            <Text
              style={{fontFamily: 'DMSans-Medium'}}
              className="text-[14px] text-[#222222]">
              Balance 5 (V)
            </Text>
            <Text
              style={{fontFamily: 'DMSans-Regular'}}
              className="text-[12px] text-[#606060]">
              3V
            </Text>
          </View>
          <View className="bg-white w-full h-[42px] rounded-[10px] items-center justify-between px-4 my-1 flex-row">
            <Text
              style={{fontFamily: 'DMSans-Medium'}}
              className="text-[14px] text-[#222222]">
              Balance 6 (V)
            </Text>
            <Text
              style={{fontFamily: 'DMSans-Regular'}}
              className="text-[12px] text-[#606060]">
              3V
            </Text>
          </View>
          <View className="bg-white w-full h-[42px] rounded-[10px] items-center justify-between px-4 my-1 flex-row">
            <Text
              style={{fontFamily: 'DMSans-Medium'}}
              className="text-[14px] text-[#222222]">
              Balance 7 (V)
            </Text>
            <Text
              style={{fontFamily: 'DMSans-Regular'}}
              className="text-[12px] text-[#606060]">
              3V
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default Tab;
