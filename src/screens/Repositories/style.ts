import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.secondary, padding: 18 },
  dropdown: {
    height: 40,
    borderColor: COLORS.secondary,
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    width: 140,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    backgroundColor: COLORS.primary,
    elevation: 5,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  filterContainer: {
    width: 160,
    backgroundColor: COLORS.primary,
    padding: 12,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginTop: 12,
    elevation: 5,
  },
  filterContainerRow: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    marginBottom: 12,
  },
  languageText: {
    maxWidth: 30,
  },
  loadingContainer: {
    marginTop: 20,
  },
  errorText: {
    marginTop: 20,
  },
  listContent: {
    marginTop: 16,
  },
});

export default styles;
