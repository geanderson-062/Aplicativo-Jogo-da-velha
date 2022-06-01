
import {  Text, View, TouchableOpacity } from 'react-native';
import React, {useState} from 'react'

//importando os icones para tabbar
import { Feather} from '@expo/vector-icons';

//importando o style
import styles from './style'; 

//importando os componentes
import Titulo_menu from '../../components/Titulo_menu/index'
import Titulo_ganhador from '../../components/Titulo_ganhador/index'
import Subtitulo_menu from '../../components/Subtitulo_menu/index'
import {Img} from '../../components/Img/index'
import Link from '../../components/Link/index'
import Footer from '../../components/Footer/index'

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

       //iniandoo o jogo
       tabuleiro[linha][coluna] = jogadorAtual;
       setTabuleiro([...tabuleiro]);

       //dizendo quem e o jogado 1 
       setJogadorAtual(jogadorAtual == 'X' ? 'O' : "X");

       //dizendo quem e o ganhador 
       verificarGanhador (tabuleiro,linha,coluna);

    }

    //verificando o ganhador 
    function verificarGanhador(tabuleiro,linha,coluna){

      //caso seja na linha execute isso
      if(tabuleiro[linha][0] !=='' && tabuleiro[linha][0] === tabuleiro[linha][1] && tabuleiro[linha][1] === tabuleiro[linha][2]){
        return  finalizarJogo(tabuleiro[linha][0]);
      }

      //caso seja na coluna execute isso
      if(tabuleiro[0][coluna] !=='' && tabuleiro[0][coluna] === tabuleiro[1][coluna] && tabuleiro[1][coluna] === tabuleiro[2][coluna] ){
        return  finalizarJogo(tabuleiro[0][coluna]);
      }

      //caso seja na diagonal 1 {esquerda para direita} execute isso
      if(tabuleiro[0][0] !=='' && tabuleiro[0][0] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][2] ){
        return  finalizarJogo(tabuleiro[0][0]);
      }

      //caso seja na diagonal 2 {direita para esquerda} execute isso
      if(tabuleiro[0][2] !=='' && tabuleiro[0][2] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][0] ){
        return  finalizarJogo(tabuleiro[0][2]);
      }

      //caso contrario e velha nenhum ganhador 
      if((jogadasRestantes - 1) === 0){
        return  finalizarJogo('');   
      }

      //jogo não finalizado
      setJogadasRestantes((jogadasRestantes -1));

    }

    //finalizando o jogo
    function finalizarJogo (jogador){
      setGanhador(jogador);
      setTela('ganhador');
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

          <Img/>
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

          <Link/>

          <Footer/>
          
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
                                //numero da coluna selecionada 
                                key={numeroColuna}
                                //ativar constante 
                                onPress={() => jogar(numeroLinha,numeroColuna)}
                                //style do campo
                                style={styles.boxJogo}
                                //desativar botão com 1 click
                                disabled= {coluna !=='' }
                                >
                                
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
            <Text style={styles.textobotaoVoltar}>Voltar para o menu <Feather name="corner-up-left" size={20} color={"#fff"}/>
            </Text>
            
          </TouchableOpacity>

        </View>
      );
    }

    //tela de ganhador 
    function getTelaGanhador(){

      return (
        <View style={styles.container}>
          
          <Titulo_menu/>
          <Titulo_ganhador/>

          {
              //caso as jogadas sejam 0 = nada ninguem ganha
              ganhador === '' && 
            <>
              <Img/>
              <Text style={styles.ganhador}>Deu velha</Text>
              <Text style={styles.ganhador}>nenhum ganhador</Text>
            </>
          }
          {
              //caso contrario alguem ganhou
              ganhador !== '' && 

            <>

              <Text style={styles.ganhador}>Ganhador</Text>

              <View style={styles.boxJogo}>
                                
              <Text style={ganhador === 'X' ?  styles.jogadorX : styles.jogadorO }>{ganhador}</Text>
                      
              </View>

            </>

          }

          <TouchableOpacity 
          onPress={() => setTela('menu')}
          style={styles.botaoVoltar}>
            <Text style={styles.textobotaoVoltar}>Voltar para o menu <Feather name="corner-up-left" size={20} color={"#fff"}/>
            </Text>
            
          </TouchableOpacity>

        </View>
      );
    }
    



    }


