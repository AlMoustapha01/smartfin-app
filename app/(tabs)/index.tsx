import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { StyleSheet, useColorScheme, Image, TouchableOpacity } from 'react-native';

import { Text, View } from '../../components/Themed';
import Colors from '../../constants/Colors';

export default function TabOneScreen() {
  const colorScheme = useColorScheme();
  return (
    <View style={{...styles.container,backgroundColor:Colors[colorScheme??'light'].backgroundHome}}>
        <View style={{...styles.diagnostic,backgroundColor:Colors[colorScheme??'light'].backgroundHome}}>
          <Text style={styles.title}>Diagnostic financier</Text>
          <Link href={'/screens/diagnostic'} asChild>
            <TouchableOpacity style={{...styles.diagnostic_action, backgroundColor:Colors[colorScheme??'light'].homeBlueOne,flexShrink:1}}>
                <View style={{padding:10,backgroundColor:'white',borderRadius:5,marginRight:5}}>
                  <Ionicons name="wallet-outline" size={30} color={Colors[colorScheme??'light'].homeBlueOne} />
                </View>
                <Text style={{fontSize:18,padding:2,color:Colors[colorScheme??'light'].home_text,flexShrink:1}}>Obtenez une analyse de votre situation financière actuelle en quelques clics</Text>
                <Feather name="chevron-right" size={24} color="white" />
            </TouchableOpacity>
          </Link>
          
        </View>
        <View style={{...styles.diagnostic,backgroundColor:Colors[colorScheme??'light'].backgroundHome}}>
          <Text style={styles.title}>Simulateur de credit</Text>
          <View style={{...styles.simulateur,backgroundColor:Colors[colorScheme??'light'].backgroundHome,gap:4}}>
              <TouchableOpacity style={styles.bloc_simulateur}>
                <View style={{padding:15,backgroundColor:Colors[colorScheme??'light'].simulateurGreen,borderRadius:30,marginRight:5}}>
                    <Ionicons name="calendar" size={24} color="#5D9C59" />
                </View>
                <Text style={{fontSize:14,textAlign:'center',marginTop:5}}>Calcul des mensualités de remboursement</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.bloc_simulateur}>
                <View style={{padding:10,backgroundColor:Colors[colorScheme??'light'].simulateurOrange,borderRadius:30,marginRight:5}}>
                  <Ionicons name="ios-speedometer" size={35} color="#FFB100" />
                </View>
                <Text style={{fontSize:14,textAlign:'center',marginTop:5}}>Estimation du montant à emprunter</Text>
              </TouchableOpacity>
          </View>
        </View>
        <View style={{...styles.diagnostic,backgroundColor:Colors[colorScheme??'light'].backgroundHome}}>
          <Text style={styles.title}>Activité récente</Text>
          <View style={{...styles.activite,backgroundColor:Colors[colorScheme??'light'].backgroundHome}}>
            <Image source={require("../../assets/images/empty-box.png")}/>
            <Text style={{fontSize:15,fontWeight:'500'}}>Aucune activité disponible</Text>
          </View>
        </View>
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:7
  },
  diagnostic:{
    flex:0.3,
    padding:12,
  },
  diagnostic_action:{
   flexDirection:'row',
   justifyContent:'center',
   alignItems:'center',
   borderRadius:10,
   paddingTop:30,
   paddingBottom:30,
   paddingLeft:10,
   paddingRight:10,
   marginTop:10
  },
  simulateur: {
    flexDirection:'row',
    paddingTop:20,
    paddingBottom:20,

  },
  activite: {
    paddingTop:20,
    paddingBottom:20,
    justifyContent:'center',
    alignItems:'center'

  },
  bloc_simulateur:{
    flexDirection:'column',
    flex:0.5,
    borderRadius:12,
    justifyContent:'center',
    alignItems:'center',
    height:'100%',
    padding:10,
    marginLeft:3,
    marginRight:3,
    flexShrink:1,
    backgroundColor:"white"
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom:4
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
