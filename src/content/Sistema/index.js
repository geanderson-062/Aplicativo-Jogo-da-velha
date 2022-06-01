
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

    //tela do jogo
    const [jogadorAtual, setJogadorAtual] = useState('');

    //matriz do jogo
    const [tabuleiro, setTabuleiro] = useState([]);

    //saber se teve jogadas restantes 
    const [jogadasRestantes, setJogadasRestantes] = useState(0);

    //tela de ganhador
    const [ganhador, setGanhador] = useState('');

    //iniciar o jogo 
    function iniciarJogo(jogador){ 

        //jogador selecionado inicia jogo
        setJogadorAtual(jogador);

        //matriz 3x3 = 9 jogadas
        setJogadasRestantes(9);

        //tabuleiro utilizado
        setTabuleiro([
             
            //3x3 matriz no array
            ['','',''],
            ['','',''],
            ['','',''],
        ]);

        //carregando tela do jogo 
        setTela('jogo');
    }

    //jogando o jogo 
    function jogar (linha,coluna){ 
       tabuleiro[linha][coluna] = jogadorAtual;
       setTabuleiro([...tabuleiro]);

       setJogadorAtual(jogadorAtual == 'X' ? 'O' : "X");
    }

    //validando a tela que vai ser utilizada 
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

          <TouchableOpacity 
          //iniciar jogo com o X
          onPress={() => iniciarJogo('X')}
          style={styles.boxJogo}>

            <Text style={styles.jogadorX}>X</Text>

          </TouchableOpacity>

          <TouchableOpacity 
          //iniciar jogo com o O
          onPress={() => iniciarJogo('O')}
          style={styles.boxJogo}>

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

         <Titulo_menu/>

         {
             tabuleiro.map((linha,numeroLinha) => {
               return(
                <View key={numeroLinha} style={styles.ladoAlado}>
                    {
                        linha.map((coluna,numeroColuna) => {
                            return(
                                <TouchableOpacity 

                                key={numeroColuna}
                                onPress={() => jogar(numeroLinha,numeroColuna)}
                                style={styles.boxJogo}>
                      
                                  <Text style={coluna === 'X' ?  styles.jogadorX : styles.jogadorO }>{coluna}</Text>
                      
                                </TouchableOpacity>
                            )
                        })
                    }

                </View>
               )
           })
        }
          
          <TouchableOpacity 
          onPress={() => setTela('menu')}
          style={styles.botaoVoltar}>
            <Text style={styles.textobotaoVoltar}>Voltar para o menu</Text>
          </TouchableOpacity>

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


