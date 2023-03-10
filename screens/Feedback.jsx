import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Feedback = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textVal}> The session was good. Touchbased the concepts but too much of technicalities in a single session </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
      padding: 20
    },
    textVal: {
        fontSize: 22,
        textAlign: 'center'
    }
  });