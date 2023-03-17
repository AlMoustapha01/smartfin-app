import { useState } from "react";
import { StyleSheet, useColorScheme, TouchableOpacity } from "react-native";

import { View, Text } from "../../../components/Themed";
import Colors from "../../../constants/Colors";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

export default function SituationFamilial() {
  const colorScheme = useColorScheme();
  const [type, setType] = useState(1);
  const [nbFamille, setNbFamille] = useState(0);
  return (
    <>
      <View
        style={{
          ...styles.container,
          backgroundColor: Colors[colorScheme ?? "light"].backgroundHome,
        }}
      >
        <View
          style={{
            marginBottom: 15,
            backgroundColor: Colors[colorScheme ?? "light"].backgroundHome,
          }}
        >
          <Text style={styles.title}>
            Pour qui aimeriez-vous faire le bilan?
          </Text>
          <View
            style={{
              ...styles.section1,
              backgroundColor: Colors[colorScheme ?? "light"].backgroundHome,
            }}
          >
            <TouchableOpacity
              style={{
                ...styles.switcher,
                paddingLeft:50,
                paddingRight:50,
                backgroundColor: type === 1 ? "green" : "white",
              }}
              onPress={() => setType(1)}
            >
              <Ionicons
                name="person-outline"
                size={50}
                color={type === 1 ? "white" : "black"}
              />
              <Text
                style={{
                  color: type === 1 ? "white" : "black",
                  fontSize: 17,
                  fontWeight: "bold",
                }}
              >
                Pour moi
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...styles.switcher,
                backgroundColor: type === 2 ? "green" : "white",
              }}
              onPress={() => setType(2)}
            >
              <Ionicons
                name="people-outline"
                size={50}
                color={type === 2 ? "white" : "black"}
              />
              <Text
                style={{
                  color: type === 2 ? "white" : "black",
                  fontSize: 17,
                  fontWeight: "bold",
                }}
              >
                Pour mon couple
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            backgroundColor: Colors[colorScheme ?? "light"].backgroundHome,
            paddingBottom:20
          }}
        >
          <Text style={styles.title}>
            En vous incluant, combien de personnes habitent sous votre toit?
          </Text>
          <View
            style={{
              ...styles.section1,
              backgroundColor: Colors[colorScheme ?? "light"].backgroundHome,
              gap: 10,
            }}
          >
            <TouchableOpacity
              style={styles.operation}
              onPress={()=> nbFamille>=1?setNbFamille(nbFamille-1):setNbFamille(nbFamille)}
            >
              <FontAwesome name="minus" size={24} color="black" />
            </TouchableOpacity>
            <View
              style={styles.operationContent}
            >
                <Text style={{fontSize:25,fontWeight:'600'}}>{nbFamille}</Text>
            </View>
            <TouchableOpacity
              style={styles.operation} onPress={()=> setNbFamille(nbFamille+1)}
            >
              <FontAwesome name="plus" size={24} color="black" />
            </TouchableOpacity>
          </View>
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
  section1: {
    flex:0.5,
    flexDirection: "row",
    justifyContent: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    paddingBottom: 25,
    paddingTop:25,
    flexShrink: 1,
  },
  operation: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "gray",
    borderRadius: 5,
  },
  operationContent:{
    flexDirection: "row",
    justifyContent: "center",
    padding: 20,
    paddingLeft: 60,
    paddingRight: 60,
    width:'65%',
    backgroundColor: "white",
    borderRadius: 10,
  },
  switcher: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    paddingLeft: 25,
    paddingRight: 25,
    borderRadius: 15,
  },
  button: {
    backgroundColor: "#0C1179",
    padding: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignSelf: "flex-end",
    width: "45%",
  },
});
