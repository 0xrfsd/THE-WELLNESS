import { StatusBar } from "expo-status-bar";
import React from "react";
import "react-native-gesture-handler";
import AppNavigator from './src/navigation/Router';

import Component from './src/components/Modal/App';

import LoginScreen from './src/screens/First/FirstScreen/';

export default function App() {
	return (
		<>
			<StatusBar barStyle="dark-content" />
			<AppNavigator />
		</>
	);
}
