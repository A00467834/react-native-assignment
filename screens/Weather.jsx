import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Weather = () => {
    const [response,setResponse]=useState([])

useEffect(() => {
    const appId = ''; // please give your app id here.
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=44.6476&lon=-63.5728&APPID=${appId}&units=metric`
    )
      .then((res) => res.json())
      .then((resp) => {
        setResponse({
          temp:resp.main.temp,
          location:resp.name,
          weather:resp.weather[0].main,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

    return (
        <View style={styles.container}>
            {response && (
                <>
                    <Text style={styles.textVals}>{response.location}</Text>
                    <Text style={styles.textVals}>{response.temp}</Text>
                    <Text style={styles.textVals}>{response.weather}</Text>
                </>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    textVals: {
        fontSize: 32
    }
  });