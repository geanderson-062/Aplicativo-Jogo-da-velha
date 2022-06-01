import { Text, View } from 'react-native'
import  React from 'react'
import styles from './style'; //exportando css style 

export default function Subtitulo_menu() {
    
  //aqui fica o titulo do app

    return (
      
      <View >

        <Text style={styles.textTitle}>© 2022 Gean.Dev Company, Inc</Text>

      </View>

    );
  }