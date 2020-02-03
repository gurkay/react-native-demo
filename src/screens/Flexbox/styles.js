import { StyleSheet } from 'react-native';

export const flexboxScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        flexWrap: 'wrap',
        backgroundColor: '#F2D7D5',
    },
    oneFlexBox: {
        flex: 2,
        width: '90%',
        height: '10%',
        backgroundColor: 'powderblue'
    },
    twoFlexBox: {
        flex: 3,
        width: '90%',
        height: '10%',
        backgroundColor: 'skyblue'
    },
    threeFlexBox: {
        flex: 4,
        width: '90%',
        height: '10%',
        backgroundColor: 'steelblue'
    },
});