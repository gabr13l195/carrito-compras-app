import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from '../commons/Styles'

interface Props{
    textButton: string;
    onPress: ()=> void;
}

export const ButtonComponent = ({textButton, onPress}:Props) => {
    return (
        <TouchableOpacity
            onPress={onPress}>
                <Text style={styles.button}>{textButton}</Text>
        </TouchableOpacity>
    )
}
