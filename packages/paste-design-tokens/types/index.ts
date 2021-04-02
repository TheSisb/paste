export interface DesignToken {
  category: string;
  comment?: string;
  name: string;
  originalValue: string;
  text_contrast_pairing?: string[];
  uicontrol_contrast_pairing?: string[];
  type: string;
  value: string;
}
export interface DesignTokensJSON {
  [key: string]: DesignToken;
}
