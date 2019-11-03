import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions
} from "react-native";

import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base'
var { width } = Dimensions.get('window');
class Dailyissue extends Component {

    render() {
        return (
                <View style={styles.container}>
                    <Thumbnail
                        style={styles.thumbnail}
                        source={require('../../../assets/me.jpg')} />
                    <View style={styles.text}>
                        <Text><Text style={{fontWeight: '600'}}>짱구</Text>님이 회원님의 댓글을 좋아합니다. 하하하하하</Text>
                    </View>
                    <Image
                        style={styles.userPic}
                         source={{
                             uri:
                        'https://scontent-icn1-1.xx.fbcdn.net/v/t1.0-9/12107079_423456264518845_8385706831946247836_n.jpg?_nc_cat=103&_nc_eui2=AeGmtFvWI6OPAr5u7F2ZD6b181xkTaAb3q2lciuwoRfB9GTYzjzi4uLu_kV4iL-Eb3pjBJdOnbwM2yINdcSUE2n_5F68Y_RcCmiyAlu5XYu_kw&_nc_ht=scontent-icn1-1.xx&oh=4da877754a9d4e0afbf37f25c924acfc&oe=5D5E3F5E'
                        }}/>
                </View>
        );
    }
}
export default Dailyissue;

const styles = StyleSheet.create({
    container: {
        margin:10,
        flexDirection: 'row'
    },
    thumbnail: {
        width:60,
        height:60
    },
    text: {
        marginTop: 12,
        width:width-140,
        textAlign: 'center',
        marginLeft:10
    },
    userPic:{
        height:50,
        width:50,
    },
});