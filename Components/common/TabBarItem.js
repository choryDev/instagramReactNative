import React from 'react';
import { createStackNavigator} from 'react-navigation-stack';
import {Ionicons} from '@expo/vector-icons';

const TabBarItem = (where,icon) =>
 createStackNavigator({ where },{
    navigationOptions: {
        tabBarIcon: ({tintColor})=>(
          <Ionicons style={{color:tintColor}} size={27} name={icon} />
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
      },
    });

export default TabBarItem;