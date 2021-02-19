import React from 'react';
import { Image, TouchableOpacity, View, Text } from 'react-native';
import Styles from '../assets/styles/Styles';

export default function Home(props) {
  return (
    <View style={Styles.home__container}>
      <TouchableOpacity style={Styles.icon} onPress={() => props.navigation.navigate('Login')}>
        <Image style={Styles.iconImage} source={require('../assets/img/login.png')} />
        <Text style={Styles.iconText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={Styles.icon} onPress={() => props.navigation.navigate('Produtos')}>
        <Image style={Styles.iconImage} source={require('../assets/img/produtos.png')} />
        <Text style={Styles.iconText}>produtos</Text>
      </TouchableOpacity>
    </View>
  );
};