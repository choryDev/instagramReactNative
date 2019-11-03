import React from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import {Container, Content, Thumbnail, Icon} from 'native-base'
import { PostFeed } from '../Post';
import { Feather , Ionicons} from '@expo/vector-icons';
class HomeTab extends React.Component {

    static navigationOptions = {
        headerLeft:<Feather style={{paddingLeft: 10}} size={25} name={'camera'} />,
        title: '인스타그램',
        headerRight:<Ionicons style={{paddingRight: 10}} size={28} name={'md-paper-plane'} />,
    }

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
                <View style={{ height: 100 }}>
                        <View style={styles.storyTitle}>
                            <Text style={{ fontWeight: 'bold' }}>스토리</Text>
                            <View style={{ flexDirection: 'row', 'alignItems': 'center' }}>
                                <Icon name="md-play" style={{ fontSize: 14 }}></Icon>
                                <Text style={{ fontWeight: 'bold' }}>전체보기</Text>
                            </View>
                        </View>
                    <View style={{flex: 3}}>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.storyScroll}>
                            <FlatList
                                horizontal={true}
                                data={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]}
                                keyExtractor={this._returnKey}
                                renderItem={this._renderThumbnail}/>
                            </ScrollView>
                    </View>
                </View>
             <PostFeed/>
            </Content>
        </Container>
      );
    }
  }
  const styles = StyleSheet.create({
    tempNav:{
        width: 100+'%',
        height: 56, 
        marginTop: 20,
        backgroundColor: 'rgb(250,250,250)',
        borderBottomColor: 'rgb(234,234,234)',
        borderBottomWidth: StyleSheet.hairlineWidth,
        justifyContent: 'center',
        alignItems: 'center'
    },
    storyTitle:{
        marginTop:5,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 7 },
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
export default HomeTab