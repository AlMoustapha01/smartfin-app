import { StyleSheet, useColorScheme, Image } from 'react-native';

import { Text, View } from '../../components/Themed';
import Colors from '../../constants/Colors';

export default function TabDocumentsScreen() {
    const colorScheme = useColorScheme()
  return (
    <View style={{...styles.container,backgroundColor:Colors[colorScheme??'light'].backgroundHome}}>
      <Text style={styles.title}>Documents enrégistrés</Text>
      <View style={{...styles.activite,backgroundColor:Colors[colorScheme??'light'].backgroundHome}}>
            <Image source={require("../../assets/images/empty-box.png")}/>
            <Text style={{fontSize:15,fontWeight:'500'}}>Aucune activité disponible</Text>
      </View>
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
  },
  
  activite: {
    flex:0.9,
    paddingTop:20,
    paddingBottom:20,
    justifyContent:'center',
    alignItems:'center'

  },
});
