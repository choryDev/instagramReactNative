import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from "react-navigation-tabs"; 
import React, { Component } from "react";
import {Ionicons} from '@expo/vector-icons';
import homeTab from './AppTabNavigator/HomeTab'
import searchTab from './AppTabNavigator/SearchTab'
import addMediaTab from './AppTabNavigator/AddMediaTab'
import likesTab from './AppTabNavigator/LikesTab'
import profileTab from './AppTabNavigator/ProfileTab'
import tabBarItem from './common/TabBarItem'

  const HomeTab = tabBarItem(homeTab,'ios-home');
  const SearchTab = searchTab;
  const AddMediaTab =addMediaTab;
  const LikesTab = createSwitchNavigator({ likesTab },{
    navigationOptions: {
        tabBarIcon: ({tintColor})=>(
          <Ionicons style={{color:tintColor}} size={27} name={'ios-heart'} />
          )
          ,
          animationEnabled: true,
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
    });;
  const ProfileTab = profileTab ;

  export default createAppContainer(createBottomTabNavigator({
    HomeTab,
    SearchTab,
    AddMediaTab,
    LikesTab,
    ProfileTab
    }));