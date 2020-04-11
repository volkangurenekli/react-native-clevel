import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import SearchView from './screens/search';
import HistoryView from './screens/history';
import FavoriteView from './screens/favorite';
import DetailView from './screens/detail';

import configureStore from './redux/reducers/configureStore';
const store = configureStore();

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

function SearchStack() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Search" component={SearchView} />
      <HomeStack.Screen name="Detail" component={DetailView} />
    </HomeStack.Navigator>
  );
}
const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Tab.Navigator>
          <Tab.Screen name="Settings" component={HistoryView} />
          <Tab.Screen name="Search" component={SearchStack} />
          <Tab.Screen name="Favorite" component={FavoriteView} />
        </Tab.Navigator>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
