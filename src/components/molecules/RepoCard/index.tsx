import { Linking, Pressable, View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import TextView from '../../atoms/TextView';
import { COLORS } from '../../../constants/colors';
import { Feather } from '@react-native-vector-icons/feather';
import { FontAwesome6 } from '@react-native-vector-icons/fontawesome6';
import NumberMolecule from '../Number';
import { TRepository } from '../../../screens/Explore/model';
import { formatDate } from '../../../utils/date';
import { useTheme } from '../../../hooks/useTheme';

interface CardProps {
  isRepoCard?: boolean;
  item: TRepository;
}

const RepoCard: React.FC<CardProps> = ({ isRepoCard, item }) => {
  const themeConfig = useTheme();

  return (
    <Pressable
      style={[styles.container,{backgroundColor:themeConfig.colors.headerBg}]}
      onPress={() => Linking.openURL(item?.html_url)}
    >
      {!isRepoCard && (
        <View style={styles.cardHeader}>
          <TextView size={14} fontFamily="Silka-Medium" color={themeConfig.colors.text}>
            Trending repository
          </TextView>

          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
            <View style={{ flexDirection: 'row', gap: 4 }}>
              <Feather name="star" size={18} color={COLORS.lightBlue} />
              <TextView color={themeConfig.colors.text} fontFamily="Silka-Medium">
                Star
              </TextView>
            </View>

            <NumberMolecule number={item.forks_count} />
          </View>
        </View>
      )}

      <View style={{ padding: 9 }}>
        <View style={{ flexDirection: 'row', gap: 12, alignItems: 'center' }}>
          <Feather name="file" size={22} color={COLORS.lightBlue} />
          <TextView
            numberOfLines={2}
            color={themeConfig.isDark ? themeConfig.colors.text : COLORS.darkBlue}
            size={22}
            fontFamily="Silka-Bold"
          >
            {item?.name}
          </TextView>
        </View>

        <TextView
          color={themeConfig.colors.text}
          fontFamily="Silka-Medium"
          style={{ paddingVertical: 9 }}
          size={12}
        >
          {item?.description}
        </TextView>

        <View style={styles.lineSeparator} />
      </View>

      <View style={styles.bottomContainer}>
        <TextView color={themeConfig.colors.text}>
          Updated : {formatDate(item?.updated_at)} hours ago
        </TextView>
        <TextView color={themeConfig.colors.text} style={{ marginLeft: 12 }}> {item?.language} </TextView>
      </View>

      {isRepoCard && (
        <View style={styles.bottomContainer}>
          <TextView color={themeConfig.colors.text} style={{ marginLeft: 12 }}> {item?.language} </TextView>
          <View style={styles.bottomItem}>
            <Feather name="star" size={18} color={COLORS.lightBlue} />
            <TextView  color={themeConfig.colors.text}> {item.stargazers_count} </TextView>
          </View>

          <View style={[styles.bottomItem, { marginLeft: 12 }]}>
            <FontAwesome6 name="code-fork" iconStyle="solid" color={themeConfig.isDark ? COLORS.lightBlue : COLORS.darkBlue} />
            <TextView color={themeConfig.colors.text}> {item?.forks_count} </TextView>
          </View>
        </View>
      )}
    </Pressable>
  );
};

export default RepoCard;
