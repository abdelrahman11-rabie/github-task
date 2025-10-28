export const fonts = {
  regular: 'Silka-Regular',
  medium: 'Silka-Medium',
  semiBold: 'Silka-SemiBold',
  bold: 'Silka-Bold',
  black: 'Silka-Black',
  light: 'Silka-Light',
  extraLight: 'Silka-ExtraLight',
  thin: 'Silka-Thin',
  // Italic variants
  regularItalic: 'Silka-RegularItalic',
  mediumItalic: 'Silka-MediumItalic',
  semiBoldItalic: 'Silka-SemiBoldItalic',
  boldItalic: 'Silka-BoldItalic',
  blackItalic: 'Silka-BlackItalic',
  lightItalic: 'Silka-LightItalic',
  extraLightItalic: 'Silka-ExtraLightItalic',
  thinItalic: 'Silka-ThinItalic',
} as const;

// Type for font family values
export type FontFamily = (typeof fonts)[keyof typeof fonts];
