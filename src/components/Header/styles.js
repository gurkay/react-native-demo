import { StyleSheet } from 'react-native';
import { colors } from '../../config/colors';

export const headerStyles = StyleSheet.create({
    container: {
        flex: 1,
        width:30,
        height:30,
        alignItems: 'center',
    },
    title: {
        fontSize: 36,
        fontWeight: '700',
        color: colors.accent,
    },

});