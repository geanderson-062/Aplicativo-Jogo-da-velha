
import {  Text, View, TouchableOpacity } from 'react-native';
import React, {useState} from 'react'

//importando o style
import styles from './style'; 

//importando os componentes
import Titulo_menu from '../../components/Titulo_menu/index'
import Titulo_jogo from '../../components/Titulo_jogo/index'
import Titulo_ganhador from '../../components/Titulo_ganhador/index'
import Subtitulo_menu from '../../components/Subtitulo_menu/index'


export default function Sistema() {

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

          
          <Titulo_menu/>
          <Subtitulo_menu/>

          <View style={styles.ladoAlado}>

          <TouchableOpacity style={styles.boxJogo}>
            <Text style={styles.jogadorX}>X</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.boxJogo}>
            <Text style={styles.jogadorO}>O</Text>
          </TouchableOpacity>

          </View>
          
        </View>
      );
    }

    //tela de jogo
    function getTelaJogo(){

      return (
        <View style={styles.container}>

          <Text>jogo</Text>
          
        </View>
      );
    }

    //tela de ganhador 
    function getTelaGanhador(){

      return (
        <View style={styles.container}>
          
          <Text>ganhador</Text>

        </View>
      );
    }
    



    }


