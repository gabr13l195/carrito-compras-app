import React, { useState } from 'react';
import { Text, View, Alert, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../commons/Styles';
import { StatusBar } from 'expo-status-bar';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import { TitleComponent } from '../components/TitleComponent';
import { User } from '../navigator/StackNavigator';


interface Props extends StackScreenProps<any, any> {
    users: User[];
}

interface FormLogin {
    email: string;
    password: string;
}

export const InicioSesion = ({ users, navigation }: Props) => {
    const [formLogin, setFormLogin] = useState<FormLogin>({
        email: '',
        password: ''
    });

    const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);

    const handleSetValues = (name: string, value: string) => {
        setFormLogin({ ...formLogin, [name]: value });
    };

    const handleSignIn = () => {
        if (!formLogin.email || !formLogin.password) {
            Alert.alert('Error', 'Complete todos los campos');
            return;
        }

        if (verifyUser()) {
            // Redirigir a HomeScreen en lugar de mostrar una alerta
            navigation.navigate('HomeScreen');
        } else {
            Alert.alert('Error', 'Usuario y/o Contraseña incorrectas');
        }
    };

    const verifyUser = () => {
        return users.some(
            u => u.email === formLogin.email && u.password === formLogin.password
        );
    };

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#ccc' />
            <TitleComponent title='Iniciar Sesión' />
            <Text style={styles.text}>
                Realiza tus compras de manera segura y confiable
            </Text>
            <InputComponent
                placeholder='Correo'
                handleSetValues={handleSetValues}
                name='email'
            />
            <InputComponent
                placeholder='Contraseña'
                handleSetValues={handleSetValues}
                name='password'
                isPassword={hiddenPassword}
            />
            <ButtonComponent
                textButton='Ingresar'
                onPress={handleSignIn}
            />
            <TouchableOpacity
                onPress={() => navigation.navigate('Registro')}>
                <Text style={styles.linkText}>
                    ¿No tienes una cuenta? Regístrate ahora
                </Text>
            </TouchableOpacity>
        </View>
    );
};
