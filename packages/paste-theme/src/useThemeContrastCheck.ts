import {generateTokensFromTheme} from './generateTokensFromTheme';
import {useTheme} from './useTheme';
import type {TokenPairContrastRating} from './types/TokenPairContrastRating';
import {
  getContrastRatingsOfTokensWithTextContrastRequirements,
  getContrastRatingsOfTokensWithUIControlContrastRequirements,
} from './utils/colorContrastPairingUtils';

export interface UseThemeContrastCheckReturn {
  textContrastRating: TokenPairContrastRating[];
  uiControlContrastRating: TokenPairContrastRating[];
  numberOfTextFailures: number;
  numberOfUIControlFailures: number;
  totalFailures: number;
}

export const useThemeContrastCheck = (): UseThemeContrastCheckReturn => {
  const theme = useTheme();
  const designTokens = generateTokensFromTheme(theme);

  const textContrastRating = getContrastRatingsOfTokensWithTextContrastRequirements(designTokens);
  const uiControlContrastRating = getContrastRatingsOfTokensWithUIControlContrastRequirements(designTokens);

  const numberOfTextFailures = textContrastRating.filter((rating) => {
    return !rating.aa;
  }).length;
  const numberOfUIControlFailures = uiControlContrastRating.filter((rating) => {
    return !rating.aaLarge;
  }).length;
  const totalFailures = numberOfTextFailures + numberOfUIControlFailures;

  return {
    textContrastRating,
    uiControlContrastRating,
    numberOfTextFailures,
    numberOfUIControlFailures,
    totalFailures,
  };
};
