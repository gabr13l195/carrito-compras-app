import React, { useState } from 'react';
import { Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../components/Styles';

interface Props extends StackScreenProps<any, any> {};

interface LoginForm {
    username: string;
    password: string;
}

export const InicioSesion = ({ navigation }: Props) => {
    const [loginForm, setLoginForm] = useState<LoginForm>({ username: '', password: '' });

    const handleLogin = () => {
        console.log("Intento de inicio de sesión:");
        console.log("Datos de Login:", loginForm);
    };

    const updateLoginForm = (key: keyof LoginForm, value: string) => {
        setLoginForm(prev => ({ ...prev, [key]: value }));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Inicia Sesión</Text>
            <TextInput
                style={styles.input}
                placeholder="Usuario"
                value={loginForm.username}
                onChangeText={value => updateLoginForm('username', value)}
            />
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                value={loginForm.password}
                onChangeText={value => updateLoginForm('password', value)}
                secureTextEntry={true}
            />
            <Button title="Ingresar" onPress={handleLogin} />
            <TouchableOpacity onPress={() => navigation.navigate('REGISTRO')}>
                <Text style={styles.linkText}>
                    ¿No tienes una cuenta? Regístrate ahora
                </Text>
            </TouchableOpacity>
        </View>
    );
};
