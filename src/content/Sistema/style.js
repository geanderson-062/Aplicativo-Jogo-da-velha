import { StyleSheet } from 'react-native'

// css style 
const styles = StyleSheet.create( {

  //style cor e posição das telas
  container: {
    flex: 1,
    backgroundColor: '#800080',
    alignItems: 'center',
    justifyContent: 'center',
  },

  //box dos botões
  boxJogo: {
    width: 100,
    height: 100,
    backgroundColor: "#ddd",//cor do box X e O 
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,//distanciando do componente acima
    margin: 10,//separando o X e O 
    borderRadius:5,
  },

  //opção X 
  jogadorX: {
    fontSize: 80,
    color: "#553fda", 
  },

  //opção O 
  jogadorO: {
    fontSize: 80,
    color: "#da3f3f",
  },

  ladoAlado:{
    flexDirection: 'row',
    marginTop: 10,
  },

  botaoVoltar: { 
    borderRadius: 50, 
    alignItems: "center",
    justifyContent: "center",
    width: "52%",
    height: 50,
    backgroundColor: "#4b204b",
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 12,
    marginTop: 30,  
  },

  textobotaoVoltar: { 
      color: "#fff",
  }
  
  });

  export default styles