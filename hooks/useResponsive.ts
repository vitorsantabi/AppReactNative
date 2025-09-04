import { useEffect, useState } from 'react';
import { Dimensions, ScaledSize } from 'react-native';
import { BREAKPOINTS } from '../utils/responsive';

interface ResponsiveState {
  width: number;
  height: number;
  isLandscape: boolean;
  isPortrait: boolean;
  screenSize: 'small' | 'medium' | 'large' | 'xlarge';
  isSmallScreen: boolean;
  isMediumScreen: boolean;
  isLargeScreen: boolean;
  isXLargeScreen: boolean;
}

export const useResponsive = (): ResponsiveState => {
  const [dimensions, setDimensions] = useState(() => {
    const { width, height } = Dimensions.get('window');
    return { width, height };
  });

  const [screenSize, setScreenSize] = useState<'small' | 'medium' | 'large' | 'xlarge'>(() => {
    if (dimensions.width < BREAKPOINTS.SMALL) return 'small';
    if (dimensions.width < BREAKPOINTS.MEDIUM) return 'medium';
    if (dimensions.width < BREAKPOINTS.LARGE) return 'large';
    return 'xlarge';
  });

  useEffect(() => {
    const onChange = ({ window }: { window: ScaledSize }) => {
      setDimensions({ width: window.width, height: window.height });
      
      // Atualiza o tamanho da tela baseado na nova largura
      if (window.width < BREAKPOINTS.SMALL) setScreenSize('small');
      else if (window.width < BREAKPOINTS.MEDIUM) setScreenSize('medium');
      else if (window.width < BREAKPOINTS.LARGE) setScreenSize('large');
      else setScreenSize('xlarge');
    };

    const subscription = Dimensions.addEventListener('change', onChange);
    
    return () => {
      if (subscription?.remove) {
        subscription.remove();
      }
    };
  }, []);

  const isLandscape = dimensions.width > dimensions.height;
  const isPortrait = dimensions.width <= dimensions.height;

  return {
    width: dimensions.width,
    height: dimensions.height,
    isLandscape,
    isPortrait,
    screenSize,
    isSmallScreen: screenSize === 'small',
    isMediumScreen: screenSize === 'medium',
    isLargeScreen: screenSize === 'large',
    isXLargeScreen: screenSize === 'xlarge',
  };
};

export default useResponsive;
