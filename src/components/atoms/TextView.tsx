import { Text, TextProps } from 'react-native';
import React from 'react';
import { FontFamily } from '../../constants/fonts';
import { COLORS } from '../../constants/colors';

type Align = 'auto' | 'left' | 'right' | 'center' | 'justify' | undefined;

export type TFontsFamilies = {
  fontFamily?: FontFamily;
  color?: string;
  size?: number;
  textAlign?: Align;
};

const TextView = ({
  fontFamily,
  color = COLORS.black,
  size,
  textAlign,
  ...props
}: TFontsFamilies & TextProps) => {
  return (
    <Text
      {...props}
      style={[{ fontFamily, color, fontSize: size, textAlign }, props.style]}
    >
      {props.children}
    </Text>
  );
};

export default TextView;
