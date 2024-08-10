import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#359EB8', 
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35
    },
    title: {
        fontSize: 35,
        marginBottom: 20,
        color: 'white',
    },
    input: {
        width: '100%',
        padding: 10,
        borderWidth: 2,
        borderColor: '#ccc',
        marginBottom: 10,
        borderRadius: 5,
        color: 'white'
    },
    button: {
        marginTop: 15,
    },
    linkText: {
        marginTop: 20,
        color: 'white',
        textDecorationLine: 'underline',
    }
});

