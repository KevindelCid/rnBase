import React from 'react'
import { TextInput, View } from 'react-native'

interface PropsBaseInput {
    placeholder: string
    className: string
    value: string
    onChangeText: ()=>void
}


export const BaseInput = ({ placeholder, className, value, onChangeText }: PropsBaseInput) => {
    return (
        <View className={`p-4  ${className}`}>
            <TextInput placeholder={placeholder} value={value} onChangeText={() => onChangeText()} />
        </View>

    )
}
