import React from 'react'
import { TextInput } from 'react-native-gesture-handler';
import { styles } from '../commons/Styles';
import { View } from 'react-native';

interface Props {
    placeholder: string;
    handleSetValues: (name: string, value: string) => void;
    name: string;
    isPassword?: boolean;
}

export const InputComponent = (
    { placeholder, name, handleSetValues, 
        isPassword = false}: Props) => {
    return (
        <View style={styles.input}>
            <TextInput
                placeholder={placeholder}
                keyboardType='default'
                onChangeText={(value) => handleSetValues(name, value)}
                secureTextEntry={isPassword}
            />
        </View>
    )
}
