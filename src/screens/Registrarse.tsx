import React, { useState } from 'react';
import { Text, View, TextInput, Button, ScrollView, StatusBar, Alert } from 'react-native';
import { styles } from '../commons/Styles';
import { THIRD_COLOR } from '../commons/Constant';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';
import { TitleComponent } from '../components/TitleComponent';
import { InputComponent } from '../components/InputComponent';

interface Props extends NativeStackScreenProps<any, any> { }

interface FormRegister {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    celular: string;
}

export const Registrarse = ({ navigation }: Props) => {
    // Aquí se toman los valores de input
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

        // Validación de campos vacíos
        if (!name || !email || !password || !confirmPassword || !celular) {
            Alert.alert(
                'Error',
                'Complete todos los campos'
            );
            return;
        }

        // Verificación de contraseñas iguales
        if (password !== confirmPassword) {
            Alert.alert(
                'Error',
                'Las contraseñas no coinciden'
            );
            return;
        }

        // Si todo es correcto, se imprime el formulario en la consola
        console.log(formRegister);

        // Mensaje de registro exitoso
        Alert.alert(
            'Éxito',
            'Registro exitoso'
        );
        
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
                name='confirmPassword' // Cambié el name a 'confirmPassword' para manejar correctamente la confirmación de contraseña
                isPassword={true}
            />
            <TouchableOpacity onPress={handleSignUp}>
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
