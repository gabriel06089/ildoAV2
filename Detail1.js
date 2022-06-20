import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import Ingredientes from "../components/ingredientes";
import Footer from "../components/footer";
import Dot from "../components/dot";
import Button from "../components/button";

export default function Detail1({ navigation }) {
  navigation.setOptions({
    headerTitle: "Revisao Automotiva",
  });

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require("./assets/detail2.png")}
        style={styles.image}
        resizeMode="cover"
      />

      <View>
        <View>
          <Text style={[styles.title, { fontSize: 24 }]}>Revisão</Text>
        </View>
        <View opacity={0.4}>
          <Text style={[styles.title, { fontSize: 30 }]}>
            Tempo estimado de 1 a 5 dias uteis.
          </Text>
        </View>

        <View style={styles.dotContainer}>
          <Dot color="#2379f4" />
          <Dot color="#fb6e53" />
          <Dot color="#ddd" />
          <Dot color="#000" />
        </View>

        <View style={{ flexDirection: "row", width: "100%" }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Ingredientes bgColor="#17181a" color="#FFF">
              Revisão completa
            </Ingredientes>
            <Ingredientes>
              Troca de pneus
            </Ingredientes>
            <Ingredientes>
              Pintura
            </Ingredientes>
            <Ingredientes>
              Reparo automotivo
            </Ingredientes>
          </ScrollView>
        </View>

        <View style={styles.textContent}>
          <Text style={styles.textTitle}> 
            
          </Text>
          <Text style={styles.textContent}>Tá a fim de fazer uma revisão geral no seu carro, mas não tem ideia
            por onde começar? Afinal, são tantos itens que compõem um veículo
            que muitas vezes ficamos verdadeiramente “sem direção”. Antes de
            tudo, é importante que você saiba que manter a manutenção em dia
            evita problemas mecânicos e elétricos. Além disso, com o carro
            sempre revisado, seu desgaste diminui, o que facilita bastante na
            hora da venda, e também te ajuda a economizar mais tarde. </Text>
          <Text style={styles.textList}>Checamos todo o sistema de arrefecimento, assim como todos os liquidos a serem repostos como oleo e freio, checamos suas embreagem e filtro de ar, correia dentada, velas e Radiador</Text>
          <Text style={styles.textList}>Fazemos toda a verificação no sistema de freios e de suspensao</Text>
        </View>

        <Button />

        <View style={styles.line} />

        <Footer />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#FFF",
  },
  image: {
    width: "100%",
  },
  title: {
    paddingHorizontal: "2%",
  },
  dotContainer: {
    flexDirection: "row",
    marginVertical: "7%",
  },
  textContent: {
    fontSize: 16,
    lineHeight: 25,
    marginVertical: "2%",
    paddingHorizontal: "2%",
  },
  textTitle: {
    fontSize: 22,
    marginVertical: "2%",
  },
  textList: {
    fontSize: 16,
    lineHeight: 25,
  },
  line: {
    borderWidth: 1,
    borderBottomColor: "#DDD",
    marginVertical: "2%",
  },
});
