import * as React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import {bookTestStyles as styles} from './styles';

class BookTest extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        isYummy: PropTypes.bool.isRequired
    }

    state = {
        myState: 'This is the test state writing'
    }

    updateState = () => this.setState({
        myState: 'The state updated'
    });

    render() {
        return(
            <View style={styles.container}>
                <Text>
                    {this.props.name}
                </Text>
                    {this.props.isYummy ? <Text>This recipe is yummy</Text> : null}

                <Text onPress = {this.updateState}>
                    {this.state.myState}
                </Text>    
            </View>
        );
    }
}

export default BookTest;