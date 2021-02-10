import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AntDesign, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

import HomeScreen from './screens/Home'
import DetailsScreen from './screens/Details'
import RestaurantScreen from './screens/Restaurants'
import ExperiencesScreen from './screens/Experiences'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const icons = {
  Explorar: {
    lib: AntDesign,
    name: 'search1',
  },
  Hospedagens: {
    lib: AntDesign,
    name: 'home',
  },
  Restaurants: {
    lib: AntDesign,
    name: 'hearto',
  },
  Experiences: {
    lib: AntDesign,
    name: 'book',
  },
  Settings: {
    lib: AntDesign,
    name: 'hearto',
  },
  Perfil: {
    lib: AntDesign,
    name: 'user',
  },
};


function Home() {
  return(
    <Tab.Navigator
    initialRouteName="Home"
    screenOptions={({ route, navigation }) => ({
      tabBarIcon: ({ color, size, focused }) => {
        const { lib: Icon, name } = icons[route.name];
        return <Icon name={name} size={24} color={color} />;
      },
    })}
    tabBarOptions={{
      style: {
        paddingBottom: 5,
        paddingTop: 5,
        backgroundColor: '#fff',
        borderTopColor: 'rgba(255, 255, 255, 0.2)',
      },
      activeTintColor: '#333',
      inactiveTintColor: '#92929c',
    }}
  >
    <Tab.Screen name="Explorar" component={HomeScreen} />
    <Tab.Screen name="Hospedagens" component={DetailsScreen} />
    <Tab.Screen name="Restaurants" component={RestaurantScreen} />
    <Tab.Screen name="Experiences" component={ExperiencesScreen} />
  </Tab.Navigator>
  )
}

export default class App extends React.Component {
  render() {
    return (<NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{ headerShown: false }} component={Home} />
        <Stack.Screen name="Details" options={{ headerShown: false }} component={DetailsScreen} />
        <Stack.Screen name="Restaurants" options={{ headerShown: false }} component={RestaurantScreen} />
        <Stack.Screen name="Experiences" options={{ headerShown: false }} component={ExperiencesScreen} />
      </Stack.Navigator>
    </NavigationContainer>)
  }
}
