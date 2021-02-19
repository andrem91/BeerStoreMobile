import React from 'react';
import { KeyboardAvoidingView, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import Styles from '../assets/styles/Styles';

export default function login() {
  return (
    <KeyboardAvoidingView style={[Styles.container, Styles.darkbg]}>
      <View>
        <Image style={Styles.logo} source={require('../assets/img/logo.png')} />
      </View>
      <View style={Styles.login__form}>
        <TextInput style={Styles.login__input} placeholder='Usuário' />
        <TextInput style={Styles.login__input} placeholder='Senha' secureTextEntry={true} />
        <TouchableOpacity style={Styles.login__button}>
          <Text style={Styles.login_buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};