import { StyleSheet, useColorScheme,FlatList,TouchableOpacity} from 'react-native';

import { Text, View } from '../../components/Themed';
import Colors from '../../constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';

export default function TabTantieAnnieScreen() {
  const colorScheme = useColorScheme();
  const data1 = [
    {
      id:1,
      content:"Diagnostic Financier"
    },
    {
      id:2,
      content:"Conception de budget"
    },
    {
      id:3,
      content:"10.000FCFA"
    },
    {
      id:4,
      content:"Session de 1H30min"
    }
  ]
  const data2 = [
    {
      id:1,
      content:"Offre flash*"
    },
    {
      id:2,
      content:"Bilan Patrimonial"
    },
    {
      id:3,
      content:"Plan d’épargne ou d’investissement"
    },
    {
      id:4,
      content:"Recherche et utilisation de crédits"
    },
    {
      id:5,
      content:"A partir de 49.000FCFA"
    },
    {
      id:6,
      content:"6H de suivi sur 02 mois"
    }
  ]

  const Item = (data:{id:number,content:string})=> (
    <View style={{flexDirection:"row",gap:7,backgroundColor: 'transparent',padding:5}}>
      <View style={{backgroundColor:'white',paddingTop:7,paddingBottom:7,paddingRight:12,paddingLeft:12,borderRadius:30}}>
        <Text>{data.id}</Text>
      </View>
      <Text style={{color:'white',padding:7}}>{data.content}</Text>
    </View>
  )

  
  return (
    <View style={{...styles.container,backgroundColor:Colors[colorScheme??'light'].backgroundHome}}>
      <Text style={styles.title}>Découvrez nos  offres</Text>
      <View style={styles.card1}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#1B1F82', '#4D4D9B']}
        style={{padding:10,borderRadius:10}}
      >
          <Text style={{color:"white",fontSize:16,marginBottom:10}}>Adaptée  aus personnes en grande diffficultés dans la gestion de leur finances</Text>
          <Text style={{color:"white",fontSize:25,fontWeight:'bold',marginTop:10,marginBottom:10}}>SMARTFIN FLASH</Text>

          <FlatList
              data={data1}
              renderItem={({item}) => <Item id={item.id} content={item.content} />}
              keyExtractor={item => item.content}
          />
          <TouchableOpacity style={{...styles.button,marginTop:-45}}>
            <Text style={{fontSize:17,color:"white",fontWeight:"bold"}}>
              Détails
            </Text>
            <Feather name="chevron-right" size={24} color="white" />
          </TouchableOpacity>
      </LinearGradient>
      </View>
      <View style={styles.card2}>
        <LinearGradient
          // Background Linear Gradient
          colors={['#1CAF07', '#77CF69']}
          style={{padding:10,borderRadius:10}}
        >
            <Text style={{color:"white",fontSize:16,marginBottom:10}}>Adaptée  aus personnes en grande diffficultés dans la gestion de leur finances</Text>
            <Text style={{color:"white",fontSize:25,fontWeight:'bold',marginTop:10,marginBottom:10}}>SMARTFIN FLASH</Text>

            <FlatList
              data={data2}
              renderItem={({item}) => <Item id={item.id} content={item.content} />}
              keyExtractor={item => item.content}
            />
            <TouchableOpacity style={{...styles.button,marginTop:-20,backgroundColor:"#539165"}}>
              <Text style={{fontSize:17,color:"white",fontWeight:"bold"}}>
                Détails
              </Text>
              <Feather name="chevron-right" size={24} color="white" />
            </TouchableOpacity>
           
        </LinearGradient>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:40,
    padding:20,
    gap:12
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  card1:{
    flex:0.4,
  },
  card2:{
    flex:0.4,
    marginTop:10
  },
  button:{
    flexDirection:'row',backgroundColor:"#0C1179",
    padding:10,borderRadius:20,width:'40%',
    justifyContent:'center',alignItems:"center",
    alignSelf:'flex-end'
  }
});
