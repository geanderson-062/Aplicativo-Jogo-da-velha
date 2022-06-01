import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react'

//importando os componentes
import Titulo_menu from './src/components/Titulo_menu/index'
import Titulo_jogo from './src/components/Titulo_jogo/index'
import Titulo_ganhador from './src/components/Titulo_ganhador/index'

export default function App() {

    //carregar primeira tela menu
    const [tela , setTela] = useState('menu');

    //validando a tela 
    switch (tela) {

      //caso seja menu exbir menu
      case 'menu':
        return getTelaMenu();

      //caso seja jogo exbir jogo
      case 'jogo':
        return getTelaJogo();

      //caso seja ganhador exbir ganhador
      case 'ganhador':
        return getTelaGanhador();
        
    }

    //tela de menu
    function getTelaMenu(){

      return (
        <View style={styles.container}>

          <StatusBar style="auto" />
          <Titulo_menu/>
          
        </View>
      );
    }

    //tela de jogo
    function getTelaJogo(){

      return (
        <View style={styles.container}>

          <StatusBar style="auto" />
          <Text>jogo</Text>
          
        </View>
      );
    }

    //tela de ganhador 
    function getTelaGanhador(){

      return (
        <View style={styles.container}>
          
          <StatusBar style="auto" />
          <Text>ganhador</Text>

        </View>
      );
    }
    



    }

//style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
