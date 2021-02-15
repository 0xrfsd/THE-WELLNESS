import React from "react";
import { ScrollView, Image, ImageBackground, Pressable, Text, View } from "react-native";
import { Container } from "./styles";
import { useNavigation } from "@react-navigation/native";

const HouseScreen = ({ route }) => {
	const navigation = useNavigation();
	const { itemId, otherParam } = route.params;
	return (
		<ScrollView>
      <Text style={{ textAlign: 'center' }}>{itemId}</Text>
		</ScrollView>
	);
};

export default HouseScreen;
