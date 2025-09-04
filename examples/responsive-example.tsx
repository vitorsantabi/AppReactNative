import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useResponsive } from "../hooks/useResponsive";
import { FONT_SIZES, SPACING, getRelativeWidth, getResponsiveSize } from "../utils/responsive";

export const ResponsiveExample: React.FC = () => {
    const { isSmallScreen, isMediumScreen, isLargeScreen, width, height } = useResponsive();

    // Exemplo de uso dos utilitários de responsividade
    const containerWidth = getRelativeWidth(90); // 90% da largura da tela
    const fontSize = getResponsiveSize(16, 18, 20, 22);
    const padding = getResponsiveSize(16, 20, 24, 28);

    return (
        <View style={[styles.container, { width: containerWidth, padding }]}>
            <Text style={[styles.title, { fontSize: FONT_SIZES.XXL }]}>
                Exemplo de Responsividade
            </Text>

            <View style={styles.infoContainer}>
                <Text style={[styles.infoText, { fontSize: FONT_SIZES.MD }]}>
                    Largura da tela: {width}px
                </Text>
                <Text style={[styles.infoText, { fontSize: FONT_SIZES.MD }]}>
                    Altura da tela: {height}px
                </Text>
                <Text style={[styles.infoText, { fontSize: FONT_SIZES.MD }]}>
                    Tela pequena: {isSmallScreen ? "Sim" : "Não"}
                </Text>
                <Text style={[styles.infoText, { fontSize: FONT_SIZES.MD }]}>
                    Tela média: {isMediumScreen ? "Sim" : "Não"}
                </Text>
                <Text style={[styles.infoText, { fontSize: FONT_SIZES.MD }]}>
                    Tela grande: {isLargeScreen ? "Sim" : "Não"}
                </Text>
            </View>

            <View style={styles.spacingExample}>
                <Text style={[styles.spacingText, { fontSize: FONT_SIZES.SM }]}>
                    Espaçamento XS: {SPACING.XS}px
                </Text>
                <Text style={[styles.spacingText, { fontSize: FONT_SIZES.SM }]}>
                    Espaçamento SM: {SPACING.SM}px
                </Text>
                <Text style={[styles.spacingText, { fontSize: FONT_SIZES.SM }]}>
                    Espaçamento MD: {SPACING.MD}px
                </Text>
                <Text style={[styles.spacingText, { fontSize: FONT_SIZES.SM }]}>
                    Espaçamento LG: {SPACING.LG}px
                </Text>
            </View>

            <Text style={[styles.description, { fontSize }]}>
                Este componente demonstra como usar os utilitários de responsividade
                criados para o PrimadonnaWiki. Todos os elementos se adaptam
                automaticamente ao tamanho da tela.
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        borderRadius: 16,
        marginVertical: 20,
    },
    title: {
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
        color: "#333",
    },
    infoContainer: {
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        padding: 16,
        borderRadius: 8,
        marginBottom: 20,
    },
    infoText: {
        marginBottom: 8,
        color: "#333",
        fontWeight: "500",
    },
    spacingExample: {
        backgroundColor: "rgba(179, 22, 158, 0.1)",
        padding: 16,
        borderRadius: 8,
        marginBottom: 20,
    },
    spacingText: {
        marginBottom: 6,
        color: "#333",
        fontWeight: "400",
    },
    description: {
        textAlign: "justify",
        lineHeight: 24,
        color: "#333",
    },
});

export default ResponsiveExample;
