import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Main from './pages/main';
import Product from './pages/product';

export default createAppContainer(
  createStackNavigator({
    Main: Main,
    Product: Product
  }, 
  {
    initialRouteName: 'Main',
    defaultNavigationOptions: {
      headerStyle: {
          backgroundColor: '#DA552F',
          elevation: 0,
          shadowOpacity: 0
      },
      headerTitleAlign: 'center',
      headerTintColor: '#FFF',
      headerTitleStyle: {
          fontWeight: 'bold',
          color: '#ffffff'
      }
   }
  }
));
