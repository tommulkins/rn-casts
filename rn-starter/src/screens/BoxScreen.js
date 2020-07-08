import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.parentStyle}>
      <View style={styles.viewOneStyle} />
      <View style={styles.viewTwoParent}>
        <View style={styles.viewTwoStyle} />
      </View>
      <View style={styles.viewThreeStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  parentStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  viewOneStyle: {
    borderWidth: 1,
    height: 50,
    width: 50,
    backgroundColor: 'red'
  },
  viewTwoStyle: {
    borderWidth: 1,
    height: 50,
    width: 50,
    backgroundColor: 'green'
  },
  viewTwoParent: {
    borderWidth: 1,
    height: 100,
    justifyContent: 'flex-end'
  },
  viewThreeStyle: {
    borderWidth: 1,
    height: 50,
    width: 50,
    backgroundColor: 'purple'
  }
});

export default BoxScreen;
