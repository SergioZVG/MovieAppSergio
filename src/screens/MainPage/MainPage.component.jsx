import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import MovieCard from '../../Components/MovieCard/MovieCard';
import { WeeklyBox, DailyQuiz, DailyBox } from '../../Components/WeeklyBox/MovieBoxes';

const MainPageComponent = props => {
  const {} = props;

  return(
    <View style={styles.backgroundColor}>
      {/*<View style={styles.thumbsContainer}>
        <MovieCard>
        </MovieCard>
      </View>*/}
      <View style={styles.movieBoxContainer}>
        <WeeklyBox />
        <DailyQuiz />
        <DailyBox />
      </View>
    </View>
  )
}

export default MainPageComponent;