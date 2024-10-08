import { createStackNavigator } from '@react-navigation/stack';
import { InicioSesion } from '../screens/InicioSesion';
import { Registrarse } from '../screens/Registrarse';
import { HomeScreen } from '../screens/HomeScreen'; 
import { PRIMARY_COLOR, THIRD_COLOR } from '../commons/Constant';
import { useState } from 'react';

export interface User {
    id: number;
    email: string;
    password: string;
}

const Stack = createStackNavigator();

export const Stacknavigator = () => {
    const [users, setUsers] = useState<User[]>([
        { id: 1, email: 'itsqmet@gmail.com', password: '1234' },
    ]);

    const addUser = (newUser: User) => {
        setUsers([...users, newUser]);
    };

    return (
        <Stack.Navigator
            screenOptions={{ cardStyle: { backgroundColor: THIRD_COLOR } }}>
            <Stack.Screen
                options={{ headerShown: false }}
                name="InicioSesion"
                children={(props) => <InicioSesion {...props} users={users} />} />
            <Stack.Screen
                options={{ headerShown: false }}
                name="Registro"
                children={(props) => <Registrarse {...props} users={users} addUser={addUser} />} />
            <Stack.Screen
                options={{ headerShown: false }}  
                name="HomeScreen"
                component={HomeScreen} 
            />
        </Stack.Navigator>
    );
};

