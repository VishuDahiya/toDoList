import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  FlatList,
  useColorScheme,
  View,
} from 'react-native';

import imagePath from '../constant/imagePath';
import ToDoButton from './toDoButton';

export default function Details(props) {
  const {data, data1} = props;
  let _renderItem = ({item, index}) => {
    const {name, description} = item;
    return (
      <View
        style={{
          flexDirection: 'row',
          marginTop: 1,
          marginHorizontal: 2,
          borderWidth: 0.2,
          borderColor: 'grey',
          alignItems: 'center',
          paddingHorizontal: 10,
          justifyContent: 'space-between',
        }}>
        <View>
          <Text>{name}</Text>
          <Text>{description}</Text>
        </View>

        <View style={{padding: 15, marginLeft: 50}}>
          <ToDoButton data={() => data1(index)}></ToDoButton>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={_renderItem}
      keyExtractor={item => item.id}
    />
  );
}
