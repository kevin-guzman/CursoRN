
import React, {Component} from 'react'
import { StyleSheet, 
        Text, 
        View,
        Button,
        Image,
        Alert,
        TextInput,
        TouchableOpacity
      } from 'react-native';
import imagen from './media/Meme.jpg'
import Hijo from './src/hijo'     
import Welcome from './src/welcome'


class App extends Component  {


  constructor(props) {
    super(props);
    this.state = {
      Nombre:'',
      Contraseña:'',
      Estado:0,

    };
  }

  login = () =>{

    this.setState(
      {
        Estado: 1
      }
    )
    const {Nombre}= this.state
    const {Contraseña}= this.state
    const {Estado} = this.state
     /* if ( (Nombre === '') && (Contraseña === '')){
      Alert.alert('Nombre o contraseña vacíos')
      //{(Estado)=>{this.setState('Nombre o contraseña vacíos')}}
      

    }
    else{
     Nombre = this.state.Nombre
     Contraseña = this.state.Contraseña
    
    }  */
  }
  touch = () =>{
    Alert.alert('Touch normal')
  }

  longTouch = () =>{
    Alert.alert('Touch largo')
  };


  render (){

    const {Nombre}= this.state
    const {Contraseña}= this.state
    const {Estado} = this.state


        return (

          this.state.Estado == 0 ?
          <View style={styles.container}>
            <View style={styles.header} >
              <View syle={styles.headerLeft} >
                <TouchableOpacity onPress={()=>this.touch()} >
                 <Image
                  style={styles.image}
                 source={imagen}
                  />                  
                 </TouchableOpacity>
              </View>
              <View syle={styles.headerRight} >
                <Button 
                style={styles.button} 
                title="Ingresar"
                onPress={() => this.login()}
                >
              </Button>
             </View>
            </View>


             <View style={styles.body}>
              <View>
                <TextInput
                 style={styles.textimput}
                  placeholder="Nombree"
                  //value={Nombre}
                  onChangeText={(Nombre)=> {this.setState({Nombre})}}
               >
                </TextInput>
              </View>

              <View>
               <TextInput
                 style={styles.textimput}
                 placeholder="Contraseña"
                //value={Contraseña}
                onChangeText={(Contraseña)=> {this.setState({Contraseña})}}
                >
                </TextInput>
              </View>
            </View>
          </View>
          :
          <Welcome nombre={this.state.Nombre} contraseña={this.state.Contraseña}/>
        )


   }
  

  
  }


const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#fff',
    //alignItems: 'center',
    marginHorizontal:'20%',
    marginVertical:'15%',
    
    //justifyContent: 'center',

  },
  
  header:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    //margin:'10%'
  },

  headerLeft:{
    flex:1,
    margin:'10%',
  },

  headerRight:{
    flex:2,
    margin:'10%',
  },

  image:{
    width:40,
    height:40,
    borderRadius:10,
  },
  image2:{
    width:80,
    height:80
  },

  body:{
    flex:1,
    flexDirection:'column',
    justifyContent:'space-between',
    //backgroundColor:'gray'
  },

  textimput:{
    borderColor:'black',
    borderWidth:0.6,
    
  },

  leg:{
    flex:1,
    padding:'3%',
    marginVertical:'1%',
    flexDirection:'column',
    justifyContent:'space-between',
    alignItems:'center'
  },

  footer:{
      paddingTop: 40,
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:'10%'
  },

  f1:{
    width:30,
    height:30,
    backgroundColor:'gray',
  },

  f2:{
    width:30,
    height:30,
    backgroundColor:'purple',
    borderRadius:15,
  },

  f3:{
    width:30,
    height:30,
    backgroundColor:'red',
  },

});


export default App