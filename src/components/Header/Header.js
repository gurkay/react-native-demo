import * as React from 'react';
import { Image } from 'react-native';
import { headerStyles as styles } from './styles';

class Header extends React.Component {
  render() {
    return (
      <Image
        source={require('../../img/react-native.png')}
        style={styles.container}
      />
    );
  }
}

export default Header;