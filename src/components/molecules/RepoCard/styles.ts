import { StyleSheet } from 'react-native';
import { COLORS } from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    width: '98%',
    borderRadius: 12,
    backgroundColor: COLORS.primary,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 4,
    alignSelf: 'center',
    marginBottom: 12,
    paddingHorizontal: 12,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 9,
    alignItems: 'center',
  },
  lineSeparator: {
    borderWidth: 1,
    borderColor: COLORS.lightGray,
    marginTop: 12,
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 12,
    marginBottom: 12,
  },
  bottomItem: { flexDirection: 'row', gap: 8, alignItems: 'center' },
});
