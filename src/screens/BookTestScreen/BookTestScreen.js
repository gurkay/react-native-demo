import * as React from 'react';
import { View, Text } from 'react-native';

import { bookTestScreenStyles as styles } from './styles';
import BookTest from '../../components/BookTest/BookTest';

class BookTestScreen extends React.Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        console.log(navigationOptions);

        return {
            title: navigation.getParam('bookTestParam', 'Flexbox details screens'),
            headerStyle: {
                backgroundColor: navigationOptions.headerTintColor,
            },
            headerTintColor: navigationOptions.headerStyle.backgroundColor,
        }
    }

    render() {
        const { navigation } = this.props;
        const userId = navigation.getParam('userId', 'NO-ID');
        const bookTestParam = navigation.getParam('bookTestParam', 'Default value');
        return (
            <View style={styles.container}>
                <Text>Book Test Screen</Text>
                <Text>userId: {JSON.stringify(userId)}</Text>
                <Text>bookTestPAram: {JSON.stringify(bookTestParam)}</Text>
                <BookTest name="Gurkay" isYummy={true} />
            </View>
        );
    }
}

export default BookTestScreen;