import { StyleSheet } from 'react-native';
import { PRIMARY_COLOR, SECOND_COLOR, THIRD_COLOR } from './Constant';



export const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: THIRD_COLOR, 
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35
    },
    title: {
        fontSize: 40,
        marginBottom: 15,
        color: PRIMARY_COLOR,
    },
    text:{
        fontSize: 12,
        color: '#A9968C',
        marginBottom: 29
    },
    input: {
        width: '100%',
        padding: 10,
        borderWidth: 1,
        borderColor: PRIMARY_COLOR,
        marginBottom: 12,
        borderRadius: 5,
        color: PRIMARY_COLOR
    },
    button: {
        marginTop: 10,
        padding: 9,
        paddingRight: 20,
        paddingLeft: 20,
        fontSize: 20,
        backgroundColor: SECOND_COLOR,
        color: 'white',
        borderRadius: 11
    },
    iconPassword:{
        color: SECOND_COLOR,
        position: 'absolute',
        right: 20,
        zIndex: 1,
        marginTop: 19
    },
    linkText: {
        marginTop: 20,
        color: PRIMARY_COLOR,
        textDecorationLine: 'underline',
    }
});

