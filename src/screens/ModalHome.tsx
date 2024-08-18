import React from 'react';
import { View, Modal, Text, Button, FlatList } from 'react-native';
import { styles } from '../commons/Styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ButtonComponent } from '../components/ButtonComponent';

interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

interface Props {
    isVisible: boolean;
    setShowModal: () => void;
    cart: CartItem[];
    setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

export const ModalHome = ({ isVisible, setShowModal, cart, setCart }: Props) => {
    const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const handlePurchase = () => {
        setCart([]);
        setShowModal();
    };

    return (
        <Modal visible={isVisible} animationType="fade" transparent={true}>
            <View style={styles.modalContainer}>
                <FlatList
                    data={cart}
                    renderItem={({ item }) => (
                        <View style={styles.cartItem}>
                            <Text style={styles.cartItemText}>{item.name} - ${item.price.toFixed(2)} x {item.quantity}</Text>
                        </View>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                />
                <Text style={styles.totalAmountText}>Total: ${totalAmount.toFixed(2)}</Text>
                <ButtonComponent
                    textButton='Comprar'
                    onPress={handlePurchase}
                />
                <ButtonComponent
                    textButton='Cerrar'
                    onPress={handlePurchase}
                />
            </View>
        </Modal>
    );
};