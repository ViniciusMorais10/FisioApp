import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity}
from 
'react-native';

import { Feather, Ionicons, AntDesign } from '@expo/vector-icons';

export function NavBar(){

  const [active, setActive] = useState(0);

  function handleActive(index){
    setActive(index);
  }

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity
        onPress={()=>handleActive(0)}
        style={styles.button}
        >
          
          <Feather name='folder-minus' size={35} style={{color: active == 0 ? '#5B4FFF' : '#000'}} />
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.button}
        onPress={()=>handleActive(1)}
        >
          <Ionicons name='chatbox-ellipses' size={35} style={{color: active == 1 ? '#5B4FFF' : '#000'}}  />
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.button}
        onPress={()=> handleActive(2)}
        >
          <AntDesign name='book' size={35} style={{color: active == 2 ? '#5B4FFF' : '#000'}} />
        </TouchableOpacity>
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
    alignItems: 'center'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    flex: 1,
    // backgroundColor: 'red'
    }
});

