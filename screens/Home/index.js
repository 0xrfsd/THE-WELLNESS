import * as React from 'react';
import { Button, ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import {Container,Space,Wellness} from './styles'

function DetailsScreen({ navigation }) {
  return (
    <ScrollView style={{ flex: 1, paddingTop: 40, paddingLeft: 20}}>
      <Text style={{ textAlign: 'left', fontSize: 30 }}>Wellness</Text>
      <Text style={{ textAlign: 'left', fontSize: 18, marginBottom: 10 }}>O seu paraíso te espera!</Text>
      <View style={{ flexDirection: 'row', marginTop: 10 }}>
      </View>
      <View style={{ flexDirection: 'row', paddingRight: 20  }}>
      <View style={{ height: 150, width: '100%', backgroundColor: 'red', marginRight: 20, borderRadius: 10 }}></View>
      </View>
      <Text style={{ textAlign: 'left', fontSize: 22, marginTop: 30 }}>O seu paraíso te espera!</Text>
      <Text style={{ textAlign: 'left', fontSize: 16, marginTop: 5, color: 'grey' }}>O seu paraíso te espera!</Text>
      <TouchableOpacity>
      <Text style={{ textAlign: 'right', color: 'black', fontSize: 18, marginTop: -20, marginRight: 20, textDecorationLine: 'underline' }}>Ver mais </Text>
      </TouchableOpacity>
      <Container>
      <View style={{ height: 200, width: 200, backgroundColor: 'red', marginRight: 20, borderRadius: 10 }}></View>
      <View style={{ height: 200, width: 200, backgroundColor: 'red', marginRight: 20, borderRadius: 10 }}></View>
      <View style={{ height: 200, width: 200, backgroundColor: 'red', marginRight: 20, borderRadius: 10 }}></View>
      <View style={{ height: 200, width: 200, backgroundColor: 'red', marginRight: 20, borderRadius: 10 }}></View>
      </Container>
      <Text style={{ textAlign: 'left', fontSize: 22, marginTop: 30 }}>O seu paraíso te espera!</Text>
      <Text style={{ textAlign: 'left', fontSize: 16, marginTop: 5, color: 'grey' }}>O seu paraíso te espera!</Text>
      <TouchableOpacity>
      <Text style={{ textAlign: 'right', color: 'black', fontSize: 18, marginTop: -20, marginRight: 20, textDecorationLine: 'underline' }}>Ver mais </Text>
      </TouchableOpacity>
      <Container>
      <View style={{ height: 200, width: 200, backgroundColor: 'red', marginRight: 20, borderRadius: 10 }}></View>
      <View style={{ height: 200, width: 200, backgroundColor: 'red', marginRight: 20, borderRadius: 10 }}></View>
      <View style={{ height: 200, width: 200, backgroundColor: 'red', marginRight: 20, borderRadius: 10 }}></View>
      <View style={{ height: 200, width: 200, backgroundColor: 'red', marginRight: 20, borderRadius: 10 }}></View>
      </Container>
      <Text style={{ textAlign: 'left', fontSize: 22, marginTop: 30 }}>O seu paraíso te espera!</Text>
      <Text style={{ textAlign: 'left', fontSize: 16, marginTop: 5, color: 'grey' }}>O seu paraíso te espera!</Text>
      <TouchableOpacity>
      <Text style={{ textAlign: 'right', color: 'black', fontSize: 18, marginTop: -20, marginRight: 20, textDecorationLine: 'underline' }}>Ver mais </Text>
      </TouchableOpacity>
      <Container>
      <View style={{ height: 200, width: 200, backgroundColor: 'red', marginRight: 20, borderRadius: 10 }}></View>
      <View style={{ height: 200, width: 200, backgroundColor: 'red', marginRight: 20, borderRadius: 10 }}></View>
      <View style={{ height: 200, width: 200, backgroundColor: 'red', marginRight: 20, borderRadius: 10 }}></View>
      <View style={{ height: 200, width: 200, backgroundColor: 'red', marginRight: 20, borderRadius: 10 }}></View>
      </Container>
      <Space>
        <Wellness>Wellness House Rental ®</Wellness>
      </Space>
    </ScrollView>
  );
}

export default DetailsScreen;