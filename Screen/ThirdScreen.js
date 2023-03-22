import { StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';



export default function ThirdScreen ( { navigation , route} ) {
    let dirName = route.params.name;
    let dirDesc = route.params.desc;

    const [fontsLoaded] = useFonts ({
      'Inter': require('../assets/fonts/Inter-LightItalic.otf'),
    }); 
  
    useEffect (() => {
      async function prepare() {
        await SplashScreen.preventAutoHideAsync();
      }
      prepare();
    },[]);
  
    if (!fontsLoaded){
      return undefined;
    } else {
      SplashScreen.hideAsync();
    }

    return (
      <View style={styles.background}>
        <Text style={styles.text1}>{dirName}</Text>
        <Text style={styles.text2}>{dirDesc}</Text>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate('SecondScreen')}>
            <AntDesign name='leftcircle' size={50} color="white"/>
          </TouchableOpacity>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#418c85',
    justifyContent: "center",
    alignItems: "center",
  },
  gambar: {
    width: 400,
    height: 400,
    resizeMode:"contain",
    top:30,
    flexDirection: "column",
    justifyContent:"center",
    alignItems:"center",
  },
  button: {
    position:"absolute",
    margin:10,
    bottom:10,
    left:10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  text1: {
    color:'white',
    fontSize: 30,
  },
  text2: {
    color:'white',
    fontSize: 20,
    padding:15,
    textAlign: 'justify',
}
});