import { Modal, Pressable, View } from 'react-native';
import React from 'react';
import { Calendar } from 'react-native-calendars';
import { styles } from './styles';
import TextView from '../../atoms/TextView';
import Feather from '@react-native-vector-icons/feather';
import { COLORS } from '../../../constants/colors';

interface DateModalProps {
  visible: boolean;
  onClose: () => void;
  onSelectDate?: (date: string) => void;
}

const DateModal: React.FC<DateModalProps> = ({
  visible,
  onClose,
  onSelectDate,
}) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <Pressable style={styles.overlay} onPress={onClose}>
        <Pressable
          style={[styles.modalContainer]}
          onPress={e => e.stopPropagation()}
        >
          <View style={[styles.header]}>
            <TextView color={COLORS.black} fontFamily="Silka-Medium">
              Select Date
            </TextView>
            <Pressable style={styles.closeIcon} onPress={onClose}>
              <Feather name="x" size={18} color={COLORS.primary} />
            </Pressable>
          </View>
          <Calendar
            theme={{
              arrowColor: COLORS.darkBlue,
              selectedDayBackgroundColor: COLORS.lightBlue,
              selectedDayTextColor: COLORS.darkBlue,
            }}
            onDayPress={day => {
              onSelectDate?.(day.dateString);
              onClose();
            }}
          />
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default DateModal;
