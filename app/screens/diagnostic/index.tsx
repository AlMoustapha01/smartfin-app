import { Text, View } from "../../../components/Themed";
import {
  ScrollView,
  StyleSheet,
  useColorScheme,
  TouchableOpacity,
  KeyboardAvoidingView,
  
} from "react-native";
import Colors from "../../../constants/Colors";
import { useState } from "react";
import SituationFamilial from "./situation_familial";
import EntreeArgent from "./entree_argent";
import SortieArgent from "./sortie_argent";
import Dettes from "./dettes";
import Resultat from "./resultat";
import * as Crypto from "expo-crypto";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function Diagnosticscreen() {
  const colorScheme = useColorScheme();
  const [currentStep, setCurrentStep] = useState(1);
  const steps = [
    {
      id: 1,
      title: "Situation familiale",
      content: <SituationFamilial />,
    },
    {
      id: 2,
      title: "Vos entrées d'argent",
      content: <EntreeArgent />,
    },
    {
      id: 3,
      title: "Vos sorties d'argent",
      content: <SortieArgent />,
    },
    {
      id: 4,
      title: "Vos dettes",
      content: <Dettes />,
    },
    {
      id: 5,
      title: "Résultat du diagnostic financier",
      content: <Resultat />,
    },
  ];
  return (
    <>
      <KeyboardAwareScrollView
        style={{
          ...styles.container,
          backgroundColor: Colors[colorScheme ?? "light"].backgroundHome,
        }}
      >
        <View style={{ backgroundColor: "transparent", padding: 15 }}>
          <Text style={{ padding: 8 }}>
            {steps.map(
              (st) =>
                st.id === currentStep && (
                  <>
                    <Text
                      style={{
                        textTransform: "capitalize",
                        fontWeight: "bold",
                        fontSize: 18,
                      }}
                    >
                      étape {st.id} :
                    </Text>{" "}
                    <Text
                      style={{ fontSize: 18, fontWeight: "500", color: "gray" }}
                    >
                      {st.title}
                    </Text>
                  </>
                )
            )}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              backgroundColor: "transparent",
              gap: 4,
              marginTop: 15,
            }}
          >
            <View
              key={Crypto.getRandomBytes(20)[0]}
              style={{
                paddingTop: 4,
                paddingBottom: 4,
                paddingLeft: 10,
                paddingRight: 10,
                backgroundColor: currentStep == 1 ? "blue" : "gray",
                width: 70,
                borderRadius: 10,
              }}
            />
            <View
              key={Crypto.getRandomBytes(30)[0]}
              style={{
                paddingTop: 4,
                paddingBottom: 4,
                paddingLeft: 10,
                paddingRight: 10,
                backgroundColor: currentStep == 2 ? "blue" : "gray",
                width: 70,
                borderRadius: 10,
              }}
            />
            <View
              key={Crypto.getRandomBytes(40)[0]}
              style={{
                paddingTop: 4,
                paddingBottom: 4,
                paddingLeft: 10,
                paddingRight: 10,
                backgroundColor: currentStep == 3 ? "blue" : "gray",
                width: 70,
                borderRadius: 10,
              }}
            />
            <View
              key={Crypto.getRandomBytes(50)[0]}
              style={{
                paddingTop: 4,
                paddingBottom: 4,
                paddingLeft: 10,
                paddingRight: 10,
                backgroundColor: currentStep == 4 ? "blue" : "gray",
                width: 70,
                borderRadius: 10,
              }}
            />
            <View
              key={Crypto.getRandomBytes(60)[0]}
              style={{
                paddingTop: 4,
                paddingBottom: 4,
                paddingLeft: 10,
                paddingRight: 10,
                backgroundColor: currentStep == 5 ? "blue" : "gray",
                width: 70,
                borderRadius: 10,
              }}
            />
          </View>
        </View>
        
          <ScrollView>
            <KeyboardAvoidingView>
              {steps.map(
                (st) =>
                  st.id === currentStep && (
                    <View key={Crypto.getRandomBytes(20)[0]}>{st.content}</View>
                  )
              )}
            </KeyboardAvoidingView>

          </ScrollView>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "center",
            paddingBottom: 20,
            gap: 20,
            backgroundColor: Colors[colorScheme ?? "light"].backgroundHome,
          }}
        >
          {currentStep !== 1 && (
            <TouchableOpacity
              onPress={() => setCurrentStep(currentStep - 1)}
              style={{
                ...styles.button,
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "white", fontSize: 20, fontWeight: "600" }}>
                Retour
              </Text>
            </TouchableOpacity>
          )}

          {currentStep !== 5 ? (
            <TouchableOpacity
              onPress={() => setCurrentStep(currentStep + 1)}
              style={{
                ...styles.button,
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "white", fontSize: 20, fontWeight: "600" }}>
                Suivant
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={{
                ...styles.button,
                backgroundColor: "#23A20D",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "white", fontSize: 20, fontWeight: "600" }}>
                Terminer
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </KeyboardAwareScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#0C1179",
    padding: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignSelf: "flex-end",
    width: "45%",
  },
});
