import React from 'react';
import { View, Modal, Text, Button, TouchableOpacity } from 'react-native';
import { styles } from '../commons/Styles';

interface Props{
    isVisible: boolean;
    setShowModal: ()=> void;
}

export const ModalHome = ({isVisible, setShowModal}:Props) =>{
    return(
        <Modal visible={isVisible} animationType='fade' transparent={true}>
            <View style={styles.modalContainer}>
                <TouchableOpacity
                    onPress={setShowModal}>
                    <Text>Desde el modal</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}











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

