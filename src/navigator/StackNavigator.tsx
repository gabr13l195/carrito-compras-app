import { createStackNavigator } from '@react-navigation/stack';
import { InicioSesion } from '../screens/InicioSesion';
import { Registrarse } from '../screens/Registrarse';

const Stack = createStackNavigator();

export const Stacknavigator= () => {
    return (
        <Stack.Navigator
        screenOptions={{cardStyle:{backgroundColor: 'white'}}}>
            <Stack.Screen name="INICIO DE SESION" component={InicioSesion} />
            <Stack.Screen name="REGISTRO" component={Registrarse} />
        </Stack.Navigator>
    );
}