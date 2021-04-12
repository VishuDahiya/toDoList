import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Text,
  useColorScheme,
  View,
  Button,
  FlatList,
  Modal,
  TextInput,
} from 'react-native';

import store from './src/redux/store';
import Details from './src/Components/Detail';
import imagePath from './src/constant/imagePath';
import types from './src/redux/types';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      modalVisible: false,
    };
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  addDetail = () => {
    let {name, description} = this.state;
    store.dispatch({
      type: types.ADD,
      payload: {
        name: name,
        description: description,
      },
    });
    this.setState({modalVisible: false});
  };
  deleteDetail = index => {
    store.dispatch({
      type: types.DELETE,
      payload: {
        index: index,
      },
    });
  };
  onChange = key => {
    return value => {
      this.setState({
        [key]: value,
      });
    };
  };
  render() {
    let {dispatch, getState, subscribe} = store;
    let {Detail} = getState();
    subscribe(() => this.setState({}));
    return (
      <>
        <Details data={Detail} data1={this.deleteDetail} />
        <View style={{marginTop: 0}}>
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}>
            <View style={{marginTop: 22}}>
              <View>
                <TextInput
                  placeholder="Title of task"
                  multiline={true}
                  maxLength={20}
                  numberOfLines={1}
                  onChangeText={this.onChange('name')}
                />
                <TextInput
                  placeholder="Description about task"
                  maxLength={150}
                  multiline={true}
                  numberOfLines={4}
                  onChangeText={this.onChange('description')}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    marginHorizontal: 10,
                    marginTop: 50,
                  }}>
                  <Button
                    title="Submit"
                    style={{marginBottom: 10}}
                    onPress={() => this.addDetail()}
                  />

                  <Button
                    title="Close"
                    onPress={() => {
                      this.setModalVisible(!this.state.modalVisible);
                    }}
                  />
                </View>
              </View>
            </View>
          </Modal>
          <TouchableOpacity
            onPress={() => {
              this.setModalVisible(true);
            }}>
            <Text
              style={{
                backgroundColor: '#12B0E8',
                height: 50,
                textAlign: 'center',
                padding: 15,
                fontSize: 17,
                fontWeight: 'bold',
              }}>
              Add Task
            </Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}
