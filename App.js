import React, {useState} from 'react';

import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import * as RootNavigation from './RootNavigation.js';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Onboarding from './Screens/Onboarding';

import AppLoading from 'expo-app-loading';


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

function LogoTitleUser() {
  return (
    <TouchableOpacity onPress={() => RootNavigation.navigate("UserProfile")}>
      <Ionicons name='person-circle-outline'
        size={36}
        color='white' />
    </TouchableOpacity>
  );
}

function LogoTitleFavs() {
  return (
    <TouchableOpacity onPress={() => RootNavigation.navigate("UserFavourites")}>
      <Ionicons name='heart-outline'
        size={21}
        color='white' />
    </TouchableOpacity>
  );
}


export default function App() {

  return (
    <SafeAreaProvider>
    <NavigationContainer ref={navigationRef}>    
      <Stack.Navigator initialRouteName={Onboarding}>
        
        <Stack.Group> 
          <Stack.Screen name="Onboarding" component={Onboarding} options={{
            headerTitle: (props) => <LogoTitle {...props} />,
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: '#E66255' },
            headerShadowVisible:false
          }}
           />
          <Stack.Screen name="Login" component={Login}  options={{ headerShown:false}}/>
          <Stack.Screen name="Signup" component={Signup}  options={{ headerShown:false}}/>
        </Stack.Group>

        <Stack.Group screenOptions={{
              headerTitle: (props) => <LogoTitleSm {...props} />,
              headerTitleAlign: 'center',
              headerStyle: { backgroundColor: '#E66255' },
              headerRight: (props) => <LogoTitleFavs {...props} />,
              headerLeft: (props) => <LogoTitleUser {...props} />,
              headerRightContainerStyle: { paddingRight: 20, },
              headerLeftContainerStyle: { paddingLeft: 20, },
            }}>
          <Stack.Screen name="Home" component={Home} 
           />
          <Stack.Screen name="UserProfile" component={UserProfile} />
          <Stack.Screen name="CuisinesSelection" component={CuisinesSelection} />
          <Stack.Screen name="UserFavourites" component={UserFavourites} />
          <Stack.Screen name="MealInfo" component={MealInfo} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
</SafeAreaProvider>
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
