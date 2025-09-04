import { BlurView } from "expo-blur";
import React from "react";
import { Image, StyleSheet, Text, View, useWindowDimensions } from "react-native";

const icon = require("../assets/photos/icon.jpg");

export default function Icon(): React.JSX.Element {
  const { width } = useWindowDimensions();

  // Calcula dimensões responsivas
  const isSmallScreen = width < 400;
  const isMediumScreen = width >= 400 && width < 768;

  const iconSize = isSmallScreen ? 80 : isMediumScreen ? 90 : 100;
  const titleFontSize = isSmallScreen ? 28 : isMediumScreen ? 32 : 35;
  const subtitleFontSize = isSmallScreen ? 13 : isMediumScreen ? 14 : 15;
  const headerWidth = isSmallScreen ? width * 0.9 : "85%";
  const headerHeight = isSmallScreen ? 110 : isMediumScreen ? 120 : 130;

  return (
    <BlurView intensity={50} tint="extraLight" style={[styles.container, { width: headerWidth, height: headerHeight }]}>
      <Image
        source={icon}
        style={[
          styles.icon,
          {
            width: iconSize,
            height: iconSize,
            borderRadius: iconSize / 2
          }
        ]}
      />
      <View style={styles.textContainer}>
        <Text
          style={{
            color: "#fff",
            fontSize: titleFontSize,
            fontWeight: "bold",
            marginTop: 20,
            marginLeft: 20,
            textShadowColor: "rgba(179, 22, 158, 0)",
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 0,
          }}
        >
          Electra Heart
        </Text>
        <Text
          style={{
            color: "#fff",
            fontSize: subtitleFontSize,
            fontWeight: "bold",
            marginTop: 20,
            marginLeft: 20,
            opacity: 0.7,
            position: "absolute",
            bottom: 2,
            textShadowRadius: 10,
            fontStyle: "italic",
            letterSpacing: 1,
            lineHeight: 20,
          }}
        >
          Um Manifesto Pop
        </Text>
      </View>
    </BlurView>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    overflow: "hidden",
    width: "auto",
    alignSelf: "center",
    alignItems: "center",
    padding: 10,
    zIndex: 1000,
    flexDirection: "row",
  },
  icon: {
    borderRadius: 50,
    borderColor: "rgba(85, 10, 62, 0.32)",
    borderWidth: 5,
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "70%",
    height: "100%",
    marginBottom: 35,
    marginLeft: -15,
  },
});
