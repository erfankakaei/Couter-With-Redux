import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {increment, decrement} from './actions';

const Counter = () => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <View style={styles.appContainer}>
      <TouchableOpacity
        style={styles.buttonContainers}
        onPress={() => dispatch(increment)}>
        <Text style={styles.texts}>+</Text>
      </TouchableOpacity>

      <Text style={styles.texts}>{count}</Text>

      <TouchableOpacity
        style={styles.buttonContainers}
        onPress={() => dispatch(decrement)}>
        <Text style={styles.texts}>-</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonContainers: {
    height: 50,
    width: 50,
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  texts: {fontSize: 30},
});

export default Counter;
