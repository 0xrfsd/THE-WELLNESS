import React, { useState } from "react";
import AsyncStorage from '@react-native-community/async-storage';
import { ScrollView, Image, TouchableOpacity, TextInput, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
// import LoginImage from '../../../assets/images/bh.jpeg'

const LoginScreen = () => {

	const navigation = useNavigation();

	/**
	 * Variavel de Login
	 * Setar se há vinculo de login
	 * 
	 */
	
	const [logged, isLogged] = useState();

	async function isLoggedUser() {
		alert(logged === undefined)
		if (logged === undefined) {
			isLogged('teaaeee');
			await AsyncStorage.setItem('loggedUser', logged, () => {
				try {
					alert("Loading...");
					return navigation.navigate('Home');
				} catch (error) {
					return alert('Erro de login...')
				}

			});
		}
	}


	return (

		<View style={{ flex: 1, backgroundColor: '#FFFAF5' }}>
			{/* <Image source={LoginImage} style={{ height: '100%', width: '100%', resizeMode: 'cover' }}/> */}
			<View style={{ flex: 1, paddingLeft: 20, paddingRight: 20, justifyContent: 'center' }}>
				<Text style={{ textAlign: 'left', fontSize: 36, fontWeight: 'bold', marginTop: '-25%' }}>Login</Text>
				<TextInput enablesReturnKeyAutomatically={false} placeholder="Email or User" style={{ height: 50, width: '100%', backgroundColor: 'transparent' }} />
				<TextInput enablesReturnKeyAutomatically={true} secureTextEntry={true} placeholder="Password" style={{ height: 50, width: '100%', backgroundColor: 'transparent' }} />
				<TouchableOpacity onPress={isLoggedUser} style={{ height: 50, width: '100%', backgroundColor: '#cada43', justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}>
					<Text style={{ textAlign: 'left', fontSize: 22, fontWeight: 'bold', color: '#333' }}>Login</Text>
				</TouchableOpacity>
				<Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold', color: '#333', marginTop: 30 }}>Or, login with...</Text>
				<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
					<TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ width: 85, height: 50, borderRadius: 5, backgroundColor: '#fff', borderWidth: 1, borderColor: '#333', marginRight: 10 }}></TouchableOpacity>
					<TouchableOpacity onPress={() => { alert("Login Google") }} style={{ width: 85, height: 50, borderRadius: 5, backgroundColor: '#fff', borderWidth: 1, borderColor: '#333', marginRight: 10 }}></TouchableOpacity>
					<TouchableOpacity onPress={() => { alert("Login Google") }} style={{ width: 85, height: 50, borderRadius: 5, backgroundColor: '#fff', borderWidth: 1, borderColor: '#333', marginRight: 10 }}></TouchableOpacity>
				</View>
				<View style={{ justifyContent: 'center', alignItems: 'center' }}>
					<Text style={{ textAlign: 'center', flex: 1, fontSize: 16, fontWeight: 'bold', marginTop: 100, color: '#333' }}>Or, register an account right now! <Text style={{ fontWeight: 'bold', color: 'blue' }}>Sign Up</Text>  </Text>
				</View>
			</View>
		</View>
	);
};

export default LoginScreen;
