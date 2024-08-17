import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../commons/Styles';

interface Props{
    title: String;
}

export const TitleComponent = ({title}:Props) => {
    return (
        <Text style={styles.title}>{title}</Text>
    )
}
