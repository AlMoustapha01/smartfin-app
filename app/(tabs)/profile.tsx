import { StyleSheet, useColorScheme, FlatList, TouchableOpacity } from 'react-native';

import { Text, View } from '../../components/Themed';
import Colors from '../../constants/Colors';
import { MaterialCommunityIcons, Octicons, Feather } from '@expo/vector-icons';

export default function TabTreeScreen() {
  const colorScheme = useColorScheme();
  const data= [
    {
      id:1,
      icon:<MaterialCommunityIcons name="email-sync-outline" size={35} color="black" />,
      title:"Modifier l’adresse mail",
      description:"Assurez-vous de recevoir toutes vos notifications"
    },
    {
      id:2,
      icon:<MaterialCommunityIcons name="shield-key" size={35} color="black" />,
      title:"Modifier le mot de passe",
      description:"Sécurisez votre compte avec des identifiants forts"
    },
    {
      id:3,
      icon:<Octicons name="share-android" size={35} color="black" />,
      title:"Invitez vos amis",
      description:"Partagez l’application"
    },
    {
      id:4,
      icon:<MaterialCommunityIcons name="contacts" size={35} color="black" />,
      title:"Contactez nous",
      description:"Nous répondons à vos préoccupations"
    }
  ]
  const Item = (data:{id:number,Icon:JSX.Element,title:string,description:string})=>(
    <TouchableOpacity style={styles.item}>
      <View style={{justifyContent:"center"}}>
        {data.Icon}
      </View>
      <View style={{flexShrink:1,marginRight:20}}>
        <Text style={{fontSize:19,fontWeight:"bold"}}>
          {data.title}
        </Text>
        <Text>
          {data.description}
        </Text>
      </View>
      <View style={{flexDirection:"row", position:"absolute", right:5,top:'50%', justifyContent:"center"}}>
        <Feather name="chevron-right" size={35} color="black" />
      </View>
    </TouchableOpacity>
  )
  return (
    <View style={{...styles.container,backgroundColor:Colors[colorScheme??'light'].backgroundHome}}>
      <Text style={styles.title}>Profile utilisateur</Text>
      <FlatList
              data={data}
              renderItem={({item}) => <Item id={item.id} title={item.title} description={item.description} Icon={item.icon} />}
              keyExtractor={item => item.title}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:40,
    padding:20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom:20
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  item:{flexDirection:"row",borderRadius:10,backgroundColor:"white",gap:10,paddingTop:15,paddingBottom:15,paddingLeft:7,paddingRight:7,marginBottom:10}
});
