import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import LottieView from 'lottie-react-native';
import {Path, Svg} from 'react-native-svg';
import {BleManager} from 'react-native-ble-plx';

// const isAndroid = Platform.OS === 'android';

const SERVICE_UUID = '';
const Char_UUID = '';

const targetDevice = {
  name: 'AKT_BMS_V1P1',
  macAddress: '24:62:AB:FD:31:4E',
  type: 'Classic - BR/EDR',
  profiles: ['Serial Port(SPP)'],
  uuidList: [
    '00001101-0000-1000-8000-00805f9b34fb',
    '00000000-0000-1000-8000-00805f9b34fb',
    '00000000-0000-1000-8000-00805f9b34fb',
    '00000000-0000-0000-0000-000000000000',
    '00000000-0000-0000-0000-000000000000',
    '00000000-0000-0000-0000-000000000000',
  ],
};

const ScanScreen = ({navigation}) => {
  const [foundDevice, setFoundDevice] = useState(false);
  const [pair, setPair] = useState(false);
  const [devices, setDevices] = useState([]);
  // const [uniqueDeviceKeys, setUniqueDeviceKeys] = useState(new Set());
  const [connectionStatus, setConnectionStatus] = useState('Searching...');

  const manager = new BleManager();

  const scanForDevices = () => {
    manager.startDeviceScan(null, null, (error, device) => {
      if (error) {
        console.error('Error scanning:', error);
        setConnectionStatus('Error searching for device');
        return;
      }

      if (device.name === targetDevice.name) {
        manager.stopDeviceScan();
        setDevices(device);
        setConnectionStatus('Connecting...');
        connectToDevice(device);
      }
    });
  };

  console.log(devices);

  useEffect(() => {
    scanForDevices();

    return () => {
      manager.stopDeviceScan();
    };
  }, []);

  // useEffect(() => {
  //   const scanDevices = () => {
  //     manager.startDeviceScan(null, null, (error, scannedDevice) => {
  //       if (error) {
  //         console.error('Error scanning:', error);
  //         setConnectionStatus('Error searching for device');
  //         return;
  //       }
  //       if (scannedDevice) {
  //         const deviceName = scannedDevice.localName || scannedDevice.name;

  //         if (
  //           deviceName !== null &&
  //           !uniqueDeviceKeys.has(`${scannedDevice.id}-${deviceName}`)
  //         ) {
  //           setDevices((prevDevices) => [
  //             ...prevDevices,
  //             {id: scannedDevice.id, name: deviceName},
  //           ]);

  //           setUniqueDeviceKeys((prevKeys) =>
  //             new Set(prevKeys).add(`${scannedDevice.id}-${deviceName}`),
  //           );

  //           if (deviceName === targetDevice.name) {
  //             if (
  //               targetDevice.profiles.every((profile) =>
  //                 scannedDevice.serviceUUIDs.includes(profile),
  //               )
  //             ) {
  //               setFoundDevice(scannedDevice);
  //               manager.stopDeviceScan();
  //               setConnectionStatus('Connecting...');
  //             }
  //           }
  //         }
  //       }
  //     });
  //   };

  //   scanDevices();

  //   return () => {
  //     manager.stopDeviceScan();
  //   };
  // }, []);

  useEffect(() => {
    const subscription = manager.onDeviceDisconnected(
      targetDevice.macAddress,
      (error, device) => {
        if (error) {
          console.error('Disconnected with error:', error);
        }
        setConnectionStatus('Disconnected');
        console.log('Disconnected from device:', device.name);
      },
    );

    return () => {
      subscription.remove();
    };
  }, []);

  const connectToDevice = (device) => {
    device
      .connect()
      .then((device) => {
        console.log('Connected to device:', device.name);
        setConnectionStatus('Connected');
      })
      .catch((error) => {
        console.error('Error connecting to device:', error);
      });
  };

  const renderItem = ({item}) => (
    <View
      key={`${item.id}-${item.name}`}
      className="w-full h-[60px] rounded-xl bg-white my-1 justify-center px-3">
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
              {item.name && item.name.length > 14
                ? item.name.substring(0, 14) + '...'
                : item.name}
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
            <Text style={{fontFamily: 'DMSans-Regular'}} className="text-white">
              Pair
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );

  return (
    <SafeAreaView className="items-center justify-center flex-1 px-[7%] py-5 bg-[#F8F8F8] w-[100%]">
      <View className="absolute top-[10%]">
        <Text
          style={{fontFamily: 'DMSans-Medium'}}
          className="capitalize text-[20px] text-center text-[#333333]">
          Find your Bluetooth devices
        </Text>
      </View>
      <View className="flex-1 items-center justify-center mb-[20px]">
        <LottieView
          className="h-[350px] w-[350px] mt-[-70px]"
          source={require('../assets/sanner.json')}
          autoPlay
          loop
        />
        <Text style={{fontFamily: 'DMSans-Regular'}}>{connectionStatus}</Text>
      </View>
      {foundDevice ? (
        <FlatList
          data={devices}
          renderItem={renderItem}
          keyExtractor={(item, index) => `${item.id}-${item.name}-${index}`}
          showsVerticalScrollIndicator={false}
          style={{
            position: 'absolute',
            bottom: 10,
            width: '100%',
            height: 220,
            marginBottom: 10,
          }}
        />
      ) : (
        <TouchableOpacity
          onPress={() => setFoundDevice(true)}
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
