import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

// Test component to verify which font names work
const FontTest = () => {
  const fontVariants = [
    'Silka-Regular',
    'Silka-Medium',
    'Silka-SemiBold',
    'Silka-Bold',
    'Silka-Black',
    'Silka-Light',
    'Silka-ExtraLight',
    'Silka-Thin',
    // Alternative naming conventions to test
    'Silka Regular',
    'Silka Medium',
    'Silka Bold',
    'Silka Black',
    'SilkaRegular',
    'SilkaMedium',
    'SilkaBold',
    'SilkaBlack',
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Font Test - Check which ones render correctly</Text>
      {fontVariants.map((fontName, index) => (
        <View key={index} style={styles.row}>
          <Text style={styles.label}>{fontName}:</Text>
          <Text style={[styles.sample, { fontFamily: fontName }]}>
            The quick brown fox jumps
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  row: {
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 10,
  },
  label: {
    fontSize: 12,
    color: '#666',
    marginBottom: 5,
  },
  sample: {
    fontSize: 16,
  },
});

export default FontTest;
