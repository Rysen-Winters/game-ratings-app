import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  Pressable,
} from "react-native";

const icon = require("./assets/icon.png");

export default function App() {
  const [timesPressed, setTimesPressed] = useState(0);

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://image.api.playstation.com/vulcan/ap/rnd/202512/1205/e0364b3089bbbad7e0a04f87cab6c273172515a134efdf88.png",
        }}
        style={{
          width: 100,
          height: 200,
          resizeMode: "contain",
          borderRadius: 25,
        }}
      ></Image>
      <Text
        style={{
          color: "#bac2de",
        }}
      >
        Game Ratings Apps
      </Text>
      <Button title="Pulsa aqui" onPress={() => alert("Hola")}></Button>
      <TouchableHighlight
        underlayColor="#94e2d5"
        style={{
          backgroundColor: "white",
          borderRadius: 25,
          margin: 5,
          width: 150,
          height: 50,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => alert("Texto de prueba Touchable Hightlight")}
      >
        <Text style={{ color: "#bac2de" }}>Otro botón</Text>
      </TouchableHighlight>
      <TouchableOpacity
        underlayColor="#94e2d5"
        style={{
          backgroundColor: "white",
          borderRadius: 25,
          margin: 5,
          width: 150,
          height: 50,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => alert("Texto de prueba Touchable Opacity")}
      >
        <Text style={{ color: "#bac2de" }}>Otro otro botón</Text>
      </TouchableOpacity>
      <Pressable
        onPress={() => {
          setTimesPressed((current) => current + 1);
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "rgb(210, 230, 255)" : "white",
            borderRadius: 25,
            margin: 5,
            width: 150,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
          },
          styles.wrapperCustom,
        ]}
      >
        {({ pressed }) => (
          <Text style={styles.text}>{pressed ? "¡Pulsado!" : "Púlsame"}</Text>
        )}
      </Pressable>
      <Text style={{ color: "#bac2de" }}>
        {" "}
        {timesPressed
          ? `¡Lo has pulsado ${timesPressed} veces!`
          : "No has pulsado ese botón :("}
      </Text>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181825",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#bac2de",
  },
});
