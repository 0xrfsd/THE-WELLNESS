import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeTabNavigator from "./HomeTabNavigator";
import DestinationSearchScreen from "../screens/DestinationSearch/DestinationSearchScreen";
import GuestsScreen from "../screens/Guests/GuestsScreen";
import HouseScreen from "../screens/House/index";
import LoginScreen from "../screens/Login/index";
import ModalScreen from "../components/Modal/App";
import RegisterScreen from "../screens/Register/index";

const Stack = createStackNavigator();

const Router = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
			<Stack.Screen
					name="Modal"
					options={{ headerShown: false }}
					component={ModalScreen}
				/>
				<Stack.Screen
					name="Home"
					component={HomeTabNavigator}
					options={{
						headerShown: false,
					}}
				/>

				<Stack.Screen
					name="Destination Search"
					component={DestinationSearchScreen}
					options={{
						title: "Search your destination",
					}}
				/>

				<Stack.Screen
					name="Guests"
					component={GuestsScreen}
					options={{
						title: "How many people?",
					}}
				/>

				<Stack.Screen
					name="House"
					options={{ headerShown: false }}
					component={HouseScreen}
				/>

				<Stack.Screen
					name="Register"
					options={{ headerShown: false }}
					component={RegisterScreen}
				/>

				<Stack.Screen
					name="Login"
					options={{ headerShown: false }}
					component={LoginScreen}
				/>

			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Router;
