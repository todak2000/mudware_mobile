import React from 'react'
import { Text,StyleSheet, View, TouchableOpacity} from 'react-native'

import Logo from "../assets/Logo";
import Clickable from '../assets/Clickable';
export default function Home(props) {
    const {navigation} = props
    return (
      <View style={styles.container}>
          
          <View style={styles.logoDiv}>
            <Logo />
          </View>
          <View style={styles.lowerDiv}>
            <Text style={styles.lowerText}>Select One</Text>
            <View style={styles.clickDiv}>
                
                <View>
                    <TouchableOpacity onPress={()=>{navigation.navigate("Form",{color:"#4473B7"})}}>
                        <Clickable color="#4473B7"/>
                    </TouchableOpacity>
                    <Text style={styles.clickText}>Oil-based Mud</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={()=>{navigation.navigate("Form", {color:"#EDC152"})}} >
                        <Clickable color="#EDC152"/>
                    </TouchableOpacity>
                    <Text style={styles.clickText}>Oil-based Mud</Text>
                </View>
                
          </View>
          </View>
        </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding:"10%",
      backgroundColor:"#FFFFFF",
    },
    logoDiv:{
        marginTop:"10%",
        display:"flex",
        flexDirection:"row",
        justifyContent:"center"
    },
    lowerDiv:{
        marginTop:"50%",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        alignContent:"center",
        justifyContent:"center"
    },
    lowerText:{
        fontSize:25,
    },
    clickDiv:{
        marginTop:"15%",
        display:"flex",
        flexDirection:"row",
        width:"100%",
        justifyContent:"space-evenly"
    },
    clickText:{
        textAlign:"center",
        marginTop:"10%",
    }
  });
