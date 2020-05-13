import React from 'react'
import { View , Text} from 'react-native'

function Welcome(props){
    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text style={{textAling:'center'}}>
                Bienvenidos
            </Text>
            <Text>
                Nombre : {props.nombre}
            </Text>
            <Text>
                Contraseña : {props.contraseña}
            </Text>

        </View>

    )
}
export default Welcome