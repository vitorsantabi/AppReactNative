import React from "react";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";

export default function TheBQ(): React.JSX.Element {
  const { width } = useWindowDimensions();

  // Calcula dimensões responsivas
  const isSmallScreen = width < 400;
  const isMediumScreen = width >= 400 && width < 768;

  const fontSize = isSmallScreen ? 20 : isMediumScreen ? 22 : 24;

  return (
    <View style={styles.container}>
      <Text style={[styles.text, { fontSize }]}>Olá Mundo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
  },
});
