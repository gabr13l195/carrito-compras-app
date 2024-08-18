import React, { useState } from 'react';
import { Text, View, FlatList, Image } from 'react-native';
import { styles } from '../commons/Styles';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ModalHome } from './ModalHome';

interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    pathImage: string;
}

export const HomeScreen = () => {
    const [showModal, setShowModal] = useState<boolean>(false);


    const products: Product[] = [
        { id: 1, name: 'Audífonos inalámbricos SONY WH-1000XM4', price: 280, stock: 15, pathImage: 'https://ecsonyb2c.vtexassets.com/arquivos/ids/242492-1600-auto?v=637323390039300000&width=1600&height=auto&aspect=true' },
        { id: 2, name: 'Audífonos inalámbricos SONY INZONE H9', price: 275, stock: 12, pathImage: 'https://ecsonyb2c.vtexassets.com/arquivos/ids/250276-1600-auto?v=637920890581300000&width=1600&height=auto&aspect=true' },
        { id: 3, name: 'Audífonos inalámbricos WH-CH720N', price: 185, stock: 12, pathImage: 'https://ecsonyb2c.vtexassets.com/arquivos/ids/252069-1600-auto?v=638199975953370000&width=1600&height=auto&aspect=true' },
        { id: 4, name: 'Audífonos inalámbricos WF-1000XM5', price: 160, stock: 10, pathImage: 'https://ecsonyb2c.vtexassets.com/arquivos/ids/252812-1600-auto?v=638312424987270000&width=1600&height=auto&aspect=true' },
        { id: 5, name: 'Audífonos internos inalámbricos WI-C100', price: 210, stock: 18, pathImage: 'https://ecsonyb2c.vtexassets.com/arquivos/ids/250698-1600-auto?v=637998296220200000&width=1600&height=auto&aspect=true' },
        { id: 6, name: 'Audífonos interno serie EX', price: 20, stock: 50, pathImage: 'https://ecsonyb2c.vtexassets.com/arquivos/ids/159538-1600-auto?v=635973305674300000&width=1600&height=auto&aspect=true' },
    ];

    const renderItem = ({ item }: { item: Product }) => (
        <View style={styles.productItem}>
            <MaterialIcons 
                name="add-box" 
                size={33} color="white" 
                style={styles.addIcon} 
                onPress={()=>setShowModal(!showModal)}/>
            <Image 
                source={{ uri: item.pathImage }} 
                style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
            <Text style={styles.productStock}>Stock: {item.stock}</Text>
        </View>
    );

    return (
        <View style={styles.containerHome}>
            <View style={styles.header}>
                <Text
                    style={styles.titleHome}>
                        PRODUCTOS</Text>
                <MaterialIcons
                    name="shopping-cart"
                    size={45} color="#000"
                    style={styles.cartIcon} 
                    />
            </View>
            <FlatList
                data={products}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.productList}
            />
            <ModalHome isVisible={showModal} setShowModal={()=>setShowModal(!showModal)}/>
        </View>


    );
};

