import { ActivityIndicator, FlatList, Pressable, View } from 'react-native';
import React, { useCallback, useState } from 'react';
import styles from './style';
import TextView from '../../components/atoms/TextView';
import LanguageModal from '../../components/molecules/LanguageModal';
import { COLORS } from '../../constants/colors';
import DateModal from '../../components/molecules/DateModal';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import RepoCard from '../../components/molecules/RepoCard';
import moment from 'moment';
import { useTheme } from '../../hooks/useTheme';
import { useDebouncedFetch } from '../../hooks/useDebouncedFetch';

const Repositories = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] =
    useState<string>('javascript');
  const [selectedDate, setSelectedDate] = useState<string>('2019-01-10');
  const [dateModal, setDateModal] = useState(false);
  const themeConfig = useTheme();
  useDebouncedFetch('10', selectedLanguage, selectedDate);

  const {
    loading,
    data: reposData,
    error,
  } = useSelector((state: RootState) => state.repos);

  const handleSelectLanguage = useCallback((language: string) => {
    setSelectedLanguage(language);
    console.log('Selected language:', language);
  }, []);

  const handleSelectDate = useCallback((date: string) => {
    setSelectedDate(date);
    console.log('Selected date:', date);
  }, []);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: themeConfig.colors.background },
      ]}
    >
      <TextView
        size={22}
        fontFamily="Silka-SemiBold"
        color={themeConfig.colors.text}
      >
        Repositories
      </TextView>

      <View style={styles.filterContainerRow}>
        <Pressable
          onPress={() => setModalVisible(true)}
          style={[
            styles.filterContainer,
            {
              backgroundColor: themeConfig.colors.background,
              borderColor: themeConfig.isDark ? 'gray' : COLORS.primary,
              borderWidth: 1,
            },
          ]}
        >
          <TextView size={14} fontFamily="Silka-Medium" color={COLORS.gray}>
            Language :
            <TextView
              numberOfLines={1}
              color={themeConfig.colors.text}
              style={styles.languageText}
            >
              {selectedLanguage}
            </TextView>
          </TextView>
        </Pressable>

        <Pressable
          style={[
            styles.filterContainer,
            {
              backgroundColor: themeConfig.colors.background,
              borderColor: themeConfig.isDark ? 'gray' : COLORS.primary,
              borderWidth: 1,
            },
          ]}
          onPress={() => setDateModal(true)}
        >
          <TextView size={14} fontFamily="Silka-Medium" color={themeConfig.colors.text}>
            Date :{' '}
            <TextView color={themeConfig.colors.text}>{moment(selectedDate).format('D MMM YY')}</TextView>
          </TextView>
        </Pressable>
      </View>

      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator
            size="large"
            color={themeConfig.colors.text}
            testID="activity-indicator"
          />
        </View>
      )}

      {error && (
        <TextView color="red" style={styles.errorText}>
          Error: {error}
        </TextView>
      )}

      <FlatList
        data={reposData?.items}
        renderItem={({ item }) => <RepoCard isRepoCard item={item} />}
        keyExtractor={item => item?.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />

      <DateModal
        visible={dateModal}
        onClose={() => setDateModal(false)}
        onSelectDate={handleSelectDate}
      />
      <LanguageModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSelectLanguage={handleSelectLanguage}
      />
    </View>
  );
};

export default Repositories;
