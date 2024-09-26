import { Text, View, TextInput, Image, StyleSheet,TouchableOpacity, ImageBackground } from "react-native";
import {useRouter} from 'expo-router';
import React, {useState} from 'react';


export default function Login() {


  const router = useRouter();

  const [isDark, setIsDark] = useState(true);

 
  var style = StyleSheet.create({

   
  });


  const onSignUp = () => {
    router.navigate("/")
  }

  const changeTheme = () => {

    setIsDark(!isDark);

  }

  if(isDark == true){

    style = StyleSheet.create({

      general_theme: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        backgroundColor:"#0D3E50",
        opacity: 0.8
      },
      text_input_div: {
        paddingHorizontal: 15,
        paddingVertical: 15,
        backgroundColor:"#E7E1E1",
        width: "100%",
        borderRadius: 10,
        marginVertical: 5
      },
      button_default: {
        width: "100%",
        backgroundColor:"#494549",
        borderColor: "#FFF",
        borderWidth: 0,
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 20,
        marginVertical: 5
      },
      button_default_text: {
        color: "#FFF",
        textAlign: "center"    
      },
      menu_login: {
        fontWeight: "bold",
        fontSize: 28,
        color:"#FFF",
        
      },
      menu_login_style: {
        fontSize: 8,
        fontWeight: "400",
        color:"#FFF"
      },
      login_logo: {
        height: 75,
        width: 75,
        marginBottom: 10
      },
      login_header: {
        marginVertical: 20,
        flexDirection: "column",
        alignItems: "center"
      },
      login_subtitle: {
         alignItems:"center",
         marginVertical: 5,        
      },
      tanyag: { fontSize: 12, color: "#FFF" },
      login_footer:{
        flexDirection:"row",
        marginTop: 10
      },

      footer_text: {
        color: "#FFF"
      },
      footer_text_bold: {
        color: "#FFF",
        fontWeight:"bold"
      }

      
    });
    
  }else{
    
    style = StyleSheet.create({
      general_theme: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        backgroundColor:"#FFF",
        opacity: 0.8
      },
      text_input_div: {
        paddingHorizontal: 15,
        paddingVertical: 15,
        backgroundColor:"#E7E1E1",
        width: "100%",
        borderRadius: 10,
        marginVertical: 5
      },
      button_default: {
        width: "100%",
        backgroundColor:"#169E92",
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 20,
        marginVertical: 5
      },
      button_default_text: {
        color: "#FFF",
        textAlign: "center"    
      },
      menu_login: {
        fontWeight: "bold",
        fontSize: 28,
        color:"#0D3E50",
        
      },
      menu_login_style: {
        fontSize: 8,
        fontWeight: "400"
      },
      login_logo: {
        height: 75,
        width: 75,
        marginBottom: 10
      },
      login_header: {
        marginVertical: 20,
        flexDirection: "column",
        alignItems: "center"
      },
      login_subtitle: {
         alignItems:"center",
         marginVertical: 5
      },
      tanyag: { fontSize: 12, color: "#494547" },
      login_footer:{
        flexDirection:"row",
        marginTop: 10
      },
      footer_text: {
        color: "#494547"
      },
      footer_text_bold: {
        color: "#494547",
        fontWeight:"bold"
      }
     
    })
  }

 

  

  return (

    <ImageBackground style = {{ width: "100%", height: "100%" }} source = {require('@/assets/images/splashbg1.png')}>


    <View
     style = {style.general_theme }
    >

  
      <View style = { style.login_header }>
        
      {isDark ? 
      
        (<Image style = {{ height: 150, width: 150, resizeMode: "center", marginBottom: -40 }}
            source = {require('@/assets/images/pitiklogo2.png')}>
        </Image>

        ) : ( 
        <Image style = {{ height: 150, width: 150, resizeMode: "center", marginBottom: -40 }}
            source = {require('@/assets/images/pitiklogo3.png')}>            
        </Image>
        )}

           
   

           
       
       
        <View><Text style = { style.menu_login }>Pitik ni Tiyo Paeng</Text></View>
        <View style = { style.login_subtitle} >
          <Text style = { style.menu_login_style }>PHOTOGRAPHY AND XDEAL SERVICES</Text>
          <Text style = { style.menu_login_style }>Magpatira na!</Text>
        </View>
      </View>

      <View style = {style.text_input_div}>
        <TextInput placeholder = "Email/Username"></TextInput>
      </View>
      <View style = {style.text_input_div}>
        <TextInput placeholder = "Password"></TextInput>
      </View>

      <TouchableOpacity style = {style.button_default} onPress = {changeTheme}>
      <Text style = {style.button_default_text}>Login</Text>
      </TouchableOpacity>

      <View style = { style.login_footer}>
        <Text style = { style.footer_text }>Not yet registered? </Text>

        <TouchableOpacity onPress = {onSignUp}>
            <Text style = { style.footer_text_bold}>Sign up </Text>
        </TouchableOpacity>

        <Text style = { style.footer_text} >here</Text>
      </View>

   

    </View>

    </ImageBackground>

  );
}
