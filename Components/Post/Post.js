import React from 'react';
import { StyleSheet, Text, View,  Image, Dimensions, TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base'

class Post extends React.Component {
    constructor() {
      super()
      this.state = {
         username:'장현철 ',
         liked:false,
         screenWidth:Dimensions.get('window').width
      }
    }
    
    likeToggle(){
        this.setState({
            liked: !this.state.liked
        })
    }

    render(){
        const imageHeight = Math.floor(this.state.screenWidth * 1.1);
        const imageURL = 
         (this.props.item % 2 == 0 ?
         'https://scontent-icn1-1.xx.fbcdn.net/v/t1.0-9/22489715_715632411967894_3625961998820541537_n.jpg?_nc_cat=102&_nc_oc=AQm6LKcAwPLqpjfAcEmlweOnFJoKDAud38vUU75YbeqGfQcj_64y-T755cxonQ66Zd4&_nc_ht=scontent-icn1-1.xx&oh=0282f59669950c33d97b252096b60259&oe=5E61D425'
         : 'https://scontent-icn1-1.xx.fbcdn.net/v/t1.0-9/20032085_680884675442668_8399242751507264076_n.jpg?_nc_cat=109&_nc_oc=AQllvTuXiNaM-yur34r7oyk2J69aJm5CStvcpm8OgoYYNTUtjBTMHGUx3ldb_pNqs08&_nc_ht=scontent-icn1-1.xx&oh=9e2663f79cadc0c51bc4bbef243c40b5&oe=5E4ADF59'
         )
        '=s'+
        imageHeight+
        '-c';
        const heartIconColor=(this.state.liked) ? 'rgb(255,61,57)' : null;
        return(
            <View style={{flex: 1, width: 100 + '%'}}>
                <View style={styles.userBar}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image
                        style={styles.userPic}
                         source={{
                             uri:
                        'https://scontent-icn1-1.xx.fbcdn.net/v/t1.0-9/12143306_423456281185510_2155004531656631795_n.jpg?_nc_cat=103&_nc_oc=AQlBKiuU1ydaHb6T43U0p46ejCF8w1tgzcxt3k7_csP7qxIBhWCRdC8ODTR64vpqTaI&_nc_ht=scontent-icn1-1.xx&oh=cc0e08a48060dab18b2e739e1f8f2e14&oe=5E57948E'
                        }}/>
                        <Text style={{marginLeft: 10}}>장현철</Text>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <Text style={{fontSize: 28}}>...</Text>
                    </View>
                </View>
                <TouchableOpacity
                 activeOpacity={0.7}
                 onPress={()=>{this.likeToggle();}}>
                <Image
                 style={{width: this.state.screenWidth,height:400}}
                 source={{
                     uri:imageURL
                 }}/>
                </TouchableOpacity>
                <View style={{marginLeft:12, marginTop:12, marginBottom: 20}}>
                    <View style={[styles.iconBar]}>
                      <Ionicons style={styles.icon}  size={27} name={'ios-heart-empty'} />
                      <Ionicons style={styles.icon} size={27} name={'ios-chatboxes'} /> 
                      <Ionicons style={styles.icon} size={27} name={'md-paper-plane'} /> 
                    </View>
                    <View style={[styles.iconBar,{ height:35}]}>
                        <Text style={[styles.icon,{fontWeight: "500"}]}>좋아요 3000개</Text>
                    </View>
                    <Text>
                        <Text style={{ fontWeight: "800", marginRight:20 }}>{this.state.username}
                        </Text>
                        Ea do Lorem occaecat laborum do. Minim ullamco ipsum minim eiusmod dolore cupidatat magna exercitation amet proident qui. Est do irure magna dolor adipisicing do quis labore excepteur. Commodo veniam dolore cupidatat nulla consectetur do nostrud ea cupidatat ullamco labore. Consequat ullamco nulla ullamco minim.
                    </Text>
                </View>
            </View>
        )
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
    userBar: {
        width: 100+'%',
        height:50,
        backgroundColor:'rgb(255,255,255)',
        flexDirection: 'row',
        paddingHorizontal:10,
        justifyContent: 'space-between'
    },
    userPic:{
        height:40,
        width:40,
        borderRadius:20
    },
    iconBar:{
        width:100+'%',
        flexDirection:'row',
        alignItems:'center'
    },
    icon:{
        marginRight:10,
    },
})
export default Post;