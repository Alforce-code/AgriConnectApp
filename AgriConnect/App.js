import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PaperProvider } from 'react-native-paper';
import HomeScreen from './screens/HomeScreen';
import MarketplaceScreen from './screens/MarketplaceScreen';
import WeatherScreen from './screens/WeatherScreen';
import LoginScreen from './screens/LoginScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerStyle: { backgroundColor: '#2E7D32' },
            headerTintColor: '#FFFFFF',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        >
          <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'AgriConnect - Login' }} />
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'AgriConnect' }} />
          <Stack.Screen name="Marketplace" component={MarketplaceScreen} options={{ title: 'Marketplace' }} />
          <Stack.Screen name="Weather" component={WeatherScreen} options={{ title: 'Weather Dashboard' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;