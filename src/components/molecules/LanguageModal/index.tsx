import React, { useState } from 'react';
import {
  Modal,
  View,
  TextInput,
  FlatList,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import TextView from '../../atoms/TextView';
import { COLORS } from '../../../constants/colors';
import { Feather } from '@react-native-vector-icons/feather';
import { styles } from './styles';
import { useTheme } from '../../../hooks/useTheme';

interface LanguageModalProps {
  visible: boolean;
  onClose: () => void;
  onSelectLanguage?: (language: string) => void;
}

const PROGRAMMING_LANGUAGES = [
  'JavaScript',
  'TypeScript',
  'Python',
  'Java',
  'C++',
  'C#',
  'Ruby',
  'Go',
  'Rust',
  'Swift',
  'Kotlin',
  'PHP',
  'Dart',
  'Scala',
  'R',
  'Objective-C',
  'Shell',
  'HTML',
  'CSS',
  'SQL',
];

const LanguageModal: React.FC<LanguageModalProps> = ({
  visible,
  onClose,
  onSelectLanguage,
}) => {
  const themeConfig = useTheme();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredLanguages = PROGRAMMING_LANGUAGES.filter(language =>
    language.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleSelectLanguage = (language: string) => {
    onSelectLanguage?.(language);
    setSearchQuery('');
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <Pressable style={styles.overlay} onPress={onClose}>
        <Pressable
          style={[
            styles.modalContainer,
            {
              backgroundColor: themeConfig.colors.background,
              borderColor: themeConfig.isDark ? COLORS.gray : COLORS.primary,
              borderWidth: 1,
            },
          ]}
          onPress={e => e.stopPropagation()}
        >
          <View style={styles.header}>
            <TextView
              size={14}
              fontFamily="Silka-Medium"
              color={themeConfig.colors.text}
            >
              Select Language
            </TextView>
            <TouchableOpacity onPress={onClose} style={styles.closeIcon}>
              <Feather name="x" size={18} color={COLORS.primary} />
            </TouchableOpacity>
          </View>

          <View
            style={[
              styles.searchContainer,
              {
                backgroundColor: themeConfig.isDark
                  ? COLORS.black
                  : COLORS.lightGray,
                borderColor: themeConfig.isDark ? COLORS.gray : COLORS.primary,
                borderWidth: 1,
              },
            ]}
          >
            <TextInput
              style={styles.searchInput}
              placeholder="Search languages..."
              placeholderTextColor={COLORS.gray}
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
            <Feather name="search" size={18} color={COLORS.gray} />
          </View>

          <FlatList
            data={filteredLanguages}
            keyExtractor={item => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.languageItem}
                onPress={() => handleSelectLanguage(item)}
              >
                <TextView
                  size={16}
                  fontFamily="Silka-Medium"
                  color={themeConfig.colors.text}
                >
                  {item}
                </TextView>
              </TouchableOpacity>
            )}
            ListEmptyComponent={
              <View style={styles.emptyContainer}>
                <TextView color={COLORS.gray} size={14}>
                  No languages found
                </TextView>
              </View>
            }
          />
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default React.memo(LanguageModal);
