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
  dropdownWrapper: {
    marginTop: 18,
    marginBottom: 12,
    marginLeft: 8,
  },
  selectedTextStyle: {
    fontWeight: 'regular' as 'regular',
  },
  itemTextStyle: {
    color: COLORS.black,
    fontWeight: 'regular' as 'regular',
  },
  loadingContainer: {
    marginTop: 20,
  },
  errorText: {
    marginTop: 20,
  },
  listWrapper: {
    marginTop: 12,
    flex: 1,
  },
  listContent: {
    paddingBottom: 22,
  },
});

export default styles;
