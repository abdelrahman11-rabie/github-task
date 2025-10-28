import { View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Fontisto } from '@react-native-vector-icons/fontisto';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../../hooks/useTheme';
import { getThemedImage } from '../../../constants/theme';

const Header = () => {
  const themeConfig = useTheme();

  return (
    <SafeAreaView
      style={{ backgroundColor: themeConfig.colors.headerBg, marginTop: 22 }}
    >
      <View
        style={[
          styles.headerStyle,
          { backgroundColor: themeConfig.colors.headerBg },
        ]}
      >
        <Image
          source={getThemedImage(themeConfig.isDark ? 'dark' : 'light', 'logo')}
          style={styles.logo}
        />
        <TouchableOpacity>
          <Fontisto name="search" size={25} color={themeConfig.colors.text} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Header;
