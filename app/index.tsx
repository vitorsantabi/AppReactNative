import { Content } from "@/components/content";
import Icon from "@/components/icon";
import { PrimadonnaLink } from "@/components/link";
import { BlurView } from "expo-blur";
import { VideoView, useVideoPlayer } from "expo-video";
import React from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";

const TheBeautyQueen = require("../assets/photos/TheBeautyQueen/2.webp");
const TheHomewrecker = require("../assets/photos/TheHomewrecker/2.webp");
const TheHousewife = require("../assets/photos/TheHousewife/2.webp");
const TheStarlet = require("../assets/photos/TheStarlet/2.webp");
const bg = require("../assets/bg.mp4");

export default function App(): React.JSX.Element {
  const { width } = useWindowDimensions();
  const player = useVideoPlayer(bg, (player) => {
    try {
      player.loop = true;
      player.muted = true;
      player.play();
    } catch (error) {
      console.warn("Erro ao configurar o player de vídeo:", error);
    }
  });

  // Calcula dimensões responsivas
  const isSmallScreen = width < 400;
  const isMediumScreen = width >= 400 && width < 768;

  const barHeight = isSmallScreen ? 55 : 65;
  const titleFontSize = isSmallScreen ? 20 : isMediumScreen ? 22 : 25;
  const subtitleFontSize = isSmallScreen ? 13 : isMediumScreen ? 14 : 15;
  const horizontalGap = isSmallScreen ? 8 : isMediumScreen ? 5 : 5;
  const paddingHorizontal = isSmallScreen ? 5 : 5;

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <VideoView
        style={StyleSheet.absoluteFillObject}
        player={player}
        contentFit="cover"
      />
      <View style={styles.overlay}>
        <View style={styles.header}>
          <Icon />
        </View>
        <ScrollView
          style={styles.verticalScroll}
          contentContainerStyle={{
            alignItems: "center",
            paddingBottom: 80,
            marginTop: 0,
          }}
        >
          <Content />
          <BlurView
            intensity={50}
            tint="extraLight"
            style={[styles.barStyles, { height: barHeight }]}
          >
            <Text style={[styles.barText, { fontSize: titleFontSize }]}>
              Explore todos os Arquetipos
            </Text>
            <Text style={[styles.barTextSub, { fontSize: subtitleFontSize }]}>
              Welcome to the life of Electra Heart.
            </Text>
          </BlurView>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.horizontalScroll}
            contentContainerStyle={[
              styles.horizontalContent,
              {
                alignItems: "center",
                gap: horizontalGap,
                paddingHorizontal: paddingHorizontal,
              },
            ]}
          >
            <PrimadonnaLink
              img={TheBeautyQueen}
              text="The Beauty Queen"
              href="/thebq"
            />
            <PrimadonnaLink
              img={TheHomewrecker}
              text="The Homewrecker"
              href="/thebq"
            />
            <PrimadonnaLink
              img={TheHousewife}
              text="The Housewife"
              href="/thebq"
            />
            <PrimadonnaLink img={TheStarlet} text="The Starlet" href="/thebq" />
          </ScrollView>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.26)",
    position: "relative",
    top: StatusBar.currentHeight || 0,
    paddingTop: 20,
    paddingBottom: 10,
  },
  header: {
    alignSelf: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  verticalScroll: {
    width: "100%",
    paddingHorizontal: 10,
  },
  horizontalScroll: {
    marginTop: 20,
  },
  horizontalContent: {
    flexDirection: "row",
    paddingHorizontal: 5,
  },
  barStyles: {
    borderRadius: 50,
    overflow: "hidden",
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
    padding: 10,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex: 1000,
    flexDirection: "column",
    borderColor: "rgba(85, 10, 62, 0.18)",
    borderWidth: 3,
  },
  barText: {
    color: "#000",
    fontWeight: "bold",
    textShadowColor: "#fff",
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 3.84,
    elevation: 5,
    zIndex: 1000,
  },
  barTextSub: {
    color: "#000",
    fontWeight: "300",
    textShadowColor: "#fff",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 3.84,
    elevation: 5,
    zIndex: 1000,
  },
});
