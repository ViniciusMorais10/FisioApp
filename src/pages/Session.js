import React from "react";

import {
  Text, View, Image, StyleSheet, TouchableOpacity
}
from 'react-native';

import { AntDesign } from '@expo/vector-icons'

import imgVideo from '../assets/video.png';

export function Session({navigation}){
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
        style={{marginTop:40 , paddingHorizontal: 10} }
        onPress={()=> navigation.navigate('Home')}
        >
          <AntDesign name='leftcircle' size={34} color="#000" />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Image source={imgVideo} style={{borderRadius: 10}}/>
        <Text style={styles.lbInstruction}>Fechar e abrir as {'\n'}mãos</Text>
        <TouchableOpacity 
        style={styles.buttonFinished}
        activeOpacity={0.6}
        >
          <Text style={styles.lbButtonFinished}>Feito</Text>
        </TouchableOpacity>
        <View style={styles.tips}>
          <Text style={styles.textTip}>Series</Text>
          <Text style={styles.textTip}>Repetições</Text>
          <Text style={styles.textTip}>Descanso</Text>
        </View>
        <View style={styles.tipsItem}>
          <Text style={styles.textTipItem}>3</Text>
          <Text style={styles.textTipItem}>10</Text>
          <Text style={styles.textTipItem}>20 seg</Text>
        </View>
        
      </View>
      
    </View>

  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    height: 150,
    width: '100%',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#EEE'
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 300,
    height: '70%',
  },
  lbInstruction: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 30,
  },
  buttonFinished: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5B4FFF',
    width: 278,
    height: 56,
    borderRadius: 10,
    marginTop: 20
  },
  lbButtonFinished: {
    fontSize: 30,
    color: '#FFF',
  },
  tips: {
    paddingTop: 30,
    paddingHorizontal:20,
    width:'100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  tipsItem: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal:20
  },
  textTip: {
    fontSize: 25,
    textAlign: 'center',
    color:'#938989'
  },
  textTipItem: {
    fontSize: 22,
    textAlign: 'center',
    color: '#5B3FFF',
    fontWeight: 'bold',
    paddingTop:10

  }

 
})
