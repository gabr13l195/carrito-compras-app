import { createStackNavigator } from '@react-navigation/stack';
import { InicioSesion } from '../screens/InicioSesion';
import { Registrarse } from '../screens/Registrarse';
import { PRIMARY_COLOR, THIRD_COLOR } from '../commons/Constant';
import { useState } from 'react';


//Arrgelo de usuarios
export interface User {
    id: number;
    email: string;
    password: string;
}

const Stack = createStackNavigator();

export const Stacknavigator = () => {
    //Arreglo de usuarios
    const users: User[] = [
        { id: 1, email: 'itsqmet@gmail.com', password: '1234' },
    ];

    const [listUser, setListUsers] = useState(users);

    return (
        <Stack.Navigator
            screenOptions={{ cardStyle: { backgroundColor: THIRD_COLOR } }}>
            <Stack.Screen
                options={{ headerShown: false }}
                name="INICIO DE SESION"
                children={(props) => <InicioSesion {...props} user={listUser} />} />
            <Stack.Screen
                options={{ headerShown: false }}
                name="REGISTRO"
                component={Registrarse} />
        </Stack.Navigator>
    );
}