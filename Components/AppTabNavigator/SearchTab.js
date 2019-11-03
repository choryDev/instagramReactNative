import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    TextInput,
    FlatList
} from "react-native";
import {Ionicons} from '@expo/vector-icons';
import { Container, Content, Header, Right, Button } from 'native-base'
import {Tag, SearchTabPic} from '../dummy';
import searchTabPic from "../dummy/searchTabPic";
var { width } = Dimensions.get('window');

const extractKey = ({id}) => id

class SearchTab extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    static navigationOptions = {
      tabBarIcon: ({tintColor})=>(
        <Ionicons style={{color:tintColor}} size={27} name={'ios-person'} />
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
    renderSectionOne() {
        return searchTabPic.map((image, index) => {
            return (
                <View key={index} style={
                  [,
                   { marginBottom: 2 },
                   index%10===1 ?
                   { width: (width / 3 )*2,
                    height: (width / 3 )*2 }
                    :{ width: (width / 3 )},
                    { height: (width / 3 )},
                   ]}>
                    <Image style={styles.image}
                        source={image}>
                    </Image>
                </View>
            )
        })
    }

    renderSection() {
            return (
              <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                <View style={{flexWrap: 'wrap' }}>
                   <View style={
                  [
                   { marginBottom: 2 },
                    { width: (width / 3 )},
                    { height: (width / 3 )},
                   ]}>
                    <Image style={styles.image}
                        source={require('../../assets/1.jpg')}>
                    </Image>
                </View>
                <View style={
                  [
                   { marginBottom: 2 },
                   { width: (width / 3 ),
                    height: (width / 3 ) },
                   ]}>
                    <Image style={styles.image}
                        source={ require('../../assets/2.jpg')}>
                    </Image>
                </View>
                </View>
             <View style={
               [,
                { marginBottom: 2 },
                { width: (width / 3 )*2,
                 height: (width / 3 )*2 },
                ]}>
                 <Image style={styles.image}
                     source={ require('../../assets/3.jpg')}>
                 </Image>
             </View>
             {/* 3~9 */}
             <View style={
                  [
                   { marginBottom: 2 },
                    { width: (width / 3 )},
                    { height: (width / 3 )},
                   ]}>
                    <Image style={styles.image}
                        source={require('../../assets/1.jpg')}>
                    </Image>
                </View>
                <View style={
                  [
                   { marginBottom: 2 },
                    { width: (width / 3 )},
                    { height: (width / 3 )},
                   ]}>
                    <Image style={styles.image}
                        source={require('../../assets/2.jpg')}>
                    </Image>
                </View>
                <View style={
                  [
                   { marginBottom: 2 },
                    { width: (width / 3 )},
                    { height: (width / 3 )},
                   ]}>
                    <Image style={styles.image}
                        source={require('../../assets/3.jpg')}>
                    </Image>
                </View>
                <View style={
                  [
                   { marginBottom: 2 },
                    { width: (width / 3 )},
                    { height: (width / 3 )},
                   ]}>
                    <Image style={styles.image}
                        source={require('../../assets/1.jpg')}>
                    </Image>
                </View>
                <View style={
                  [
                   { marginBottom: 2 },
                    { width: (width / 3 )},
                    { height: (width / 3 )},
                   ]}>
                    <Image style={styles.image}
                        source={require('../../assets/2.jpg')}>
                    </Image>
                </View>
                <View style={
                  [
                   { marginBottom: 2 },
                    { width: (width / 3 )},
                    { height: (width / 3 )},
                   ]}>
                    <Image style={styles.image}
                        source={require('../../assets/3.jpg')}>
                    </Image>
                </View>
             </View>
            )
        }

    renderItem = ({item}) => {
      return (
        <Button style={styles.tag}><Text style={styles.tagText}>{item.text}</Text></Button>
      )
    }
    render() {
        return (
            <Container style={styles.container}>
                <Header style={{ paddingLeft: 10, paddingLeft: 10, marginTop: 15}}>
                    <TextInput
                      style={styles.headInput}
                      placeholder="검색"
                      underlineColorAndroid="transparent"
                      autoCorrect={false}/>
                    <Right>
                        <Ionicons name="md-qr-scanner" style={{ fontSize: 32 }} />
                    </Right>
                </Header>
                <Content>
                    <View >
                        <View style={{ flexDirection: 'row', borderTopWidth: 1, borderTopColor: '#eae5e5', padding:5 }}>
                        <FlatList
                          horizontal={true}
                          data={Tag}
                          renderItem={this.renderItem}
                          keyExtractor={extractKey}/>
                        </View>
                        {this.renderSection()}
                    </View>
                </Content>
            </Container >
        );
    }
}
export default SearchTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    postFont:{
        fontSize: 13,
        color: 'grey' 
    },
    tag:{
      borderColor:'grey',
      backgroundColor: 'white',
      borderWidth: 1.5,
      marginLeft: 5,
      paddingHorizontal:7,
      paddingVertical:3,
      justifyContent: 'center',
      height: 35 
    },
    tagText:{
      fontWeight:'500',
      fontSize: 15
    },
    headInput:{
      fontSize: 15,
      height: 40,
      width:width-55 ,
      backgroundColor: '#d1cece',
      marginBottom: 20,
      borderRadius: 4,
      padding:5
      },
    image:{
        flex: 1,
        alignSelf: 'stretch',
        width: undefined,
        height: undefined,
    }
});
