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
        // Aquí podrías añadir más lógica para manejar la compra
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












// interface ModalHomeProps {
//     visible: boolean;
//     onClose: () => void;
// }

// export const ModalHome: React.FC<ModalHomeProps> = ({ visible, onClose }) => {
//     return (
//         <Modal
//             transparent={true}
//             visible={visible}
//             animationType="slide"
//             onRequestClose={onClose}  // Esto permite cerrar el modal en Android al presionar el botón de atrás
//         >
//             <View style={styles.modalOverlay}>
//                 <View style={styles.modalContent}>
//                     <Text style={styles.modalText}>HOLA</Text>
//                     <TouchableOpacity onPress={onClose} style={styles.closeButton}>
//                         <Text style={styles.closeButtonText}>Cerrar</Text>
//                     </TouchableOpacity>
//                 </View>
//             </View>
//         </Modal>
//     );
// };

