import {DefaultTheme} from '../src/themes';
import {
  getContrastRatingsOfTokensWithTextContrastRequirements,
  getContrastRatingsOfTokensWithUIControlContrastRequirements,
} from '../src/utils/colorContrastPairingUtils';

const defaultThemeTextColorContrastRatings = getContrastRatingsOfTokensWithTextContrastRequirements(DefaultTheme);
const defaultThemeUiControlColorContrastRatings = getContrastRatingsOfTokensWithUIControlContrastRequirements(
  DefaultTheme
);

describe('Default Theme', () => {
  describe('Text color contrast ratio for token pairs', () => {
    test.each(defaultThemeTextColorContrastRatings)('ratio check for %p', (rating) => {
      expect(rating.contrast).toBeGreaterThanOrEqual(4.5);
    });
  });
  describe('UI Control color contrast ratio for token pairs', () => {
    test.each(defaultThemeUiControlColorContrastRatings)('ratio check for %p', (rating) => {
      expect(rating.contrast).toBeGreaterThanOrEqual(3);
    });
  });
});
