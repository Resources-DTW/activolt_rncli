import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import LottieView from 'lottie-react-native';
// import { Feather } from "@expo/vector-icons";

const devices = [
  {
    name: 'd1001',
    value: '3:17:223',
  },
  {
    name: 'd1002',
    value: '0:12:123',
  },
  {
    name: 'd1003',
    value: '2:09:667',
  },
];

// const isAndroid = Platform.OS === 'android';

const ScanScreen = ({navigation}) => {
  const [foundDevice, setFoundDevice] = useState(false);
  const [scannedDevice, setScannedDevice] = useState([]);
  const [pair, setPair] = useState(false);

  return (
    <SafeAreaView className="items-center justify-center flex-1 px-[7%] py-5 bg-white">
      <View className="absolute top-[10%]">
        <Text
          style={{fontFamily: 'DMSans-Medium'}}
          className="capitalize text-[20px] text-center text-[#333333]">
          Find your Bluetooth devices
        </Text>
      </View>
      <View className="flex-1 items-center justify-center">
        {/* <Text>Ble Scanner</Text> */}
        <LottieView
          className="h-[350px] w-[350px] mt-[70px]"
          source={require('../assets/sanner.json')}
          autoPlay
          loop
        />
      </View>
      {!foundDevice ? (
        <>
          {devices.map((item, index) => (
            <View
              key={index}
              className="w-[100%] h-[60px] rounded-xl bg-white my-1 justify-center px-4 shadow-md shadow-black">
              <View className="flex-row justify-between items-center">
                <View className="items-center justify-center flex-row">
                  <View className="bg-[#00A66E] p-3 rounded-lg mr-3">
                    {/* <Feather name="bluetooth" size={17} color="white" /> */}
                  </View>
                  <View>
                    <Text
                      style={{fontFamily: 'DMSans-Medium'}}
                      className="text-[#222222] text-[16px] capitalize">
                      {item.name}
                    </Text>
                    <Text
                      style={{fontFamily: 'DMSans-Regular'}}
                      className="text-[12px] text-[#555555]">
                      {item.value}
                    </Text>
                  </View>
                </View>
                {pair === true ? (
                  <TouchableOpacity
                    onPress={() => {}}
                    className="bg-[#E7FFF7] px-7 py-1 rounded-xl">
                    <Text
                      style={{fontFamily: 'DMSans-Regular'}}
                      className="text-[#CACACA]">
                      Unpair
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                    className="bg-[#00A66E] px-7 py-1 rounded-xl">
                    <Text
                      style={{fontFamily: 'DMSans-Regular'}}
                      className="text-white">
                      Pair
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          ))}
        </>
      ) : (
        <TouchableOpacity
          onPress={() => {}}
          className="bg-[#00A66E] px-8 py-3 rounded-3xl absolute bottom-10">
          <Text style={{fontFamily: 'DMSans-Regular'}} className="text-white">
            Scan Now
          </Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

export default ScanScreen;
