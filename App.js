import React from 'react';
import Navigator from './navigation/Navigator';
import {PermissionsAndroid} from 'react-native';

export default function App() {
  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATIONS,
        {
          title: 'Location permission for bluetooth scanning',
          message:
            'Grant location permission to allow the app to scan for Bluetooth devices',
          buttonNeutral: 'Ask Me Later',
          buttonPositive: 'OK',
          buttonNegative: 'Cancel',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Location permission for bluetooth scanning granted');
      } else {
        console.log('Location permission for bluetooth scanning denied');
      }
    } catch (error) {
      console.warn(error);
    }
  };

  requestLocationPermission();

  return <Navigator />;
}
