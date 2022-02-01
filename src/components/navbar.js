import React from 'react';
import {Text, View, StyleSheet}
from 
'react-native';

import { Feather, Ionicons, AntDesign } from '@expo/vector-icons';
// folder-minus
// chatbox-ellipses
//book


export function NavBar(){
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Feather name='folder-minus' size={35} color={'#5B4FFF'} />
        <Ionicons name='chatbox-ellipses' size={35} color={'#5B4FFF'} />
        <AntDesign name='book' size={35}  color={'#5B4FFF'}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9f9f9',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    height: 100,
  },
  navbar : {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 20,

  }
});

