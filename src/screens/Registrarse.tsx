import React, { useState } from 'react';
import { Text, View, TextInput, Button, ScrollView, StatusBar } from 'react-native';
import { styles } from '../commons/Styles';
import { THIRD_COLOR } from '../commons/Constant';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';
import { useNavigation } from '@react-navigation/native';
import { TitleComponent } from '../components/TitleComponent';

interface Props extends NativeStackScreenProps<any, any> { };

export const Registrarse = ({ navigation }: Props) => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleRegister = () => {
        console.log("Registro de nuevo usuario:");
        console.log("Nombres:", name);
        console.log("Nombre de Usuario:", username);
        console.log("Contraseña:", password);
        console.log("Confirma Contraseña:", confirmPassword);
        console.log("Correo:", email);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <StatusBar backgroundColor={THIRD_COLOR} />
            <TitleComponent title='Registrarse' />
            <TextInput
                style={styles.input}
                placeholder="Nombres"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Nombre de Usuario"
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
            <TextInput
                style={styles.input}
                placeholder="Repita la Contraseña"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry={true}
            />
            <TextInput
                style={styles.input}
                placeholder="Correo"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <TouchableOpacity onPress={handleRegister}>
                <Text style={styles.button}>Registrar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('INICIO DE SESION')}>
                <Text style={styles.linkText}>
                    ¿Ya tienes una cuenta? Inicia sesión.
                </Text>
            </TouchableOpacity>
        </ScrollView>
    );
};
