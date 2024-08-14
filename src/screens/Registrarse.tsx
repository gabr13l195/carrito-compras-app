import React, { useState } from 'react';
import { Text, View, TextInput, Button, ScrollView } from 'react-native';
import { styles } from '../components/Styles';

interface RegisterForm {
    name: string;
    username: string;
    password: string;
    confirmPassword: string;
    email: string;
}

export const Registrarse = () => {
    const [registerForm, setRegisterForm] = useState<RegisterForm>({
        name: '',
        username: '',
        password: '',
        confirmPassword: '',
        email: ''
    });

    const handleRegister = () => {
        console.log("Registro de nuevo usuario:");
        console.log("Datos de Registro:", registerForm);
    };

    const updateRegisterForm = (key: keyof RegisterForm, value: string) => {
        setRegisterForm(prev => ({ ...prev, [key]: value }));
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Regístrate</Text>
            <TextInput
                style={styles.input}
                placeholder="Nombres"
                value={registerForm.name}
                onChangeText={value => updateRegisterForm('name', value)}
            />
            <TextInput
                style={styles.input}
                placeholder="Nombre de Usuario"
                value={registerForm.username}
                onChangeText={value => updateRegisterForm('username', value)}
            />
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                value={registerForm.password}
                onChangeText={value => updateRegisterForm('password', value)}
                secureTextEntry={true}
            />
            <TextInput
                style={styles.input}
                placeholder="Repita la Contraseña"
                value={registerForm.confirmPassword}
                onChangeText={value => updateRegisterForm('confirmPassword', value)}
                secureTextEntry={true}
            />
            <TextInput
                style={styles.input}
                placeholder="Correo"
                value={registerForm.email}
                onChangeText={value => updateRegisterForm('email', value)}
                keyboardType="email-address"
            />
            <Button title="Registrar" onPress={handleRegister} />
        </ScrollView>
    );
};

