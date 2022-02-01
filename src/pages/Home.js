import React from "react";

import {
  View, Text, StyleSheet, Image, TouchableOpacity
}
from
'react-native';

import imgFisio from '../assets/fisio.png';

export function Home({navigation}){
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={imgFisio} />
        <Text style={styles.user}>Olá, Leticia!</Text>
        <Text style={styles.lbPresentation}>Vamos iniciar o seu {'\n'}tratamento ? 😊 </Text>
        <TouchableOpacity 
        style={styles.buttonStart}
        activeOpacity={0.6}
        onPress={()=> navigation.navigate('Session') }
        >
          <Text style={styles.lbButtonStart}>Iniciar Tratamento</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container :{
    flex: 1,
  },
  content: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  user: {
    fontSize:35,
    color: '#333'
  },
  lbPresentation: {
    fontSize: 25,
    color: '#333',
    textAlign: 'center',
    marginTop: 45,
  },
  buttonStart: {
    backgroundColor: '#5B4FFF',
    width: 284,
    height:48,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 10
  },
  lbButtonStart: {
    fontSize: 22,
    color: '#FFF',
    fontWeight: '500'
  }
});
  