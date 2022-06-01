import React from 'react'
import {View,Image} from 'react-native'



//criando componente img_home
export function Img() {
  
    return (

      <View>
        <Image source={require('../../../assets/img_velha.png')}/>
      </View>
    
    )
     
  }