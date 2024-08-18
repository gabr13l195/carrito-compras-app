import React, { useState } from 'react';
import { Text, View, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../commons/Styles';
import { TitleComponent } from '../components/TitleComponent';
import { StatusBar } from 'expo-status-bar';
import { PRIMARY_COLOR, THIRD_COLOR, SECOND_COLOR } from '../commons/Constant';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import { User } from '../navigator/StackNavigator';

interface Props {
    user: User[];
}

interface Props extends StackScreenProps<any, any> {}

interface FormLogin {
    email: string;
    password: string;
}

export const InicioSesion = ({ user, navigation }: Props) => {

    // Aqui se toman los valores de input
    const [formLogin, setFormLogin] = useState<FormLogin>({
        email: '',
        password: ''
    });

    const handleSetValues = (name: string, value: string) => {
        setFormLogin({ ...formLogin, [name]: value });
    };

    const handleSingIn = () => {
        if (!formLogin.email || !formLogin.password) {
            Alert.alert('Error', 'Complete todos los campos');
            return;
        }

        // Validar que exista usuario
        if (verifyUser()) {
            Alert.alert('Éxito', 'Ingreso exitoso');
            console.log(formLogin);
        } else {
            Alert.alert('Error', 'Usuario y/o Contraseña incorrectas');
        }
    };

    // Verificar si usuario está en el arreglo
    const verifyUser = () => {
        return user.some(
            u => u.email === formLogin.email && u.password === formLogin.password
        );
    };

    // Hook useState: Manipular visualización contraseña
    const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={THIRD_COLOR} />
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
                onPress={handleSingIn}
            />
            <TouchableOpacity
                onPress={() => navigation.navigate('REGISTRO')}>
                <Text style={styles.linkText}>
                    ¿No tienes una cuenta? Regístrate ahora
                </Text>
            </TouchableOpacity>
        </View>
    );
};
