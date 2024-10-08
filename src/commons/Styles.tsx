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
        borderTopLeftRadius: 35,
    },
    containerHome: {
        flexGrow: 1,
        backgroundColor: THIRD_COLOR,
        paddingTop: 70
    },
    title: {
        fontSize: 40,
        marginBottom: 15,
        color: PRIMARY_COLOR,
    },
    text: {
        fontSize: 12,
        color: '#A9968C',
        marginBottom: 29,
    },
    input: {
        width: '100%',
        padding: 10,
        borderWidth: 1,
        borderColor: PRIMARY_COLOR,
        marginBottom: 12,
        borderRadius: 5,
        color: PRIMARY_COLOR,
    },
    button: {
        marginTop: 10,
        padding: 9,
        paddingRight: 20,
        paddingLeft: 20,
        fontSize: 20,
        backgroundColor: SECOND_COLOR,
        color: 'white',
        borderRadius: 11,
    },
    iconPassword: {
        color: SECOND_COLOR,
        position: 'absolute',
        right: 20,
        zIndex: 1,
        marginTop: 19,
    },
    linkText: {
        marginTop: 20,
        color: PRIMARY_COLOR,
        textDecorationLine: 'underline',
    },
    titleHome: {
        fontSize: 42,
        marginBottom: 20,
        color: PRIMARY_COLOR,
        textAlign: 'center',
        fontStyle: 'italic',
        fontWeight: 'bold',
    },
    productList: {
        paddingHorizontal: 20,
        paddingBottom: 100,

    },
    productItem: {
        backgroundColor: '#E4E7EB',
        padding: 10,
        borderRadius: 10,
        marginBottom: 15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
        position: 'relative',
    },
    productImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginBottom: 10,
    },
    productName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: PRIMARY_COLOR,
        marginBottom: 5,
    },
    productPrice: {
        fontSize: 16,
        color: SECOND_COLOR,
        marginBottom: 5,
    },
    productStock: {
        fontSize: 14,
        color: '#555',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',  
        alignItems: 'center',  
        paddingHorizontal: 20,  
    },
    cartIcon: {
        marginRight: 20, 
        color: SECOND_COLOR
    },
    addIcon: {
        top: 10,
        right: -90,
        color: SECOND_COLOR, 
    },
    modalContainer: {
        flex: 1,   
        marginRight: 50,
        marginLeft: 50,
        marginBottom: 170,
        marginTop: 170,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: THIRD_COLOR,
        borderColor: SECOND_COLOR,
    },
    cartItem: {
        marginBottom: 10,
    },
    cartItemText: {
        fontSize: 18,
        color: PRIMARY_COLOR,
    },
    totalAmountText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: SECOND_COLOR,
        marginBottom: 20,
    },
});


