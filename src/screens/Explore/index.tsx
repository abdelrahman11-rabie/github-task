import { View, ActivityIndicator, FlatList } from 'react-native';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './style';
import TextView from '../../components/atoms/TextView';
import { Dropdown } from 'react-native-element-dropdown';
import { COLORS } from '../../constants/colors';
import RepoCard from '../../components/molecules/RepoCard';
import { RootState } from '../../redux/store';
import { useTheme } from '../../hooks/useTheme';
import { useDebouncedFetch } from '../../hooks/useDebouncedFetch';

const data = [
  { label: ' 10', value: '10' },
  { label: ' 50', value: '50' },
  { label: ' 100', value: '100' },
];

const Explore = () => {
  const [value, setValue] = useState('10');
  const themeConfig = useTheme();
  useDebouncedFetch(value, 'javascript', '2019-01-10');

  const {
    loading,
    data: reposData,
    error,
  } = useSelector((state: RootState) => state.repos);

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
        style={{ marginLeft: 6 }}
      >
        Explore Popular
      </TextView>
      <View style={styles.dropdownWrapper}>
        <Dropdown
          style={[
            styles.dropdown,
            {
              backgroundColor: themeConfig.colors.background,
              borderColor: themeConfig.isDark ? 'gray' : COLORS.primary,
              borderWidth: 1,
            },
          ]}
          selectedTextStyle={[
            styles.selectedTextStyle,
            { color: themeConfig.colors.text },
          ]}
          data={data}
          itemTextStyle={styles.itemTextStyle}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder=".."
          onChange={item => {
            setValue(item.value);
          }}
          value={value}
          renderLeftIcon={() => (
            <TextView style={{ color: themeConfig.colors.text }}>
              View :
              <TextView
                fontFamily="Silka-Medium"
                color={themeConfig.colors.text}
              >
                {' '}
                Top
              </TextView>
            </TextView>
          )}
        />
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

      <View style={styles.listWrapper}>
        <FlatList
          data={reposData?.items}
          renderItem={({ item }) => <RepoCard item={item} />}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item?.id}
        />
      </View>
    </View>
  );
};

export default Explore;
