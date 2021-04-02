import ColorCombos from 'color-combos';
import type {ColorCombo} from 'color-combos';
import * as DefaultRawTokenJSON from '@twilio-paste/design-tokens/dist/tokens.raw.json';
import type {DesignToken, DesignTokensJSON} from '@twilio-paste/design-tokens/types';
import type {TokenPairContrastRating} from '../types/TokenPairContrastRating';
import type {GenericTokenShape, AllGenericTokens} from '../types/GenericTokenShape';

function toCamelCase(text: string): string {
  return text.replace(/-\w/g, clearAndUpper);
}

function clearAndUpper(text: string): string {
  return text.replace(/-/, '').toUpperCase();
}

export const flattenCategorizedTokens = (tokens: Partial<GenericTokenShape>): AllGenericTokens => {
  const tokenCategories = Object.keys(tokens) as [keyof GenericTokenShape];
  return tokenCategories.reduce((flatTheme, category) => {
    return tokens[category] ? {...flatTheme, ...tokens[category]} : flatTheme;
  }, {});
};

export const convertRawTokenJSONToArray = (rawTokens: DesignTokensJSON): DesignToken[] => {
  // grab taken names from the raw JSON
  const rawTokenNames = Object.keys(rawTokens);
  return (
    rawTokenNames
      // create an array of tokens by iterating over the names and pulling the corresponding object
      .reduce((tokens, token) => {
        return [rawTokens[token], ...tokens] as DesignToken[];
      }, [] as DesignToken[])
  );
};

// get all color tokens that have text contrast requirements in an array
export const getTokensWithTextContrastRequirements = (rawTokens: DesignTokensJSON): DesignToken[] =>
  convertRawTokenJSONToArray(rawTokens)
    // filter by type and contrast pairing type
    .filter((token) => token.type === 'color' && token.text_contrast_pairing != null);

// get all color tokens that have ui control contrast requirements in an array
export const getTokensWithUIControlContrastRequirements = (rawTokens: DesignTokensJSON): DesignToken[] =>
  convertRawTokenJSONToArray(rawTokens)
    // filter by type and contrast pairing type
    .filter((token) => token.type === 'color' && token.uicontrol_contrast_pairing != null);

//  build an array of contrast results for each token pairing
export const getContrastRatingForTokenPairing = (
  filteredTokens: DesignToken[],
  tokens: AllGenericTokens,
  pairingKey: 'text_contrast_pairing' | 'uicontrol_contrast_pairing'
): TokenPairContrastRating[] => {
  return filteredTokens.reduce((tokenRatings: TokenPairContrastRating[], token: DesignToken) => {
    const tokensToCompare = token[pairingKey];
    if (tokensToCompare !== undefined) {
      const ratings = tokensToCompare
        .map((tokenToCompare) => {
          const baseTokenName = toCamelCase(token.name) as keyof AllGenericTokens;
          const baseTokenValue = tokens[baseTokenName];
          const tokenToCompareName = toCamelCase(tokenToCompare) as keyof AllGenericTokens;
          const tokenToCompareValue = tokens[tokenToCompareName];
          let comboRating = {aa: false, aaLarge: false, aaa: false, aaaLarge: false};
          let comboContrast = 0;
          let combos: false | ColorCombo[] = false;

          if (baseTokenValue != null && tokenToCompareValue != null) {
            combos = ColorCombos([baseTokenValue, tokenToCompareValue]);
          }

          if (combos !== false) {
            comboRating = combos[0].combinations[0].accessibility;
            comboContrast = combos[0].combinations[0].contrast;
          }

          return {
            foreground: token.name,
            foregroundValue: baseTokenValue,
            background: tokenToCompare,
            backgroundValue: tokenToCompareValue,
            contrast: comboContrast,
            ...comboRating,
          };
        })
        // filter out any pairings where the values are undefined because a token is missing from the theme
        .filter((rating) => {
          if (rating.foregroundValue === undefined || rating.backgroundValue === undefined) {
            return false;
          }
          return true;
        });
      return [...tokenRatings, ...ratings];
    }
    return tokenRatings;
  }, []);
};

export const getContrastRatingsOfTokensWithTextContrastRequirements = (
  tokens: Partial<GenericTokenShape>
): TokenPairContrastRating[] => {
  // always use the Default raw JSON to get the pairings as other themes won't inherit them automatically
  const defaultThemeRawJSON = DefaultRawTokenJSON.props;
  const tokenWithTextContrastRequirements = getTokensWithTextContrastRequirements(defaultThemeRawJSON);
  const flattenedTokens = flattenCategorizedTokens(tokens);
  return getContrastRatingForTokenPairing(tokenWithTextContrastRequirements, flattenedTokens, 'text_contrast_pairing');
};

export const getContrastRatingsOfTokensWithUIControlContrastRequirements = (
  tokens: Partial<GenericTokenShape>
): TokenPairContrastRating[] => {
  // always use the Default raw JSON to get the pairings as other themes won't inherit them automatically
  const defaultThemeRawJSON = DefaultRawTokenJSON.props;
  const tokenWithUIControlContrastRequirements = getTokensWithUIControlContrastRequirements(defaultThemeRawJSON);
  const flattenedTokens = flattenCategorizedTokens(tokens);
  return getContrastRatingForTokenPairing(
    tokenWithUIControlContrastRequirements,
    flattenedTokens,
    'uicontrol_contrast_pairing'
  );
};
