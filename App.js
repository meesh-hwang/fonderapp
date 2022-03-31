import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import * as RootNavigation from './RootNavigation.js';
import Onboarding from './Screens/Onboarding';

import Login from './Screens/Login';
import Signup from './Screens/Signup';

import Home from './Screens/Home';
import UserProfile from './Screens/UserProfile';
import CuisinesSelection from './Screens/CuisinesSelection';
import UserFavourites from './Screens/UserFavourites';
import MealInfo from './Screens/MealInfo';

import { navigationRef } from './RootNavigation';
const Stack = createStackNavigator();

function LogoTitle() {
  return (
    <TouchableOpacity onPress={()=> RootNavigation.navigate('Home')}>
      <Image
        style={{ width: 160, height: 30 }}
        source={require('./assets/img/logo.png')}

      />
    </TouchableOpacity>
  );
}

function LogoTitleSm() {
  return (
    <TouchableOpacity onPress={()=> RootNavigation.navigate('Home')}>
      <Image
        style={{ width: 100, height: 20 }}
        source={require('./assets/img/logo.png')}

      />
    </TouchableOpacity>
  );
}

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>    
      <Stack.Navigator initialRouteName={Onboarding}>
        
        <Stack.Group> 
          <Stack.Screen name="Onboarding" component={Onboarding} 
          options={{ headerTitle: (props) => <LogoTitle {...props} />, headerTitleAlign: 'center', headerStyle: {backgroundColor:'#E66255'}}} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
        </Stack.Group>

        <Stack.Group>
          <Stack.Screen name="Home" component={Home} options={{ headerTitle: (props) => <LogoTitleSm {...props} />, headerTitleAlign: 'center', headerStyle: {backgroundColor:'#E66255'}}}/>
          <Stack.Screen name="UserProfile" component={UserProfile} />
          <Stack.Screen name="CuisinesSelection" component={CuisinesSelection} />
          <Stack.Screen name="UserFavourites" component={UserFavourites} />
          <Stack.Screen name="MealInfo" component={MealInfo} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
