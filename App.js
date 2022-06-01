//importar os componentes que vamos precisar
import { StatusBar, View  } from 'react-native';

//importando o sistema do jogo
import Sistema from './src/content/Sistema';

//backgroundColor cor da barrado superior com os icones
//barStyle cor dos icones na barra superior // estatusbar

export default function App() {
  return (

    //aqui importamos o sistema de valegacao e definimos o statusbar
    <View  style={{flex: 1}}>
            <StatusBar 
             backgroundColor="#800080" 
             barStyle="light-content" />
            <Sistema/>
    </View>

  );
}


