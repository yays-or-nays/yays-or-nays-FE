import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  AppRegistry,
  Dimensions,
  Image
} from 'react-native';

import {NativeRouter, Route, Link} from 'react-router-native';
import CardStack, { Card } from 'react-native-card-stack-swiper';


const testData = [
{ id: "1", uri: require('../assets/1.jpeg')},
{ id: "2", uri: require('../assets/2.jpeg')},
{ id: "3", uri: require('../assets/3.jpeg')},
{ id: "4", uri: require('../assets/4.jpeg')},
{ id: "5", uri: require('../assets/5.jpeg')},
{ id: "6", uri: require('../assets/6.jpeg')},
{ id: "7", uri: require('../assets/7.jpeg')},
{ id: "8", uri: require('../assets/8.jpeg')},
{ id: "9", uri: require('../assets/9.jpeg')},
{ id: "10", uri: require('../assets/10.jpeg')}
]

class HotTakes extends React.Component {
  constructor() {
    super();
  }

  render() {
    const category = testData.map((item, i) => {
      return (
        <Card
        key={i}
        onSwipedRight={() => alert('onSwipedRight')}
        onSwipedLeft={() => alert('onSwipedLeft')}>
        <Image style={styles.card}
        source={item.uri}/>
        </Card>
      )
    })
    return (
      <View style={{ flex: 1 }}>
        <CardStack
          style={styles.content}
          renderNoMoreCards={() => <Text style={{ fontWeight: '700', fontSize: 18, color: 'gray' }}>No more cards</Text>}
          ref={swiper => {
            this.swiper = swiper
          }}
        >
        {category}
        </CardStack>
      </View>
    )}
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#f2f2f2',
    },
    content:{
      flex: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    card:{
      width: 320,
      height: 470,
      backgroundColor: '#FE474C',
      borderRadius: 5,
      shadowColor: 'rgba(0,0,0,0.5)',
      shadowOffset: {
        width: 0,
        height: 1
      },
      shadowOpacity:0.5,
    },
    card1: {
      backgroundColor: '#FE474C',
    },
    card2: {
      backgroundColor: '#FEB12C',
    },
    label: {
      lineHeight: 400,
      textAlign: 'center',
      fontSize: 55,
      fontFamily: 'System',
      color: '#ffffff',
      backgroundColor: 'transparent',
    },
    footer:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    },
    buttonContainer:{
      width:220,
      flexDirection:'row',
      justifyContent: 'space-between',
    },
    button:{
      shadowColor: 'rgba(0,0,0,0.3)',
      shadowOffset: {
        width: 0,
        height: 1
      },
      shadowOpacity:0.5,
      backgroundColor:'#fff',
      alignItems:'center',
      justifyContent:'center',
      zIndex: 0,
    },
    orange:{
      width:55,
      height:55,
      borderWidth:6,
      borderColor:'rgb(246,190,66)',
      borderRadius:55,
      marginTop:-15
    },
    green:{
      width:75,
      height:75,
      backgroundColor:'#fff',
      borderRadius:75,
      borderWidth:6,
      borderColor:'#01df8a',
    },
    red:{
      width:75,
      height:75,
      backgroundColor:'#fff',
      borderRadius:75,
      borderWidth:6,
      borderColor:'#fd267d',
    }
  });

export default HotTakes;
