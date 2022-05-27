import React, {useState} from 'react'
import { Text,StyleSheet, View, TouchableOpacity, TextInput} from 'react-native'
import LogoHeader from "../assets/LogoHeader";
import BackButton from '../assets/BackButton';
import Exclaim from '../assets/Exclaim';
import Dot from '../assets/Dot';
import { Formik } from 'formik';
import { oilBasedAI } from '../Logic/OilBasedAI';
import {waterBasedAI} from  '../Logic/WaterBasedAI'
export default function Form({route, navigation}) {
  const [showResult, setShowResult] = useState(false)
  const [answer, setAnswer] = useState('');
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={()=>{navigation.goBack()}}>
          <BackButton color={route.params.color}/>
        </TouchableOpacity>
        <View style={styles.logoDiv}>
          <LogoHeader color={route.params.color}/>
          {route.params.color == "#4473B7"? <Text style={styles.headerTextBlue}>Water-based Mud</Text>
          :<Text style={styles.headerTextYellow}>Oil-based Mud</Text> }
        </View>
          {
            showResult ? 
            <View style={styles.result}>
              <View style={route.params.color === "#4473B7" ? styles.resultCardBlue:styles.resultCardYellow}>
                <Text style={route.params.color === "#4473B7" ? styles.resultfinalBlue:styles.resultfinalYellow}> <Dot color={route.params.color}/> Final PV</Text>
                <Text style={route.params.color === "#4473B7" ? styles.resultcpBlue:styles.resultcpYellow}>{answer}  <Text style={route.params.color === "#4473B7" ? styles.resultcpaBlue:styles.resultcpaYellow}>cP</Text></Text>
              </View>
            </View>
            :
            <>
              <View style={styles.topTextDiv}>
            <Exclaim color={route.params.color}/>
            <Text style={styles.topText}>Kindly check that the units are exact and correspond accordingly</Text>
          </View>

          <Formik
            initialValues={{ pressure: '', temperature:'', pvi:''}}
            onSubmit={values => {
              if(values.pressure !=='' & values.temperature !=='' & values.pvi !==''){
                const data = {
                  pressure: values.pressure,
                  temperature: values.temperature,
                  pvi: values.pvi,
                }
                // console.log(data, "data")
                setShowResult(true)
                  if (route.params.color === "#4473B7"){
                    console.log(waterBasedAI(values.pressure,values.temperature,values.pvi), "water based result")
                    setAnswer(waterBasedAI(values.pressure,values.temperature,values.pvi))
                }
                else if (route.params.color === "#EDC152"){
                    console.log(oilBasedAI(values.pressure,values.temperature,values.pvi), "oil based result")
                    setAnswer(oilBasedAI(values.pressure,values.temperature,values.pvi))
                }
              }
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <View>
                <View>
                  <Text style={styles.formText}>Pressure (psi)</Text>
                  <TextInput
                    onChangeText={handleChange('pressure')}
                    onBlur={handleBlur('pressure')}
                    value={values.pressure}
                    style={styles.formInput}
                    placeholder="e.g. 1035"
                    maxLength={5}
                    autoCapitalize='none'
                    autoCorrect={false}
                  />
                </View>

                <View>
                  <Text style={styles.formText}>Temperature (Celcius)</Text>
                  <TextInput
                    onChangeText={handleChange('temperature')}
                    onBlur={handleBlur('temperature')}
                    value={values.temperature}
                    style={styles.formInput}
                    placeholder="e.g. 90"
                    maxLength={5}
                    autoCapitalize='none'
                    autoCorrect={false}
                  />
                </View>

                <View>
                  <Text style={styles.formText}>Initial Plastic Viscosity (cP)</Text>
                  <TextInput
                    onChangeText={handleChange('pvi')}
                    onBlur={handleBlur('pvi')}
                    value={values.pvi}
                    placeholder="e.g. 3.5"
                    style={styles.formInput}
                    maxLength={5}
                    autoCapitalize='none'
                    autoCorrect={false}
                  />
                </View>

                  {route.params.color == "#4473B7"?
                    <TouchableOpacity 
                      disabled={values.pvi == '' || values.pressure == '' || values.temperature == '' ? true : false}
                      style={values.pvi == '' || values.pressure == '' || values.temperature == '' ? styles.buttonContainerAsh : styles.buttonContainer}
                      onPress={handleSubmit}
                    >
                      <Text style={styles.buttonText}>Calculate</Text>
                  </TouchableOpacity>
                    :
                    <TouchableOpacity 
                      disabled={values.pvi == '' || values.pressure == '' || values.temperature == '' ? true : false}
                      style={values.pvi == '' || values.pressure == '' || values.temperature == '' ? styles.buttonContainerAsh : styles.buttonContainerYellow}
                      onPress={handleSubmit}
                    >
                      <Text style={styles.buttonText}>Calculate</Text>
                    </TouchableOpacity>
                  }
                    <Text style={styles.switchText}>Switch to <Text style={route.params.color == "#4473B7"? styles.oilText :styles.waterText} onPress={()=>{navigation.navigate("Form",{color: route.params.color == "#4473B7"? "#EDC152" :"#4473B7"})}}>{route.params.color == "#4473B7"? "Oil" :"Water"}-based mud</Text></Text>
              </View>
              
            )}
          </Formik>

            </>
          }
        </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:"#fff",
      padding:"10%",
      paddingTop:"15%"
    },
    logoDiv:{
      marginTop:"15%",
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignContent:"center",
      alignItems:"center"
    },
    result:{
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignContent:"center",
      alignItems:"center",
      height:"70%",
    },
    topTextDiv:{
      marginTop:"15%",
      display:"flex",
      flexDirection:"row",
      alignContent:"center",
      alignItems:"center"
    },
   topText:{
      fontSize:15,
      color: "#061428",
      marginLeft:20,
    },
  
    headerTextBlue:{
      fontSize:18,
      color: "#4473B7",
    },
    headerTextYellow:{
      fontSize:18,
      color: "#EDC152",
    },
    buttonContainer: {
      width:"70%",
      marginTop:35,
      height:60,
      backgroundColor:"#4473B7",
      borderRadius: 5,
      flexDirection:'column',
      justifyContent:'center',
      alignItems:"center",
      marginLeft:"auto",
      marginRight:"auto",
    },
    buttonContainerYellow: {
      width:"70%",
      marginTop:35,
      height:60,
      backgroundColor:"#EDC152",
      borderRadius: 5,
      flexDirection:'column',
      justifyContent:'center',
      alignItems:"center",
      marginLeft:"auto",
      marginRight:"auto",
    },
    buttonContainerAsh: {
      width:"70%",
      marginTop:35,
      height:60,
      backgroundColor:"#E5E5E5",
      borderRadius: 5,
      flexDirection:'column',
      justifyContent:'center',
      alignItems:"center",
      marginLeft:"auto",
      marginRight:"auto",
    },

    buttonText:{
      color:"#fff",
      fontSize: 16,
    },
    formText:{
      fontSize: 18,
      marginTop:20
    },
    formInput:{
      background: "#FFFFFF",
      borderWidth: 1,
      borderColor:"#DADCE0",
      borderRadius: 4,
      height: 60,
      padding:10,
      paddingLeft: 30,
      fontSize: 20,
      color:"#818181",
      marginTop:10
    },
    switchText:{
      color:"#818181",
      fontSize: 16,
      textAlign:"center",
      marginTop:30
    },
    oilText:{
      color:"#E5AA33",
      fontWeight:"500"
    },
    waterText:{
      color:"#4473B7",
      fontWeight:"500"
    },
    resultCardBlue:{
      backgroundColor: "#EBF2FC",
      borderRadius: 20,
      padding:"5%",
      paddingTop:"10%",
      paddingBottom:"10%",
    },
    resultCardYellow:{
      backgroundColor: "#FEF9EE",
      borderRadius: 20,
      padding:"5%",
      paddingTop:"10%",
      paddingBottom:"10%",
    },
    resultfinalBlue:{
      fontSize:20,
      color:"#4473B7",
      marginBottom:15,
    },
    resultfinalYellow:{
      fontSize:20,
      color:"#EDC152",
      marginBottom:15,
    },
    resultcpBlue:{
      fontSize:50,
      color:"#4473B7",
      fontWeight:"bold"
    },
    resultcpYellow:{
      fontSize:50,
      color:"#EDC152",
      fontWeight:"bold"
    },
    resultcpaBlue:{
      fontSize:30,
      color:"#4473B7",
      fontWeight:"300"
    },
    resultcpaYellow:{
      fontSize:30,
      color:"#EDC152",
      fontWeight:"300"
    }
  });