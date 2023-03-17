import { View, Text } from "../../../components/Themed";
import { StyleSheet, useColorScheme,TouchableOpacity } from "react-native";
import Colors from "../../../constants/Colors";
import { Feather } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import { useNavigation } from "expo-router";

export default function Resultat() {
    const router = useRouter();
    const colorScheme = useColorScheme();
  return (
    <>
      <View
        style={{
          ...styles.container,
          backgroundColor: Colors[colorScheme ?? "light"].backgroundHome,
        }}
      >
        <Text style={styles.title}>Votre bilan de santé financière</Text>
        <View style={{flexDirection:'row',padding:10,borderRadius:12,marginBottom:20}}>
            <View style={{width:'60%'}}>
                <Text style={{fontSize:18,fontWeight:"bold"}}>Total revenu</Text>
                <Text style={{fontSize:16,fontWeight:"400",flexShrink:1}}>Salaire et autres entrées d'argent</Text>
            </View>
            <View style={{flexDirection:'column',justifyContent:'center',width:'40%', padding:10, borderRadius:15,backgroundColor:Colors[colorScheme ?? "light"].backgroundHome}}>
                <Text style={{fontSize:18,fontWeight:"bold"}}>710 000 <Text style={{fontSize:15,fontWeight:"300"}}>FCFA</Text></Text>
            </View>
        </View>
        <View style={{flexDirection:'row',padding:10,borderRadius:12,marginBottom:20}}>
            <View style={{width:'60%'}}>
                <Text style={{fontSize:18,fontWeight:"bold"}}>Total charge</Text>
                <Text style={{fontSize:16,fontWeight:"400",flexShrink:1}}>Dettes et autres sorties d'argent</Text>
            </View>
            <View style={{flexDirection:'column',justifyContent:'center',width:'40%', padding:10, borderRadius:15,backgroundColor:Colors[colorScheme ?? "light"].backgroundHome}}>
                <Text style={{fontSize:18,fontWeight:"bold"}}>410 000 <Text style={{fontSize:15,fontWeight:"300"}}>FCFA</Text></Text>
            </View>
        </View>
        <View style={{flexDirection:'row',padding:10,borderRadius:12,marginBottom:20}}>
            <View style={{width:'60%'}}>
                <Text style={{fontSize:18,fontWeight:"bold"}}>Reste à vivre</Text>
                <Text style={{fontSize:16,fontWeight:"400",flexShrink:1}}>Après retrait des charges des revenus</Text>
            </View>
            <View style={{flexDirection:'column',justifyContent:'center',width:'40%', padding:10, borderRadius:15,backgroundColor:Colors[colorScheme ?? "light"].backgroundHome}}>
                <Text style={{fontSize:18,fontWeight:"bold"}}>275 000 <Text style={{fontSize:15,fontWeight:"300"}}>FCFA</Text></Text>
            </View>
        </View>
        <View style={{backgroundColor: Colors[colorScheme ?? "light"].backgroundHome,flexDirection:"row",justifyContent:'center',alignItems:'center',gap:12, marginTop:10,marginBottom:10}}>
            <Text style={{fontSize:16,fontWeight:"bold"}}>Découvrez nos offres {'>'}</Text>
            
            <TouchableOpacity style={{...styles.button}} onPress={()=> router.push('/tantie_annie')}>
                <Text style={{fontSize:15,color:"white",fontWeight:"bold"}}>
                    SMARTFIN ZEN
                </Text>
            </TouchableOpacity>
            
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    paddingLeft: 20,
    paddingRight: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    paddingBottom: 25,
    paddingTop: 25,
    flexShrink: 1,
  },
  button:{
    flexDirection:'row',backgroundColor:"#0C1179",
    padding:10,borderRadius:20,
    justifyContent:'center',alignItems:"center",
    alignSelf:'flex-end'
  }
});
