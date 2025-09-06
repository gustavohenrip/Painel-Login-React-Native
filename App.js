import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Alert,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  AppRegistry,
  Image,
  Button,
  Pressable,
} from 'react-native';

const App = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isButtonEnabled = () => {
    return email.trim() !== '' && senha.trim() !== '' && isValidEmail(email);
  };

  const handleLogin = () => {
    Alert.alert('Sucesso', 'Login realizado com sucesso!');
  };

  const handleRegister = () => {
    Alert.alert('Info', 'Tela de Registro em breve!');
  };

  const handleResetPassword = () => {
    Alert.alert('Info', 'Tela de redefinição de senha em breve!');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f0f0f0" />
      <View style={styles.content}>
        <Image
          source={require('./assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.title}>Bem-vindo!</Text>
        <Text style={styles.subtitle}>Faça login para continuar</Text>

        <View style={styles.form}>
          <Text style={styles.label}>E-mail:</Text>
          <TextInput
            style={[
              styles.input,
              !isValidEmail(email) && email.length > 0 && styles.inputError
            ]}
            value={email}
            onChangeText={setEmail}
            placeholder="Digite seu e-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="email"
          />

          <Text style={styles.label}>Senha:</Text>
          <TextInput
            style={styles.input}
            value={senha}
            onChangeText={setSenha}
            placeholder="Digite sua senha"
            secureTextEntry={true}
            autoCapitalize="none"
          />

          <View style={styles.buttonContainer}>
            <Button
              title="ENTRAR"
              onPress={handleLogin}
              disabled={!isButtonEnabled()}
            />
          </View>

          <View style={styles.linksContainer}>
            <Pressable onPress={handleRegister} style={styles.link}>
              <Text style={styles.linkText}>Registrar-se</Text>
            </Pressable>

            <Pressable onPress={handleResetPassword} style={styles.link}>
              <Text style={styles.linkText}>Redefinir a Senha</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 40,
    textAlign: 'center',
  },
  form: {
    width: '100%',
    maxWidth: 350,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    marginTop: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    backgroundColor: 'white',
    marginBottom: 5,
  },
  inputError: {
    borderColor: '#ff4444',
  },
  buttonContainer: {
    marginTop: 30,
    marginBottom: 30,
  },
  linksContainer: {
    alignItems: 'center',
  },
  link: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  linkText: {
    color: '#4A90E2',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default App;

AppRegistry.registerComponent('main', () => App);
