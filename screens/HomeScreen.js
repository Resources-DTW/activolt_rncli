import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ProgressBarAndroid,
} from 'react-native';
import React, {useState} from 'react';
import {Path, Rect, Svg} from 'react-native-svg';
import CircularProgress from 'react-native-circular-progress-indicator';
import {RadialSlider} from 'react-native-radial-slider';
import Tab from '../components/Tab';

const soc = 55;

const HomeScreen = ({navigation}) => {
  const [speed, setSpeed] = useState(16);

  return (
    <View className="flex-1 items-center justify-center px-5">
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="py-8 mb-7 flex-1">
        <View className="flex-row items-center justify-between w-[100%]">
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
        <View className="pt-10">
          <Text
            style={{fontFamily: 'DMSans-Medium'}}
            className="text-[18px] text-[#222222]">
            Device Information
          </Text>
          <View className="my-3">
            <View className="bg-white w-full h-[42px] rounded-[10px] items-center justify-between px-4 my-1 flex-row">
              <Text
                style={{fontFamily: 'DMSans-Medium'}}
                className="text-[14px] text-[#222222]">
                Device ID
              </Text>
              <Text
                style={{fontFamily: 'DMSans-Regular'}}
                className="text-[12px] text-[#606060]">
                ATS2315
              </Text>
            </View>
            <View className="bg-white w-full h-[42px] rounded-[10px] items-center justify-between px-4 my-1 flex-row">
              <Text
                style={{fontFamily: 'DMSans-Medium'}}
                className="text-[14px] text-[#222222]">
                Peak Current
              </Text>
              <Text
                style={{fontFamily: 'DMSans-Regular'}}
                className="text-[12px] text-[#606060]">
                0 (A)
              </Text>
            </View>
            <View className="bg-white w-full h-[42px] rounded-[10px] items-center justify-between px-4 my-1 flex-row">
              <Text
                style={{fontFamily: 'DMSans-Medium'}}
                className="text-[14px] text-[#222222]">
                Peak Voltage
              </Text>
              <Text
                style={{fontFamily: 'DMSans-Regular'}}
                className="text-[12px] text-[#606060]">
                0 (V)
              </Text>
            </View>
            <View className="bg-white w-full h-[42px] rounded-[10px] items-center justify-between px-4 my-1 flex-row">
              <Text
                style={{fontFamily: 'DMSans-Medium'}}
                className="text-[14px] text-[#222222]">
                Load Voltage
              </Text>
              <Text
                style={{fontFamily: 'DMSans-Regular'}}
                className="text-[12px] text-[#606060]">
                0 (V)
              </Text>
            </View>
            <View className="bg-white w-full h-[42px] rounded-[10px] items-center justify-between px-4 my-1 flex-row">
              <Text
                style={{fontFamily: 'DMSans-Medium'}}
                className="text-[14px] text-[#222222]">
                cell 1 Temperature
              </Text>
              <Text
                style={{fontFamily: 'DMSans-Regular'}}
                className="text-[12px] text-[#606060]">
                0 (°C)
              </Text>
            </View>
            <View className="bg-white w-full h-[42px] rounded-[10px] items-center justify-between px-4 my-1 flex-row">
              <Text
                style={{fontFamily: 'DMSans-Medium'}}
                className="text-[14px] text-[#222222]">
                MOSFET Temperature
              </Text>
              <Text
                style={{fontFamily: 'DMSans-Regular'}}
                className="text-[12px] text-[#606060]">
                0 (°C)
              </Text>
            </View>
            <View className="bg-white w-full h-[42px] rounded-[10px] items-center justify-between px-4 my-1 flex-row">
              <Text
                style={{fontFamily: 'DMSans-Medium'}}
                className="text-[14px] text-[#222222]">
                Peak Capacity
              </Text>
              <Text
                style={{fontFamily: 'DMSans-Regular'}}
                className="text-[12px] text-[#606060]">
                0 (Ah)
              </Text>
            </View>
            <View className="bg-white w-full h-[42px] rounded-[10px] items-center justify-between px-4 my-1 flex-row">
              <Text
                style={{fontFamily: 'DMSans-Medium'}}
                className="text-[14px] text-[#222222]">
                Series Cell
              </Text>
              <Text
                style={{fontFamily: 'DMSans-Regular'}}
                className="text-[12px] text-[#606060]">
                4
              </Text>
            </View>
          </View>
        </View>
        <View className="py-3">
          <View className="bg-white rounded-[10px] py-5 px-4 w-full">
            <Text
              style={{fontFamily: 'DMSans-Medium'}}
              className="text-[18px] text-[#222222]">
              SOC (%)
            </Text>
            <ProgressBarAndroid
              styleAttr="Horizontal"
              color="#00A66E"
              indeterminate={false}
              progress={soc / 100}
              style={{height: 30}}
            />
            <View className="flex-row items-center justify-between w-full">
              <Text className="text-[#555555] text-[12px]">0%</Text>
              <Text className="text-[#555555] text-[12px]">{soc}%</Text>
              <Text className="text-[#555555] text-[12px]">100%</Text>
            </View>
          </View>
        </View>
        <View className="py-3 flex-row items-center justify-between">
          <View className="items-center justify-center py-5 px-5 bg-white w-[48%] rounded-[10px]">
            <View className="flex-row items-center justify-between w-full">
              <Text
                style={{fontFamily: 'DMSans-Medium'}}
                className="text-[14px] text-[#222222]">
                Error Code
              </Text>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none">
                <Path
                  d="M14.4019 7.48999C14.8519 7.93849 15.5839 7.93849 16.0354 7.48999C16.4854 7.04299 16.4854 6.31699 16.0354 5.86849C15.818 5.65286 15.5242 5.53187 15.2179 5.53187C14.9117 5.53187 14.6179 5.65286 14.4004 5.86849C14.2932 5.97451 14.208 6.10076 14.1499 6.23993C14.0918 6.3791 14.0619 6.52842 14.0619 6.67924C14.0619 6.83005 14.0918 6.97937 14.1499 7.11854C14.208 7.25771 14.2947 7.38396 14.4019 7.48999ZM2.80394 9.99499C2.52357 10.2728 2.30102 10.6034 2.14914 10.9677C1.99726 11.332 1.91907 11.7228 1.91907 12.1175C1.91907 12.5122 1.99726 12.903 2.14914 13.2673C2.30102 13.6316 2.52357 13.9622 2.80394 14.24L7.76894 19.1735C8.07944 19.4825 8.44094 19.709 8.82794 19.856C8.44417 19.0677 8.18943 18.223 8.07344 17.354L3.87194 13.178C3.73176 13.0391 3.62048 12.8738 3.54454 12.6916C3.4686 12.5095 3.4295 12.3141 3.4295 12.1167C3.4295 11.9194 3.4686 11.724 3.54454 11.5418C3.62048 11.3597 3.73176 11.1944 3.87194 11.0555L11.0119 3.96049C11.2941 3.68054 11.675 3.5227 12.0724 3.52099L16.9684 3.49999C17.1675 3.49859 17.3649 3.53673 17.5492 3.61219C17.7334 3.68764 17.9008 3.79891 18.0417 3.93955C18.1827 4.08019 18.2943 4.24741 18.3701 4.4315C18.4459 4.61559 18.4844 4.8129 18.4834 5.01199L18.4624 8.29999C18.9874 8.44549 19.4899 8.64049 19.9669 8.88199L19.9969 5.02249C19.9985 4.62398 19.921 4.22912 19.7688 3.8608C19.6167 3.49249 19.3929 3.15806 19.1105 2.87689C18.828 2.59573 18.4926 2.37344 18.1236 2.22291C17.7546 2.07238 17.3594 1.99661 16.9609 1.99999L12.0649 2.02099C11.269 2.02363 10.506 2.33937 9.94094 2.89999L2.80394 9.99499ZM22.9999 16.25C22.9999 17.1364 22.8253 18.0142 22.4861 18.8331C22.1469 19.652 21.6497 20.3962 21.0229 21.023C20.3961 21.6498 19.652 22.147 18.8331 22.4862C18.0141 22.8254 17.1364 23 16.2499 23C15.3635 23 14.4858 22.8254 13.6668 22.4862C12.8479 22.147 12.1038 21.6498 11.477 21.023C10.8502 20.3962 10.353 19.652 10.0138 18.8331C9.67454 18.0142 9.49994 17.1364 9.49994 16.25C9.49994 14.4598 10.2111 12.7429 11.477 11.477C12.7428 10.2111 14.4597 9.49999 16.2499 9.49999C18.0402 9.49999 19.757 10.2111 21.0229 11.477C22.2888 12.7429 22.9999 14.4598 22.9999 16.25ZM16.2499 12.5C16.051 12.5 15.8603 12.579 15.7196 12.7197C15.579 12.8603 15.4999 13.0511 15.4999 13.25V16.25C15.4999 16.4489 15.579 16.6397 15.7196 16.7803C15.8603 16.921 16.051 17 16.2499 17C16.4489 17 16.6396 16.921 16.7803 16.7803C16.9209 16.6397 16.9999 16.4489 16.9999 16.25V13.25C16.9999 13.0511 16.9209 12.8603 16.7803 12.7197C16.6396 12.579 16.4489 12.5 16.2499 12.5ZM16.2499 20.1875C16.4986 20.1875 16.737 20.0887 16.9129 19.9129C17.0887 19.7371 17.1874 19.4986 17.1874 19.25C17.1874 19.0013 17.0887 18.7629 16.9129 18.5871C16.737 18.4113 16.4986 18.3125 16.2499 18.3125C16.0013 18.3125 15.7628 18.4113 15.587 18.5871C15.4112 18.7629 15.3124 19.0013 15.3124 19.25C15.3124 19.4986 15.4112 19.7371 15.587 19.9129C15.7628 20.0887 16.0013 20.1875 16.2499 20.1875Z"
                  fill="#00A66E"
                />
              </Svg>
            </View>
            <View className="pt-3">
              <CircularProgress
                value={40}
                radius={50}
                progressValueColor={'#222222'}
                activeStrokeColor={'#00A66E'}
                inActiveStrokeColor={'#D7EDE5'}
                inActiveStrokeOpacity={0.5}
                inActiveStrokeWidth={6}
                activeStrokeWidth={12}
              />
            </View>
          </View>
          <View className="py-5 px-5 items-center justify-center bg-white w-[48%] rounded-[10px]">
            <View className="flex-row items-center justify-between w-full">
              <Text
                style={{fontFamily: 'DMSans-Medium'}}
                className="text-[14px] text-[#222222]">
                Cell High (V)
              </Text>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none">
                <Rect
                  x="7.5"
                  y="6.75"
                  width="9"
                  height="14"
                  rx="1.5"
                  stroke="#00A66E"
                />
                <Rect
                  x="9"
                  y="8.25"
                  width="6"
                  height="11"
                  rx="0.8"
                  fill="#00A66E"
                />
                <Path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.29289 3.54289C9 3.83579 9 4.30719 9 5.25H15C15 4.30719 15 3.83579 14.7071 3.54289C14.4142 3.25 13.9428 3.25 13 3.25H11C10.0572 3.25 9.58579 3.25 9.29289 3.54289Z"
                  fill="#00A66E"
                />
              </Svg>
            </View>
            <View className="pt-3">
              <CircularProgress
                value={70}
                valueSuffix="V"
                radius={50}
                progressValueColor={'#222222'}
                activeStrokeColor={'#00A66E'}
                inActiveStrokeColor={'#D7EDE5'}
                inActiveStrokeOpacity={0.5}
                inActiveStrokeWidth={6}
                activeStrokeWidth={12}
              />
            </View>
          </View>
        </View>
        <View className="py-1 mb-4 flex-row items-center justify-between">
          <View className="py-5 px-5 items-center justify-center bg-white w-[48%] rounded-[10px]">
            <View className="flex-row items-center justify-between w-full">
              <Text
                style={{fontFamily: 'DMSans-Medium'}}
                className="text-[14px] text-[#222222]">
                Cell Low (V)
              </Text>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none">
                <Rect
                  x="7.5"
                  y="7"
                  width="9"
                  height="14"
                  rx="1.5"
                  stroke="#00A66E"
                />
                <Rect
                  x="9"
                  y="16.5"
                  width="6"
                  height="3"
                  rx="0.8"
                  fill="#00A66E"
                />
                <Path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.29289 3.79289C9 4.08579 9 4.55719 9 5.5H15C15 4.55719 15 4.08579 14.7071 3.79289C14.4142 3.5 13.9428 3.5 13 3.5H11C10.0572 3.5 9.58579 3.5 9.29289 3.79289Z"
                  fill="#00A66E"
                />
              </Svg>
            </View>
            <View className="pt-3">
              <CircularProgress
                value={10}
                valueSuffix="V"
                radius={50}
                progressValueColor={'#222222'}
                activeStrokeColor={'#00A66E'}
                inActiveStrokeColor={'#D7EDE5'}
                inActiveStrokeOpacity={0.5}
                inActiveStrokeWidth={6}
                activeStrokeWidth={12}
              />
            </View>
          </View>
          <View className="py-5 px-5 items-center justify-center bg-white w-[48%] rounded-[10px]">
            <View className="flex-row items-center justify-between w-full">
              <Text
                style={{fontFamily: 'DMSans-Medium'}}
                className="text-[14px] text-[#222222]">
                Cell Mismatch
              </Text>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none">
                <Path
                  d="M20.4854 14.5355V9.46448C20.4854 8.91219 20.0377 8.46448 19.4854 8.46448H4.51477C3.96248 8.46448 3.51477 8.91219 3.51477 9.46448V14.5355C3.51477 15.0878 3.96248 15.5355 4.51477 15.5355H19.4854C20.0377 15.5355 20.4854 15.0878 20.4854 14.5355Z"
                  stroke="#00A66E"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <Path
                  d="M12 8.5L10 11.5L13 12L9.5 15.5"
                  stroke="#00A66E"
                  stroke-linecap="round"
                />
              </Svg>
            </View>
            <View className="pt-3">
              <CircularProgress
                value={3}
                maxValue={10}
                radius={50}
                progressValueColor={'#222222'}
                activeStrokeColor={'#00A66E'}
                inActiveStrokeColor={'#D7EDE5'}
                inActiveStrokeOpacity={0.5}
                inActiveStrokeWidth={6}
                activeStrokeWidth={12}
              />
            </View>
          </View>
        </View>
        <View className="mb-5">
          <View className="bg-white w-full py-5 rounded-[10px] px-4 items-center justify-center">
            <Text
              style={{fontFamily: 'DMSans-Medium'}}
              className="text-[18px] text-[#222222]">
              Cell 2 Temperature
            </Text>
            <RadialSlider
              variant={'speedometer'}
              value={16}
              min={0}
              max={32}
              unit="°C"
              // value={speed}
              // onChange={setSpeed}
              isHideLines={true}
              needleColor="#00A66E"
              needleBackgroundColor="#00A66E"
              sliderTrackColor="#D7EDE5"
              sliderWidth={8}
              valueStyle={{color: '#222222'}}
              lineColor="#00A66E"
              linearGradient={[
                {offset: '0%', color: '#00A66E'},
                {offset: '100%', color: '#00A66E'},
              ]}
              style={{marginBottom: -30}}
            />
          </View>
        </View>
        <View className="mb-5">
          <View className="bg-white w-full py-5 rounded-[10px] px-4 items-center justify-center">
            <Text
              style={{fontFamily: 'DMSans-Medium'}}
              className="text-[18px] text-[#222222]">
              Cell 3 Temperature
            </Text>
            <RadialSlider
              variant={'speedometer'}
              min={0}
              max={32}
              unit="°C"
              value={14}
              // value={speed}
              // onChange={setSpeed}
              isHideLines={true}
              needleColor="#00A66E"
              needleBackgroundColor="#00A66E"
              sliderTrackColor="#D7EDE5"
              sliderWidth={8}
              valueStyle={{color: '#222222'}}
              lineColor="#00A66E"
              linearGradient={[
                {offset: '0%', color: '#00A66E'},
                {offset: '100%', color: '#00A66E'},
              ]}
              style={{marginBottom: -30}}
            />
          </View>
        </View>
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
