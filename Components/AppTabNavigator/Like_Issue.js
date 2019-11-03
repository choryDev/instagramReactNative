import React from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import {Container, Content, Thumbnail, Icon, Left, Right} from 'native-base'
import DailyItem from './Issue/Dailyissue'
import { PostFeed } from '../Post';
import { FontAwesome} from '@expo/vector-icons';
class Like_Issue extends React.Component {

    _renderThumbnail({ item }){
        return(
        <Thumbnail
            style={styles.thumbNail}
            source={require('../../assets/me.jpg')} />)
    }

    _returnKey(item){
        return item.toString();
    }

    render() {
      return (
        <Container style={styles.container}>
            <Content>
                <View style={styles.headView}>
                    <Text style={{ fontWeight: '400' }}>팔로우 요청</Text>
                    <View style={{ flexDirection: 'row', 'alignItems': 'center' }}>
                        <FontAwesome name="circle" style={{ fontSize: 14, marginRight: 5, color:'blue'}}/>
                        <Text style={{ fontWeight: '400' }}>13</Text>
                    </View>
                </View>
                <Text style={{ fontWeight: '600',margin:10, }}>오늘</Text>
             <DailyItem/>
             <DailyItem/>
             <DailyItem/>
            </Content>
        </Container>
      );
    }
  }
  const styles = StyleSheet.create({
    headView:{
        height:50,
        borderBottomColor:'#EAEAEA',
        borderTopColor:'white',
        borderRightColor:'white',
        borderLeftColor:'white',
        borderWidth:1.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10 },
    storyScroll:{
        alignItems: 'center',
        paddingStart: 5,
        paddingEnd: 5
    },
    thumbNail:{
        marginHorizontal: 5,
        borderColor: 'pink',
        borderWidth: 2 }
})
export default Like_Issue