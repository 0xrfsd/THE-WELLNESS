import * as React from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, paddingTop: 40, paddingLeft: 20, paddingRight: 20 }}>
      <Text style={{ textAlign: 'left', fontSize: 30 }}>Wellness</Text>
      <Text style={{ textAlign: 'left', fontSize: 18, marginBottom: 10 }}>O seu paraíso te espera!</Text>
      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} >
          <Text style={{ color: 'black', fontSize: 18, marginRight: 20 }}>Hospedagens</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Restaurants')}>
          <Text style={{ color: 'black', fontSize: 18, marginRight: 20 }}>Restaurantes</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Experiences')}>
          <Text style={{ color: 'red', fontSize: 18, marginRight: 20 }}>Experiencias</Text>
        </TouchableOpacity>
      </View>
      <View style={{ width: '100%', height: '15%', padding: 20, marginTop: 20, backgroundColor: '#fff', borderRadius: 10 }}>
        <Text style={{ textAlign: 'left', fontSize: 16 }}>Receba até 20% de desconto em Experiencias com o programa Wellness Rewards</Text>
      </View>
    </View>
  );
}

export default DetailsScreen;