import {
  StyleSheet,
  Text,
  View,
  AppRegistry,
  Dimensions,
  Image,
  Button,
} from 'react-native';

import {NativeRouter, Route, Link} from 'react-router-native';
import CardStack, {Card} from 'react-native-card-stack-swiper';
import {useSelector, useDispatch} from 'react-redux';
import {mutateYes, mutateNo} from '../util';
import {getHotTake} from '../Redux/Actions/hotTakes';

const HotTakes = () => {
  const dispatch = useDispatch();
  let hotTake = useSelector(state => state.hotTakes.details);
  // setCurrentTake(hotTake);

  const handlePress = id => {
    dispatch(getHotTake(id));
  };

  const card = () => {
    return hotTake ? (
      <Card
        key={hotTake.id}
        onSwipedRight={() => mutateYes(hotTake.id)}
        onSwipedLeft={() => mutateNo(hotTake.id)}>
        <Text>{hotTake.question}</Text>
        <Image style={styles.card} source={{uri: hotTake.picture}} />
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
            <>
              <Text
                style={{
                  width: '70%',
                  fontWeight: '700',
                  fontSize: 20,
                  color: 'black',
                }}>
                Yes Votes: {hotTake ? hotTake.yesVote : 'Loading'}
                No Votes: {hotTake ? hotTake.noVote : 'Loading'}
              </Text>
              <Link to="/hottakes" onPress={() => handlePress(hotTake.tag.id)}>
                <Text>Next Hot Take</Text>
              </Link>
            </>
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
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f2f2f2',
  },
  content: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: 350,
    height: 650,
    backgroundColor: '#FE474C',
    borderRadius: 5,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
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
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: 220,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    shadowColor: 'rgba(0,0,0,0.3)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0,
  },
  orange: {
    width: 55,
    height: 55,
    borderWidth: 6,
    borderColor: 'rgb(246,190,66)',
    borderRadius: 55,
    marginTop: -15,
  },
  green: {
    width: 75,
    height: 75,
    backgroundColor: '#fff',
    borderRadius: 75,
    borderWidth: 6,
    borderColor: '#01df8a',
  },
  red: {
    width: 75,
    height: 75,
    backgroundColor: '#fff',
    borderRadius: 75,
    borderWidth: 6,
    borderColor: '#fd267d',
  },
});

export default HotTakes;
