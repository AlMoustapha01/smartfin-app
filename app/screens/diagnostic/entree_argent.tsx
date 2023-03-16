import { View,Text } from "../../../components/Themed";
import { StyleSheet,TextInput, useColorScheme } from 'react-native';
import Colors from "../../../constants/Colors";

export default function EntreeArgent(){
    const colorScheme= useColorScheme();
    return(
        <>
            <View style={{
          ...styles.container,
          backgroundColor: Colors[colorScheme ?? "light"].backgroundHome,
        }}>
                <Text style={styles.title}>
                        Renseignez vos entrées par catégories
                </Text>
                <View>
                    <View style={{flexDirection:'row'}}>
                        <TextInput></TextInput>
                        <Text></Text>
                    </View>
                </View>
            </View>
        </>
    )
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
        paddingTop:25,
        flexShrink: 1,
    },
    
  });
  