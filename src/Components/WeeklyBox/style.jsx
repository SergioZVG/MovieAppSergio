import React from "react";
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  weeklyContainer: {
    flexDirection: 'column',
    borderWidth: 1,
    backgroundColor: 'blue',
    width: '83.2%',
    height: 200,
    marginTop: 30,
    marginHorizontal: '8%',
  },
  dailyQuizContainer: {
    flexDirection: 'column',
    borderWidth: 1,
    backgroundColor: 'black',
    width: '83.2%',
    height: 100,
    marginTop: 30,
    marginHorizontal: '8%',
  },
  dailyContainer: {
    borderWidth: 1,
    width: '22.3%',
    height: 100,
    marginTop: 30,
    marginLeft: '8%',
  },
  imageContainer: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    zIndex: 2,
  },
  titleContainer: {
    textAlign: 'center',
    height: '30%',
    width: '100%',
    marginTop: '80%',
    backgroundColor: '#000',
    color: '#fff',
    zIndex: 3,
    opacity: 0.3,
  },
});

export default styles;