import {
  StyleSheet,
  Text,
  View,
  AppRegistry,
  Dimensions,
  Image,
  Button,
} from 'react-native';
import React from 'react';
import {NativeRouter, Route, Link} from 'react-router-native';
import CardStack, {Card} from 'react-native-card-stack-swiper';
import {useSelector, useDispatch} from 'react-redux';
import {mutateYes, mutateNo} from '../util';
import {getHotTake} from '../Redux/Actions/hotTakes';

const HotTakes = () => {
  const dispatch = useDispatch();
  let hotTake = useSelector(state => state.hotTakes.details);

  const handlePress = id => {
    dispatch(getHotTake(id));
  };

  const card = () => {
    return hotTake ? (
      <Card
        key={hotTake.id}
        onSwipedRight={() => mutateYes(hotTake.id)}
        onSwipedLeft={() => mutateNo(hotTake.id)}
        style={styles.card}>
        <Text style={styles.question}>{hotTake.question}</Text>
        <Image style={styles.image} source={{uri: hotTake.picture}} />
      </Card>
    ) : (
      <Text>Loading...</Text>
    );
  };

  return (
    <View style={{flex: 1}}>
      <CardStack
        key={hotTake ? hotTake.id : NaN}
        style={styles.content}
        renderNoMoreCards={() => {
          return (
            <View style={styles.resultsContainer}>
              <Text style={styles.resultsTitle}>
                And the people say...
              </Text>
              <Text
                style={styles.resultsText}>
                Yes Votes: {hotTake ? hotTake.yesVote : 'Loading'}
              </Text>
              <Text
                style={styles.resultsText}>
                No Votes: {hotTake ? hotTake.noVote : 'Loading'}
              </Text>
              <Link
                to="/hottakes"
                onPress={() => handlePress(hotTake.tag.id)}
                style={styles.button}>
                <Text style={styles.buttonText}>Next Hot Take</Text>
              </Link>
            </View>
          );
        }}
        ref={swiper => {
          this.swiper = swiper;
        }}>
        {card()}
      </CardStack>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: 350,
    height: 600,
    backgroundColor: '#FE474C',
    borderRadius: 5,
    alignItems: 'center'
  },
  question: {
    fontSize: 25,
    textAlign: 'center',
    margin: '3%',
    paddingTop: '5%',
    color: 'white',
    fontWeight: '500'
  },
  image: {
    width: 300,
    height: 500,
    resizeMode: 'contain',
    position: 'absolute',
    marginTop: '25%'
  },
  resultsContainer: {
    height: 300,
    width: 350,
    backgroundColor: '#FFEECC',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8
  },
  resultsTitle: {
    fontSize: 20,
    marginBottom: '8%'
  },
  resultsText: {
    fontWeight: '700',
    fontSize: 20,
    margin: '2%'
  },
  button: {
    width: '55%',
    height: '20%',
    backgroundColor: '#FE474C',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '5%'
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 20
  }
});

export default HotTakes;
