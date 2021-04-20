import React from 'react';
import {useDispatch} from 'react-redux';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  View,
  Item,
  Image
} from 'react-native';
import Swiper from 'react-native-swiper';
import {Link} from 'react-router-native';
import {getCategories} from '../Redux/Actions/categories';
import categoryScreenshot from '../assets/categories.png'
import hotTakeScreenshot from '../assets/hotTakes.png'
import resultsScreenshot from '../assets/results.png'

const HowTo = () => {
  const dispatch = useDispatch();

  return (
    <Swiper style={styles.scrollView}>
      <View style={styles.view}>
        <Text style={styles.headerText}>Welcome to HotTakes!</Text>
        <View style={styles.instructions}>
          <Text style={styles.text}>
            An app that allows you to answer the world's most important
            questions like...
          </Text>
          <Text style={styles.hotTakeText}>"Is Soup a Drink?"</Text>
          <Text style={styles.text}>
            Then compare your answers to the world of people to see if you're
            with the people...or against them.
          </Text>
        </View>
        <Text style={{marginTop: '35%'}}>Swipe right to continue >></Text>
      </View>
      <View style={(styles.view, styles.instructionsCenter)}>
        <Text style={styles.text}>
          Once you click 'Get Started', you will be taken to the main dashboard
          where you will see a list of categories.
        </Text>
        <Image source={categoryScreenshot} style={styles.image}/>
        <Text style={styles.text}>
          You can choose either of the categories to answer hot takes related to
          that specific topic.
        </Text>
      </View>
      <View style={(styles.view, styles.instructionsCenter)}>
        <Text style={styles.text}>
          After you have selected a category, you will be prompted the hot takes
          to give your Einstein-esque opinions!
        </Text>
        <Text style={styles.text}>
          To answer, SWIPE RIGHT on the question/image if you agree, OR, SWIPE
          LEFT if you disagree.
        </Text>
        <Image style={styles.image2} source={hotTakeScreenshot}/>
      </View>
      <View style={styles.view}>
        <View style={(styles.view, styles.instructionsCenter2)}>
          <Text style={styles.text}>
            After you have answered, you will see what everyone else answered!
          </Text>
          <Image source={resultsScreenshot} style={styles.image2}/>
          <Text style={styles.text}>
            Now you know what to do, so let's get HotTake'n!
          </Text>
        </View>
        <Link
          onPress={() => dispatch(getCategories())}
          to="/categories"
          style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
        </Link>
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  view: {
    height: '185%',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    textAlign: 'center',
    margin: '8%',
    fontSize: 20,
    color: 'white',
  },
  headerText: {
    fontSize: 35,
    marginTop: 40,
    marginBottom: 40,
  },
  hotTakeText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
  },
  instructions: {
    margin: 30,
    borderRadius: 30,
    backgroundColor: '#FF2D2E',
  },
  instructionsCenter: {
    margin: 30,
    borderRadius: 30,
    backgroundColor: '#FF2D2E',
    height: 630,
  },
  instructionsCenter2: {
    margin: 20,
    borderRadius: 30,
    backgroundColor: '#FF2D2E',
    height: 550,
  },
  button: {
    backgroundColor: '#FF2D2E',
    borderRadius: 10,
    width: 200,
    height: 50,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '400',
    textAlign: 'center',
  },
  centered: {
    alignSelf: 'center',
  },
  image: {
    height: 350,
    resizeMode: 'contain',
  },
  image2: {
    height: 320,
    resizeMode: 'contain',
    alignSelf: 'center'
  },
});

export default HowTo;
