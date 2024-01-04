import {Image, View} from 'react-native';
import SplashBG from '../assets/splashbg.png';
import Logo from '../assets/logo.png';

const SplashScreen = ({navigation}) => {
  setTimeout(() => {
    navigation.replace('Login');
  }, 2000);

  return (
    <View className="items-center justify-center flex-1 bg-[#F8F8F8]">
      <Image
        source={SplashBG}
        resizeMode="contain"
        className="absolute top-[-12%] h-[50%] w-[100%]"
      />
      <Image
        source={Logo}
        resizeMode="contain"
        className="h-[88px] w-[249px]"
      />
    </View>
  );
};

export default SplashScreen;
