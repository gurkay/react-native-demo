import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { flexboxScreenStyles as styles } from './styles';

class FlexboxScreen extends React.Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        console.log(navigationOptions);

        return {
            title: navigation.getParam('otherParamTwo', 'Flexbox details screens'),
            headerStyle: {
                backgroundColor: navigationOptions.headerTintColor,
            },
            headerTintColor: navigationOptions.headerStyle.backgroundColor,
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.oneFlexBox}>
                    <Text>1</Text>
                </View>
                <View style={styles.twoFlexBox}>
                    <Text>2</Text>
                </View>
                <View style={styles.threeFlexBox}>
                    <Text>3</Text>
                </View>
            </View>
        );
    }
}

export default FlexboxScreen;