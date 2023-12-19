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
        className="absolute top-[15%] h-[68px] w-[249px]"
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
          <Text style={{fontFamily: 'DMSans-Regular'}} className="text-white">
            Pair&nbsp;
          </Text>
          {/* <FaBluetoothB style={{height: 17, width: 17, color: 'white'}} /> */}

          {/* <Feather name="bluetooth" size={17} color="white" /> */}
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
