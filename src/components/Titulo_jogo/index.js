import { Text, View } from 'react-native'
import  React from 'react'
import styles from './style'; //exportando css style 

export default function Titulo_jogo() {
    
  //aqui fica o titulo do app

    return (
      
      <View >

        <Text style={styles.textTitle}>O que é uma criptomoeda ?</Text>

      </View>

    );
  }