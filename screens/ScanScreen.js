import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import LottieView from 'lottie-react-native';
import {Path, Svg} from 'react-native-svg';

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
                  <View className="bg-[#00A66E] px-3 py-2 rounded-lg mr-3">
                    <Svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="24"
                      viewBox="0 0 15 24"
                      fill="none">
                      <Path
                        d="M7.37499 23.635V13.51L0.999991 19.885L0.11499 19L7.11499 12L0.11499 4.99999L0.999991 4.11499L7.37499 10.49V0.36499H7.99999L14.26 6.62499L8.88499 12L14.26 17.375L7.99999 23.635H7.37499ZM8.62499 10.49L12.49 6.62499L8.62499 2.77499V10.49ZM8.62499 21.2262L12.49 17.375L8.62499 13.51V21.2262Z"
                        fill="white"
                      />
                    </Svg>
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
