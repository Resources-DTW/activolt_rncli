import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import Tab from '../components/Tab';
import HomeHeader from '../components/HomeHeader';
import DeviceInfo from '../components/DeviceInfo';
import DeviceSoc from '../components/DeviceSoc';
import DeviceWidgets from '../components/DeviceWidgets';
import CellTemp from '../components/CellTemp';
// import BleManager from 'react-native-ble-plx';

const soc = 55;
// const yourDeviceId = 'AKT_BMS_V1P1';
// const yourServiceUUID = '';
// const yourCharacteristicUUID = '';

const HomeScreen = () => {
  // const [receivedData, setReceivedData] = useState([]);

  // useEffect(() => {
  //   const subscription = BleManager.onCharacteristicValueChanged(
  //     yourDeviceId, // Replace with your ESP32's device ID
  //     yourServiceUUID, // Replace with your service UUID
  //     yourCharacteristicUUID, // Replace with your characteristic UUID
  //     (data) => {
  //       // Handle the received data
  //       setReceivedData((prevData) => [...prevData, data]);
  //     },
  //   );
  //   // Connect to your Bluetooth device
  //   BleManager.connect(yourDeviceId)
  //     .then(() => {
  //       console.log('Connected to the device');
  //     })
  //     .catch((error) => {
  //       console.error('Error connecting to the device', error);
  //     });

  //   // Return cleanup function
  //   return () => {
  //     subscription.remove();
  //     BleManager.disconnect(yourDeviceId);
  //   };
  // }, []);

  return (
    <View className="flex-1 items-center justify-center px-5 bg-[#F8F8F8]">
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="py-8 mb-7 w-full flex-1">
        <HomeHeader />
        {/* {receivedData.map((data, index) => (
          <Text key={index}>{data}</Text>
        ))} */}
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
