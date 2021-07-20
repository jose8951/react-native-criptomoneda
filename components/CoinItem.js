import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const CoinItem = ({ coin }) => {
  return (
    <View style={styles.container}>
      <View style={styles.coinName}>
        <Image style={styles.image} source={{ uri: coin.image }} />

        <View style={styles.containerNames}>
          <Text style={styles.text}>{coin.name}</Text>
          <Text style={styles.textSymbol}>{coin.symbol}</Text>
        </View>
      </View>

      <View>
        <Text style={styles.textPrice}>$ {coin.current_price}</Text>
        <Text
          style={[
            styles.pricePercentage,
            coin.price_change_percentage_24h > 0
              ? styles.priceUp
              : styles.priceDown,
          ]}
        >
          {coin.price_change_percentage_24h}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#121212",
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerNames: {
    marginLeft: 10,
  },

  coinName: {
    flexDirection: "row",
  },
  image: {
    width: 30,
    height: 30,
  },
  text: {
    color: "#fff",
  },
  textSymbol: {
    color: "#535353",
    textTransform: "uppercase",
  },
  pricePercentage: {
    textAlign: "right",
  },
  textPrice: {
    textAlign: "right",
    color: "#fff",
  },
  priceUp: {
    color: "#00b589",
  },
  priceDown: {
    color: "#fc4422",
  },
});

export default CoinItem;
