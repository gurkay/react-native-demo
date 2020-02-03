import * as React from 'react';
import { View, Text, Button } from 'react-native';

import { countAppScreenStyles as styles } from './styles';
import { CountApp } from '../../components/CountApp/CountApp';

class CountAppScreen extends React.Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        console.log(navigationOptions);

        return {
            title: navigation.getParam('countAppParam', 'Count Application Details'),
            headerStyle: {
                backgroundColor: navigationOptions.headerTintColor,
            },
            headerTintColor: navigationOptions.headerStyle.backgroundColor,
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <CountApp />
            </View>
        );
    }
}

export default CountAppScreen;