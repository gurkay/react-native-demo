import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../screens/HomeScreen/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen/DetailsScreen';
import FlexboxScreen from '../screens/Flexbox/FlexboxScreen';
import BookTestScreen from '../screens/BookTestScreen/BookTestScreen';
import CountAppScreen from '../screens/CountAppScreen/CountAppScreen';


const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    Flexbox: FlexboxScreen,
    BookTest1: BookTestScreen,
    CountApp: CountAppScreen, 
  },
  {
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const Routes = createAppContainer(RootStack);

export default Routes;