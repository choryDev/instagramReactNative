import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import { Feather , Ionicons} from '@expo/vector-icons';

class AddMediaTab extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor})=>(
      <Ionicons style={{color:tintColor}} size={27} name={'ios-add-circle'} />
      )
      ,animationEnabled: true,
        swipeEnabled: true,
        tabBarPosition: "bottom",
        tabBarOptions: {
            // style: {
            //     ...Platform.select({
            //         android: {
            //             backgroundColor: 'white'
            //         }
            //     })
            // },
            activeTintColor: '#000',
            inactiveTintColor: '#d1cece',
            showLabel: false,
            showIcon: true
        }
}

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
            title="AddMediaTab"
            onPress={() => this.props.navigation.navigate('routeNameTwo')}
          />
        </View>
      );
    }
  }

export default AddMediaTab