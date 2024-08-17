import React, { useState } from 'react';
import { Text, View, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../commons/Styles';
import { TitleComponent } from '../components/TitleComponent';
import { StatusBar } from 'expo-status-bar';
import { PRIMARY_COLOR, THIRD_COLOR, SECOND_COLOR } from '../commons/Constant';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';



interface Props extends StackScreenProps<any, any> { };

interface FormLogin{
    usuario: string;
    contraseña: string;
}
//Arrgelo de usuarios
interface User{
    id: number;
    email: string;
    password: string;
}

export const InicioSesion = ({ navigation }: Props) => {
    //Arreglo de usuarios
    const users: User[] =[
        {id: 1, email:'wilmer@gmail.com', password:'1234'},
        {id: 2, email:'gabriel@gmail.com', password:'1234'},
    ]

    //Aqui se toma los valores de input
    const [formLogin, setFormLogin] = useState<FormLogin>({
        usuario: '',
        contraseña: '' 
    });
    const handleSetValues=(name:string, value:string)=>{
        setFormLogin({...formLogin, [name]:value})
    }
    const handleSingIn = () =>{
        if(formLogin.usuario === ''|| formLogin.contraseña === ''){
            Alert.alert(
                'Error',
                'Complete todos los campos'
            )
            return;
        }

        //Validar que exista usuario
        if(verifyUser()===null){
            Alert.alert(
                'Error',
                'Usuario y/o Contraseña incorrectas'
            )
        }
        console.log(formLogin)
    }

    //Verificar si usuario esta en el arreglo
    const verifyUser =()=>{
        const existUser=users.filter(
            user=>user.email=== formLogin.usuario && 
            user.password===formLogin.contraseña)[0];
        return existUser;
    }

    //Hook useState: Manipular visualizaion contraseña
    const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={THIRD_COLOR} />
            <TitleComponent title='Iniciar Sesion' />
            <Text style={styles.text} >
                Realiza tus compras de manera segura y confiable
            </Text>
                <InputComponent
                    placeholder='Correo' 
                    handleSetValues={handleSetValues} 
                    name='email'/>
                <InputComponent 
                    placeholder='Contraseña'
                    handleSetValues={handleSetValues} 
                    name='password' 
                    isPassword={hiddenPassword}
                />
            <ButtonComponent 
                textButton='Ingresar' 
                onPress={handleSingIn}/>
            <TouchableOpacity 
                onPress={() => navigation.navigate('REGISTRO')}>
                    <Text style={styles.linkText}>
                        ¿No tienes una cuenta? Regístrate ahora
                    </Text>
            </TouchableOpacity>
        </View>
    );
};
