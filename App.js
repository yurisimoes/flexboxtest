import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.box} />
      <View style={styles.box2} />
      <View style={styles.box3} >     
        <View style={styles.subbox} />
        <View style={styles.subbox} />
        <View style={styles.subbox} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0000',
    alignItems: 'stretch',
    justifyContent: 'space-evenly',
  },
  box: {
    flex: 2,
    backgroundColor: 'steelblue',
    margin: 4,
  },
  box2: {
    flex: 7,
    backgroundColor: 'steelblue',
    margin: 4,
  },
  box3: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'steelblue',
    margin: 4,
  },
  subbox: {
    flex: 1,
    backgroundColor: 'yellow',
    margin: 2
  }
});
