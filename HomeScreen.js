import React from "react";
import Bolos from "../components/bolos";
import { useNavigation } from "@react-navigation/native";

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { auth } from "../firebase";

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("./assets/banner.jpg")} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>Autocar</Text>
          <Text style={[styles.text, { color: "#CECECF" }]}>◉</Text>
          <Text style={[styles.text, { color: "#CECECF" }]}>
            Serviços automotivos
          </Text>
          <TouchableOpacity
            style={{ position: "absolute", right: 0, alignSelf: "center" }}
          >
            <MaterialIcons
              name="filter-list"
              size={24}
              color="#000"
            ></MaterialIcons>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.line} />

      <ScrollView>
        <Text style={styles.text}>Lançamentos</Text>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Bolos
            img={require("./assets/1.png")}
            cost="De 1 a 3 horas"
            onClick={() => navigation.navigate("Detail1")}
          >
            Troca de pneus
          </Bolos>
          <Bolos
            img={require("./assets/2.png")}
            cost="De 1 a 5 dias"
            onClick={() => navigation.navigate("Detail")}
          >
            Revisao automotiva
          </Bolos>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Bolos
            img={require("./assets/3.png")}
            cost="De 1 a 3 dias"
            onClick={() => navigation.navigate("Detail2")}
          >
            Revisao em motocicletas
          </Bolos>

          <Bolos
            img={require("./assets/4.png")}
            cost="De 5 a 10 dias"
            onClick={() => navigation.navigate("Detail3")}
          >
            Pintura veicular
          </Bolos>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#0782F9",
    width: "60%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 40,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  image: {
    width: "100%",
  },
  textContainer: {
    flexDirection: "row",
    marginVertical: "5%",
    marginHorizontal: "5%",
  },
  text: {
    fontSize: 26,
    marginHorizontal: "1%",
  },
  line: {
    borderBottomColor: "#D8d8d8",
    borderBottomWidth: 2,
  },
});
