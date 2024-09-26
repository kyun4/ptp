import { Text, View,StyleSheet, ImageBackground,Image, Dimensions, TouchableOpacity } from "react-native";
import {useRouter} from 'expo-router';

export default function Index() {

  const router = useRouter();

  const onStarted = () =>{
    router.navigate("/menu/login")
  }

  const style = StyleSheet.create({

    container: {flex:1},

    imageBackground: {
      width: "100%",
      height: "100%",
      justifyContent:"center",
      alignItems:"center"
    },

    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(13,62,80,0.9)'
    },

    text_style: {
      color: "#FFF",
      fontSize: 24,
      fontWeight: "bold"
    },

    sub_text_style: {
      color: "#FFF",
      fontSize: 11    
    },

    
  

    button_get_started: {
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "#FFF",      
      padding: 15,
      width: Dimensions.get('window').width - 150,
      marginTop: Dimensions.get('window').height - 275,
    },

    style_text_button:{
      color: "#FFF",
      fontWeight: "bold",
      marginHorizontal: 20,
      textAlign: "center"
    }

  })

  return (
    <View style = {style.container}>
      <ImageBackground
      style = { style.imageBackground }
      source = {require('@/assets/images/splashbg1.png')}>

      <View style = {style.overlay}></View>

      <Image style = {{ height: 150, width: 150, resizeMode: "center", marginBottom: -40 }}
            source = {require('@/assets/images/pitiklogo2.png')}>
      </Image>
      <Text style = {style.text_style}>Pitik ni Tiyo Paeng</Text>
      <Text style = {style.sub_text_style}>PHOTOGRAPHY AND XDEAL SERVICES</Text>

      
      
      <TouchableOpacity onPress = {onStarted} style = {style.button_get_started}>
        <Text style = {style.style_text_button}>Get Bookings Now</Text>
      </TouchableOpacity>

     
      
      </ImageBackground>
    </View>
  );
}
