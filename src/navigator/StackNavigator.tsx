import { createStackNavigator } from '@react-navigation/stack';
import { InicioSesion } from '../screens/InicioSesion';
import { Registrarse } from '../screens/Registrarse';
import { PRIMARY_COLOR, THIRD_COLOR } from '../commons/Constant';

const Stack = createStackNavigator();

export const Stacknavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{ cardStyle: { backgroundColor: THIRD_COLOR } }}>
            <Stack.Screen  options={{headerShown :false}} name="INICIO DE SESION" component={InicioSesion} />
            <Stack.Screen options={{headerShown :false}} name="REGISTRO" component={Registrarse} />
        </Stack.Navigator>
    );
}