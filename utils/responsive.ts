import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// Breakpoints para diferentes tamanhos de tela
export const BREAKPOINTS = {
  SMALL: 400,    // Smartphones pequenos
  MEDIUM: 768,   // Tablets pequenos
  LARGE: 1024,   // Tablets grandes
  XLARGE: 1200,  // Desktops
} as const;

// Função para detectar o tamanho da tela
export const getScreenSize = () => {
  if (width < BREAKPOINTS.SMALL) return 'small';
  if (width < BREAKPOINTS.MEDIUM) return 'medium';
  if (width < BREAKPOINTS.LARGE) return 'large';
  return 'xlarge';
};

// Função para verificar se é uma tela pequena
export const isSmallScreen = () => width < BREAKPOINTS.SMALL;

// Função para verificar se é uma tela média
export const isMediumScreen = () => width >= BREAKPOINTS.SMALL && width < BREAKPOINTS.MEDIUM;

// Função para verificar se é uma tela grande
export const isLargeScreen = () => width >= BREAKPOINTS.MEDIUM && width < BREAKPOINTS.LARGE;

// Função para verificar se é uma tela extra grande
export const isXLargeScreen = () => width >= BREAKPOINTS.LARGE;

// Função para calcular dimensões responsivas
export const getResponsiveSize = (
  small: number,
  medium: number,
  large: number,
  xlarge?: number
) => {
  if (isSmallScreen()) return small;
  if (isMediumScreen()) return medium;
  if (isLargeScreen()) return large;
  return xlarge || large;
};

// Função para calcular dimensões relativas à largura da tela
export const getRelativeWidth = (percentage: number) => width * (percentage / 100);

// Função para calcular dimensões relativas à altura da tela
export const getRelativeHeight = (percentage: number) => height * (percentage / 100);

// Constantes para espaçamentos responsivos
export const SPACING = {
  XS: getResponsiveSize(4, 6, 8, 10),
  SM: getResponsiveSize(8, 12, 16, 20),
  MD: getResponsiveSize(16, 20, 24, 28),
  LG: getResponsiveSize(24, 28, 32, 36),
  XL: getResponsiveSize(32, 36, 40, 44),
} as const;

// Constantes para tamanhos de fonte responsivos
export const FONT_SIZES = {
  XS: getResponsiveSize(10, 12, 14, 16),
  SM: getResponsiveSize(12, 14, 16, 18),
  MD: getResponsiveSize(14, 16, 18, 20),
  LG: getResponsiveSize(16, 18, 20, 22),
  XL: getResponsiveSize(18, 20, 22, 24),
  XXL: getResponsiveSize(20, 22, 24, 26),
  XXXL: getResponsiveSize(24, 26, 28, 30),
} as const;

// Constantes para raios de borda responsivos
export const BORDER_RADIUS = {
  SM: getResponsiveSize(4, 6, 8, 10),
  MD: getResponsiveSize(8, 12, 16, 20),
  LG: getResponsiveSize(16, 20, 24, 28),
  XL: getResponsiveSize(24, 28, 32, 36),
  FULL: 999,
} as const;

export default {
  width,
  height,
  BREAKPOINTS,
  getScreenSize,
  isSmallScreen,
  isMediumScreen,
  isLargeScreen,
  isXLargeScreen,
  getResponsiveSize,
  getRelativeWidth,
  getRelativeHeight,
  SPACING,
  FONT_SIZES,
  BORDER_RADIUS,
};
