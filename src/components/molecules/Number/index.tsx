import { View } from 'react-native';
import React from 'react';
import TextView from '../../atoms/TextView';
import { styles } from './styles';
import { COLORS } from '../../../constants/colors';
import { useTheme } from '../../../hooks/useTheme';
// #E8E5F3
const NumberMolecule = ({ number }: { number: number }) => {
  const themeConfig = useTheme();
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: themeConfig.isDark ? '#243C3B' : '#E8E5F3' },
      ]}
    >
      <TextView
        size={14}
        fontFamily="Silka-Medium"
        color={themeConfig.isDark ? COLORS.lightBlue : COLORS.darkBlue}
      >
        {number}
      </TextView>
    </View>
  );
};

export default NumberMolecule;
