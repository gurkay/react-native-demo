import * as React from 'react';
import { View, Text, Button } from 'react-native';

import { homeScreenStyles as styles } from './styles';
import Header from '../../components/Header/Header';

class HomeScreen extends React.Component {
  static navigationOptions = {
    // headerTitle instead of title
    headerTitle: () => <Header />,
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Text>Home Screen</Text>
          <Button
            title="Go to Details"
            onPress={() => {
              /* 1. Navigate to the Details route with params */
              this.props.navigation.navigate('Details', {
                itemId: 86,
                otherParam: 'anything you want here',
              });
            }}
          />
        </View>
        <View style={styles.container}>
          <Text></Text>
          <Button
            title='Go to Flexbox'
            onPress={() => this.props.navigation.navigate('Flexbox')}
          />
        </View>
        <View style={styles.container}>
          <Text></Text>
          <Button
            title='Go to Book Test'
            onPress={() => {
              this.props.navigation.navigate('BookTest1', {
                userId: 82,
                bookTestParam: 'Book Test User Id Parameter',
              });
            }}
          />
        </View>
        <View style={styles.container}>
          <Text></Text>
          <Button
            title='Count App'
            onPress={() => this.props.navigation.navigate('CountApp')}
          />
        </View>
      </View>
    );
  }
}

export default HomeScreen;