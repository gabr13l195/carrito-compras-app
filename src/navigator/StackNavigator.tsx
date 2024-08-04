import { createStackNavigator } from '@react-navigation/stack';
import { InicioSesion } from '../screens/InicioSesion';
import { Registrarse } from '../screens/Registrarse';

const Stack = createStackNavigator();

export const Stacknavigator= () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Pantalla Inicio Sesion" component={InicioSesion} />
            <Stack.Screen name="Pantalla Registro" component={Registrarse} />
        </Stack.Navigator>
    );
}