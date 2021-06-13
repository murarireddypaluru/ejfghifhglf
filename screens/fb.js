import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
class Facebook extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
        Facebook
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default Facebook