import { BlurView } from "expo-blur";
import { Link } from "expo-router";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";

interface PrimadonnaLinkProps {
  img: ImageSourcePropType;
  text: string;
  href: "/thebq" | "/";
}

export function PrimadonnaLink({
  img,
  text,
  href,
}: PrimadonnaLinkProps): React.JSX.Element | null {
  const { width } = useWindowDimensions();

  if (!href) {
    console.warn("PrimadonnaLink: href não pode ser vazio!");
    return null;
  }

  // Calcula dimensões responsivas
  const isSmallScreen = width < 400;
  const isMediumScreen = width >= 400 && width < 768;

  const linkWidth = isSmallScreen ? width * 0.4 : isMediumScreen ? 150 : 160;
  const linkHeight = isSmallScreen ? 130 : 150; // Aumentei a altura para acomodar melhor o conteúdo
  const imageSize = isSmallScreen ? 70 : 80;

  return (
    <Link
      href={href}
      style={[styles.linkContainer, { width: linkWidth, height: linkHeight }]}
    >
      <BlurView
        intensity={90}
        tint="systemMaterialLight"
        style={[styles.blurContainer, { height: linkHeight }]}
      >
        <View style={[styles.link]}>
          <Image
            source={img}
            style={[styles.image, { width: imageSize, height: imageSize }]}
          />
          <View style={styles.textContainer}>
            <Text style={[styles.text]}>{text}</Text>
            <Text style={[styles.textButton]}>Click Aqui</Text>
          </View>
        </View>
      </BlurView>
    </Link>
  );
}

const styles = StyleSheet.create({
  linkContainer: {
    borderRadius: 16,
    overflow: "hidden",
    marginHorizontal: 5,
  },
  blurContainer: {
    borderRadius: 16,
    overflow: "hidden",
    width: "100%",
    animationFillMode: "forwards",
    borderColor: "rgba(81, 16, 119, 0.23)",
    borderWidth: 5,
  },
  link: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    flex: 1,
    padding: 2,
  },
  image: {
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "rgba(255, 255, 255, 0.3)",
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
    flex: 1,
  },
  text: {
    fontWeight: "bold",
    color: "#020202ff",
    textAlign: "center",
    textShadowColor: "#ffffffff",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 3.84,
    elevation: 5,
  },
  textButton: {
    fontWeight: "bold",
    color: "#0f775dff",
    textAlign: "center",
    textDecorationLine: "underline",
  },
});
