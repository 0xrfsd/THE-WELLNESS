import React from "react";
import { ScrollView, Image, ImageBackground, Pressable, Text, View } from "react-native";
import styles from "./styles";
import { Fontisto } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import {Container} from './scroll';

const HomeScreen = () => {
	const navigation = useNavigation();

	return (
		<ScrollView>
			<Pressable
				style={styles.searchButton}
				onPress={() => navigation.navigate("Destination Search")}
			>
				<Fontisto name="search" size={25} />
				<Text style={styles.searchButtonText}>
					Quando será sua experiência?
				</Text>
			</Pressable>
			<ImageBackground
				style={{ height: 500,
					width: "100%",
					marginTop: -10,
					resizeMode: "cover",
					justifyContent: "center" }}
				source={require("../../../assets/images/background.jpg")}
			>
				<View style={{ marginLeft: '30%', marginTop: '10%' }}>

				<Text style={styles.title}> Explore</Text>
				<Text style={styles.title}>A Bahía</Text>

				<Pressable style={styles.button}>
					<Text style={styles.buttonText}>Acomodações Incríveis!</Text>
				</Pressable>

				</View>
			</ImageBackground>
			<Text style={{ textAlign: 'left', fontSize: 30, marginLeft: 20, marginTop: 40, marginBottom: 20 }}>Acomodações em Trancoso na Bahía</Text>					
			<Container style={{ paddingLeft: 20, paddingRight: 20, flexDirection: 'row'}}>
			<View style={{ marginRight: 15 }}>
						<Image source={require("../../../assets/images/casa.jpg")} style={{ height: 200, width: 250, borderRadius: 20 }}></Image>
						<View style={{ flexDirection: 'row' }}>
						<Text style={{ fontSize: 22, fontWeight: 'bold', textAlign: 'left', marginTop: 10 }}>Casa Tucupí</Text>
						<Text style={{ fontSize: 22, textAlign: 'left', marginTop: 10, marginLeft: 'auto'}}>5.00</Text>
						</View>
						<Text style={{ fontSize: 22, textAlign: 'left', marginTop: 10 }}>R$278,00</Text>
						<Text style={{ fontSize: 16, textAlign: 'left', marginTop: 10 }}>Uma bela propríedade</Text>
					</View>
					<View style={{ marginRight: 15 }}>
						<Image source={require("../../../assets/images/casaa.jpg")} style={{ height: 200, width: 250, borderRadius: 20 }}></Image>
						<View style={{ flexDirection: 'row' }}>
						<Text style={{ fontSize: 22, fontWeight: 'bold', textAlign: 'left', marginTop: 10 }}>Casa Tucumã</Text>
						<Text style={{ fontSize: 22, textAlign: 'left', marginTop: 10, marginLeft: 'auto'}}>5.00</Text>
						</View>
						<Text style={{ fontSize: 22, textAlign: 'left', marginTop: 10 }}>R$159,00</Text>
						<Text style={{ fontSize: 16, textAlign: 'left', marginTop: 10 }}>Um grande chalé!</Text>
					</View>
					<View style={{ marginRight: 35 }}>
						<Image source={require("../../../assets/images/casb.jpg")} style={{ height: 200, width: 250, borderRadius: 20 }}></Image>
						<View style={{ flexDirection: 'row' }}>
						<Text style={{ fontSize: 22, fontWeight: 'bold', textAlign: 'left', marginTop: 10 }}>Casa Taparé</Text>
						<Text style={{ fontSize: 22, textAlign: 'left', marginTop: 10, marginLeft: 'auto'}}>5.00</Text>
						</View>
						<Text style={{ fontSize: 22, textAlign: 'left', marginTop: 10 }}>R$178,42</Text>
						<Text style={{ fontSize: 16, textAlign: 'left', marginTop: 10 }}>Uma bela reserva natural</Text>
					</View>
					
			</Container>
			<Text style={{ textAlign: 'left', fontSize: 30, marginLeft: 20, marginTop: 40, marginBottom: 20 }}>Acomodações que amamos</Text>					
			<Container style={{ paddingLeft: 20, paddingRight: 20, flexDirection: 'row'}}>
			<View style={{ marginRight: 15 }}>
						<Image source={require("../../../assets/images/a.jpg")} style={{ height: 200, width: 250, borderRadius: 20 }}></Image>
						<View style={{ flexDirection: 'row' }}>
						<Text style={{ fontSize: 22, fontWeight: 'bold', textAlign: 'left', marginTop: 10 }}>Casa Subisidio</Text>
						<Text style={{ fontSize: 22, textAlign: 'left', marginTop: 10, marginLeft: 'auto'}}>5.00</Text>
						</View>
						<Text style={{ fontSize: 22, textAlign: 'left', marginTop: 10 }}>R$278,00</Text>
						<Text style={{ fontSize: 16, textAlign: 'left', marginTop: 10 }}>Uma bela propríedade</Text>
					</View>
					<View style={{ marginRight: 15 }}>
						<Image source={require("../../../assets/images/b.jpg")} style={{ height: 200, width: 250, borderRadius: 20 }}></Image>
						<View style={{ flexDirection: 'row' }}>
						<Text style={{ fontSize: 22, fontWeight: 'bold', textAlign: 'left', marginTop: 10 }}>Casa Socialismo</Text>
						<Text style={{ fontSize: 22, textAlign: 'left', marginTop: 10, marginLeft: 'auto'}}>5.00</Text>
						</View>
						<Text style={{ fontSize: 22, textAlign: 'left', marginTop: 10 }}>R$159,00</Text>
						<Text style={{ fontSize: 16, textAlign: 'left', marginTop: 10 }}>Um grande chalé!</Text>
					</View>
					<View style={{ marginRight: 35 }}>
						<Image source={require("../../../assets/images/c.jpg")} style={{ height: 200, width: 250, borderRadius: 20 }}></Image>
						<View style={{ flexDirection: 'row' }}>
						<Text style={{ fontSize: 22, fontWeight: 'bold', textAlign: 'left', marginTop: 10 }}>Casa Anarcal</Text>
						<Text style={{ fontSize: 22, textAlign: 'left', marginTop: 10, marginLeft: 'auto'}}>5.00</Text>
						</View>
						<Text style={{ fontSize: 22, textAlign: 'left', marginTop: 10 }}>R$178,42</Text>
						<Text style={{ fontSize: 16, textAlign: 'left', marginTop: 10 }}>Uma bela reserva natural</Text>
					</View>
			</Container>
			<View style={{ height: 70, justifyContent: 'center', alignItems: 'center' }}>
				<Text style={{ textAlign: 'center', opacity: .5 }}>Wellness House Rental ®</Text>
			</View>
		</ScrollView>
	);
};

export default HomeScreen;
