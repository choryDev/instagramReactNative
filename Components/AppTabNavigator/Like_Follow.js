import React from 'react';
import {View, Text, Button, StyleSheet, StatusBar} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
class Like_Follow extends React.Component {
    render() {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            borderWidth: 25,
            borderColor: 'teal',
          }}>
          <Button
            title="LikesTab"
            onPress={() => this.props.navigation.navigate('routeNameTwo')}
          />
        </View>
      );
    }
  }

export default Like_Follow