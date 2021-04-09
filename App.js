import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ScreenOne from './ScreenOne';
import ScreenTwo from './ScreenTwo';

const navigator = createStackNavigator(
  {
    One: ScreenOne,
    Two: ScreenTwo,
  },
  {
    initialRouteName: 'One',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);

export default createAppContainer(navigator);
