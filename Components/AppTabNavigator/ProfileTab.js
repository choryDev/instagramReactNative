import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
} from "react-native";
import {Ionicons, AntDesign} from '@expo/vector-icons';
import { PostFeed } from '../Post';
import { Container, Content, Icon, Header, Left, Body, Right, Segment, Button } from 'native-base'
import EntypoIcon from 'react-native-vector-icons/Entypo';
var { height, width } = Dimensions.get('window');

var images = [
    require('../../assets/1.jpg'),
    require('../../assets/2.jpg'),
    require('../../assets/3.jpg')
]

class ProfileTab extends Component {
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

    constructor(props) {
        super(props)
        this.state = {
            activeIndex: 0
        }
    }

    segmentClicked(index) {
        this.setState({
            activeIndex: index
        })
    }
    checkActive = (index) => {
        if (this.state.activeIndex !== index) {
            return (
                { color: 'grey' }
            )
        }
        else {
            return (
                {}
            )
        }

    }

    renderSectionOne() {
        return images.map((image, index) => {
            return (
                <View key={index} style={[{ width: (width) / 3 }, { height: (width) / 3 }, { marginBottom: 2 }, index % 3 !== 0 ? { paddingLeft: 2 } : { paddingLeft: 0 }]}>
                    <Image style={{
                        flex: 1,
                        alignSelf: 'stretch',
                        width: undefined,
                        height: undefined,}}
                        source={image}>
                    </Image>
                </View>
            )
        })
    }

    renderSection() {
        if (this.state.activeIndex == 0) {
            return (
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>

                    {this.renderSectionOne()}
                </View>
            )
        }
        else if (this.state.activeIndex == 1) {
            return (
                <View>
                    <PostFeed/>
                </View>
            )
        }
    }

    render() {
        return (
            <Container style={styles.container}>
                <Header style={{ paddingLeft: 10, paddingLeft: 10 }}>
                    <Left>
                        <Icon name="md-person-add" />
                    </Left>
                    <Right>
                        <EntypoIcon name="back-in-time" style={{ fontSize: 32 }} />
                    </Right>
                </Header>
                <Content>
                    <View style={{ paddingTop: 10 }}>
                        {/** User Photo Stats**/}
                        <View style={{ flexDirection: 'row' }}>

                            {/**User photo takes 1/3rd of view horizontally **/}
                            <View
                                style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
                                <Image source={require('../../assets/me.jpg')}
                                    style={{ width: 75, height: 75, borderRadius: 37.5 }} />
                            </View>
                            {/**User Stats take 2/3rd of view horizontally **/}
                            <View style={{ flex: 3 }}>
                                {/** Stats **/}
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-around',
                                        alignItems: 'flex-end'
                                    }}>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text>20</Text>
                                        <Text style={styles.postFont}>포스트</Text>
                                    </View>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text>205</Text>
                                        <Text style={styles.postFont}>팔로워</Text>
                                    </View>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text>167</Text>
                                        <Text style={styles.postFont}>팔로잉</Text>
                                    </View>
                                </View>
                                {/**Edit profile and Settings Buttons **/}
                                <View style={{ flexDirection: 'row', alignItems: 'flex-start', paddingTop: 10 }}>
                                    <View
                                        style={{ flexDirection: 'row' }}>
                                        {/** Edit profile takes up 3/4th **/}
                                        <Button bordered dark
                                            style={{ flex: 3, marginLeft: 10, justifyContent: 'center', height: 30 }}><Text>프로필 수정하기</Text></Button>
                                        {/** Settings takes up  1/4th place **/}
                                        <Button bordered dark style={{
                                            flex: 1,
                                            height: 30,
                                            marginRight: 10, marginLeft: 5,
                                            justifyContent: 'center'
                                        }}>
                                            <Ionicons name="md-settings" size={13} style={{ color: 'black' }}></Ionicons></Button>
                                    </View>
                                </View>{/**End edit profile**/}
                            </View>
                        </View>
                        <View style={{ paddingBottom: 10 }}>
                            <View style={{ paddingHorizontal: 10 }}>
                                <Text style={{ fontWeight: 'bold',marginTop:3 }}>장현철</Text>
                                <Text>울산 | IT융합 | SW </Text>
                                <Text>https://chorydev.tistory.com/</Text>
                            </View>
                        </View>
                    </View>
                    <View >
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderTopWidth: 1, borderTopColor: '#eae5e5' }}>
                            <Button
                                onPress={() => this.segmentClicked(0)}
                                transparent
                                active={this.state.activeIndex == 0}>
                                <AntDesign name="table"
                                    style={[this.state.activeIndex == 0 ? {} : { color: 'grey' },{fontSize: 32}]} >
                                </AntDesign>
                            </Button>
                            <Ionicons
                                onPress={() => this.segmentClicked(1)}
                                transparent active={this.state.activeIndex == 1}>
                                <Icon name="md-list" style={[{ fontSize: 32 }, this.state.activeIndex == 1 ? {} : { color: 'grey' }]}></Icon>
                            </Ionicons>
                            <Ionicons
                                onPress={() => this.segmentClicked(2)}
                                transparent active={this.state.activeIndex == 2}>
                                <Icon name="ios-people" style={this.state.activeIndex == 2 ? {} : { color: 'grey' }}></Icon>
                            </Ionicons>
                        </View>
                        {this.renderSection()}
                    </View>
                </Content>
            </Container >
        );
    }
}
export default ProfileTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    postFont:{
        fontSize: 13,
        color: 'grey' }
});
