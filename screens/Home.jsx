import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export const Home = ({navigation}) => {
    return (
       <View style={styles.container}>
            <View style={styles.textContent}>
                <Text style={styles.textVal1}>Welcome to my react native app!</Text>
                <Text style={styles.textVal2}>Click on the buttons to switch screens.</Text>
            </View>
            <View style={styles.buttons}>
                <Button title="Feedback" onPress={() => navigation.navigate("Feedback")} />
                <Button title="Weather" onPress={() => navigation.navigate("Weather")}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    //   gap: 10
    },
    textVal1: {
        fontSize: 20
    },
    textVal2: {
        fontSize: 16
    },
    textContent: {
        gap: 5
    },
    buttons: {
        marginTop: 10
        // gap: 10
    }
  });