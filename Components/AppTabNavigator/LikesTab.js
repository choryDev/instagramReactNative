import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import Follow from './Like_Follow';
import Issue from './Like_Issue';

const LikesTab = createMaterialTopTabNavigator(
  {
    팔로워: { screen: Follow },
    내소식: { screen: Issue },
  },
  {
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#FFFFFF',
      inactiveTintColor: '#F8F8F8',
      style: {
        backgroundColor: '#FCFCFC',
        paddingTop: 20,
      },
      labelStyle: {
        color:'black',
        textAlign: 'center',
        fontSize:15,
        fontWeight:'350'
      },
      indicatorStyle: {
        borderBottomColor: 'black',
        borderBottomWidth: 3,
      },
    },
  }
);

export default LikesTab;