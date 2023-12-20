import {
  View,
  Text,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import LoginBG from '../assets/loginbg.png';
import LogoW from '../assets/logow.png';
import {TextInput} from 'react-native-paper';
import {Path, Svg} from 'react-native-svg';

const LoginScreen = ({navigation}) => {
  const [serialNumber, setSerialNumber] = useState('');

  return (
    <KeyboardAvoidingView
      behavior="height"
      className="flex-1 items-center justify-center">
      <Image
        source={LoginBG}
        resizeMode="contain"
        className="absolute top-[-25%] h-[90%] w-[100%]"
      />
      <Image
        source={LogoW}
        resizeMode="contain"
        className="absolute top-[10%] h-[80px] w-[249px]"
      />
      <View className="w-[100%] absolute top-[50%] pl-8 pr-8 mt-10">
        <TextInput
          mode="outlined"
          // keyboardType="number-pad"
          // maxLength={6}
          label="Serial Number"
          className="w-[100%] bg-transparent"
          outlineColor="#00A66E"
          activeOutlineColor="#00A66E"
          value={serialNumber}
          onChangeText={text => setSerialNumber(text)}
          textColor="#00A66E"
          outlineStyle={{borderRadius: 30}}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('Scan')}
          className="w-[100%] bg-[#00A66E] p-4 rounded-3xl mt-5 text-center items-center justify-center flex-row">
          <Text
            style={{fontFamily: 'DMSans-Regular'}}
            className="text-white text-[16px] pr-1">
            Pair
          </Text>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="20"
            viewBox="0 0 13 20"
            fill="none">
            <Path
              d="M6.5 19.308V11.208L1.4 16.308L0.692001 15.6L6.292 9.99999L0.692001 4.39999L1.4 3.69199L6.5 8.79199V0.691986H7L12.008 5.69999L7.708 9.99999L12.008 14.3L7 19.308H6.5ZM7.5 8.79199L10.592 5.69999L7.5 2.61999V8.79199ZM7.5 17.381L10.592 14.3L7.5 11.208V17.381Z"
              fill="white"
              stroke="white"
              stroke-width="0.5"
            />
          </Svg>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
