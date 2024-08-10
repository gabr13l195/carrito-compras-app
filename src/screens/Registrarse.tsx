import React, { useState } from 'react';
import { Text, View, TextInput, Button, ScrollView } from 'react-native';
import { styles } from '../components/Styles';

export const Registrarse = () => {
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
            <Text style={styles.title}>Regístrate</Text>
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
            <Button title="Registrar" onPress={handleRegister} />
        </ScrollView>
    );
};

