import React from 'react';
import { View, Modal, Text, Button, FlatList } from 'react-native';
import { styles } from '../commons/Styles';

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
                <Button title="COMPRAR" onPress={handlePurchase} />
                <Button title="Cerrar" onPress={setShowModal} />
            </View>
        </Modal>
    );
};