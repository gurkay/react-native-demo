import { StyleSheet } from 'react-native';
import { colors } from '../../config/colors';

export const detailsStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input: {
        alignSelf: 'center'
    },
    line: {
        flex: 1,
        height: 1,
        marginTop: 36,
        backgroundColor: colors.gray
    }
});