import {View, Text} from 'react-native';
import React from 'react';
import {RadialSlider} from 'react-native-radial-slider';

const CellTemp = ({title, value, min, max}) => {
  return (
    <View className="mb-5">
      <View className="bg-white w-full py-5 rounded-[10px] px-4 items-center justify-center">
        <Text
          style={{fontFamily: 'DMSans-Medium'}}
          className="text-[18px] text-[#222222]">
          {title}
        </Text>
        <RadialSlider
          variant={'speedometer'}
          value={value}
          min={min}
          max={max}
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
  );
};

export default CellTemp;
