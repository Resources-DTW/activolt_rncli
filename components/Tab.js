import {View, useWindowDimensions} from 'react-native';
import React, {useState} from 'react';
import {TabBar, SceneMap, TabView} from 'react-native-tab-view';
import Discharge from './Discharge';
import Charge from './Charge';
import Device from './Device';

const renderScene = SceneMap({
  first: Discharge,
  second: Charge,
  third: Device,
});

const Tab = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'Discharge Enabled'},
    {key: 'second', title: 'Charge Enabled'},
    {key: 'third', title: 'Charge Enabled'},
  ]);

  return (
    <View className="mb-[60px]">
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        renderTabBar={props => (
          <TabBar
            {...props}
            indicatorStyle={{
              backgroundColor: '#00A66E',
              height: 3,
            }}
            style={{
              backgroundColor: '#fff',
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
            }}
            labelStyle={{
              fontFamily: 'DMSans_Regular',
              color: '#555555',
              textTransform: 'capitalize',
              fontSize: 14,
            }}
          />
        )}
      />
    </View>
  );
};

export default Tab;
