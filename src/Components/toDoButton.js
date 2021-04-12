import React from 'react';
import {
  Text,
  View,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import imagePath from '../constant/imagePath';

function ToDoButton(props) {
  let {data} = props;
  return (
    <>
      <View style={{flexDirection: 'row', padding: 8}}>
        <TouchableOpacity>
          <Image
            source={imagePath.edit}
            style={{
              height: 25,
              width: 25,

              marginLeft: 'auto',
              marginRight: 10,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={data}>
          <Image
            source={imagePath.delete}
            style={{
              height: 25,
              width: 25,
              marginLeft: 10,
              marginRight: 10,
            }}
          />
        </TouchableOpacity>
      </View>
    </>
  );
}
export default ToDoButton;
