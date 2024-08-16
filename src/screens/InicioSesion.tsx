import React, { useState } from 'react';
import { Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../components/Styles';
import { TitleComponent } from '../components/TitleComponent';
import { StatusBar } from 'expo-status-bar';
import { PRIMARY_COLOR, THIRD_COLOR } from '../commons/constant';

interface Props extends StackScreenProps<any, any> { };

export const InicioSesion = ({ navigation }: Props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log("Intento de inicio de sesión:");
        console.log("Usuario:", username);
        console.log("Contraseña:", password);
    };

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={THIRD_COLOR} />
            <TitleComponent title='Iniciar Sesion' />
            <Text style={styles.text} >Realiza tus compras de manera segura y confiable</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Usuario"
                    value={username}
                    onChangeText={setUsername}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Contraseña"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                />

            <TouchableOpacity onPress={handleLogin}>
                <Text style={styles.button}>Ingresar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('REGISTRO')}>
                <Text style={styles.linkText}>
                    ¿No tienes una cuenta? Regístrate ahora
                </Text>
            </TouchableOpacity>
        </View>
    );
};
