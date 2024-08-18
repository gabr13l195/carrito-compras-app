import React, { useState } from 'react';
import { Text, View, ScrollView, StatusBar, Alert } from 'react-native';
import { styles } from '../commons/Styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TitleComponent } from '../components/TitleComponent';
import { InputComponent } from '../components/InputComponent';
import { User } from '../navigator/StackNavigator';


interface Props {
    navigation: any;
    users: User[];
    addUser: (newUser: User) => void;
}

interface FormRegister {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    celular: string;
}

export const Registrarse = ({ navigation, users, addUser }: Props) => {
    const [formRegister, setFormRegister] = useState<FormRegister>({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        celular: ''
    });

    const handleSetValues = (name: string, value: string) => {
        setFormRegister({ ...formRegister, [name]: value });
    };

    const handleSignUp = () => {
        const { name, email, password, confirmPassword, celular } = formRegister;

        if (!name || !email || !password || !confirmPassword || !celular) {
            Alert.alert('Error', 'Complete todos los campos');
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert('Error', 'Las contraseñas no coinciden');
            return;
        }

        const newUser: User = {
            id: users.length + 1,
            email: email,
            password: password
        };

        addUser(newUser);

        Alert.alert('Éxito', 'Registro exitoso');
        setFormRegister({ name: '', email: '', password: '', confirmPassword: '', celular: '' }); // Limpiar el formulario
        navigation.navigate('InicioSesion');
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <StatusBar />
            <TitleComponent title='Registrarse' />
            <InputComponent
                placeholder='Nombres y Apellidos'
                handleSetValues={handleSetValues}
                name='name'
            />
            <InputComponent
                placeholder='Correo Electrónico'
                handleSetValues={handleSetValues}
                name='email'
            />
            <InputComponent
                placeholder='Celular'
                handleSetValues={handleSetValues}
                name='celular'
            />
            <InputComponent
                placeholder='Contraseña'
                handleSetValues={handleSetValues}
                name='password'
                isPassword={true}
            />
            <InputComponent
                placeholder='Repita la contraseña'
                handleSetValues={handleSetValues}
                name='confirmPassword'
                isPassword={true}
            />
            <TouchableOpacity onPress={handleSignUp}>
                <Text style={styles.button}>Registrar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('InicioSesion')}>
                <Text style={styles.linkText}>
                    ¿Ya tienes una cuenta? Inicia sesión.
                </Text>
            </TouchableOpacity>
        </ScrollView>
    );
};


