import { BlurView } from "expo-blur";
import React from "react";
import { Image, StyleSheet, Text, View, useWindowDimensions } from "react-native";

const AlbumCover = require("../assets/images/album.png");

export const Content: React.FC = () => {
  const { width } = useWindowDimensions();

  // Calcula dimensões responsivas baseadas no tamanho da tela
  const isSmallScreen = width < 400;
  const isMediumScreen = width >= 400 && width < 768;

  const coverSize = isSmallScreen ? width * 0.7 : isMediumScreen ? 250 : 300;
  const fontSize = isSmallScreen ? 14 : isMediumScreen ? 15 : 16;
  const lineHeight = isSmallScreen ? 16 : isMediumScreen ? 17 : 18;
  const padding = isSmallScreen ? 12 : isMediumScreen ? 16 : 20;

  return (
    <BlurView intensity={50} tint="extraLight" style={[styles.container, { width: width * 0.95 }]}>
      <View style={styles.imageContainer}>
        <Image
          source={AlbumCover}
          style={[styles.cover, { width: coverSize, height: coverSize }]}
        />
      </View>
      <BlurView intensity={90} tint="extraLight" style={styles.textContainer}>
        <Text style={[
          styles.text,
          {
            fontSize,
            lineHeight,
            padding,
            width: "100%"
          }
        ]}>
          Em 2012, Marina and the Diamonds lançou *Electra Heart*, um
          álbum-conceito que marcou sua carreira ao misturar pop radiofônico com
          ironia, crítica cultural e performance artística. Mais do que um disco,
          *Electra Heart* foi a criação de uma personagem: uma colagem de quatro
          arquétipos femininos que exploram e satirizam padrões de comportamento
          impostos às mulheres pela sociedade ocidental e pelo sonho americano.
          {"\n"}
          {"\n"}A personagem &ldquo;Electra&rdquo; funciona como uma máscara usada por Marina
          para narrar temas como vaidade, amor, poder, fama e identidade. Ao longo
          das faixas, ela vive, exagera e desconstrói estereótipos femininos,
          revelando tanto o fascínio quanto a dor escondidos por trás de cada um
          deles.
        </Text>
      </BlurView>

    </BlurView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    overflow: "hidden",
    width: "auto",
    alignSelf: "center",
    alignItems: "center",
    padding: 10,

    borderColor: "rgba(85, 10, 62, 0.18)",
    borderWidth: 3,
    zIndex: 1000,
    flexDirection: "column",

  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 15,
    alignSelf: "center",
  },
  textContainer: {
    borderRadius: 50,
    overflow: "hidden",
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
    padding: 10,
  },
  text: {
    color: "#000",
    fontWeight: "400",
    textAlign: "justify",



  },
  cover: {
    borderRadius: 30,
    resizeMode: "cover",
  },
});
