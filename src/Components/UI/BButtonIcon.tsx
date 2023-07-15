import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Icons } from '../../utils/Components/Icons'
import { useColorScheme } from 'nativewind'


interface PorpsBButtonIcon {
    source: string
    iconName: string
    onPress: () => void
}


export const BButtonIcon = ({ source, iconName, onPress }: PorpsBButtonIcon) => {
   
    return (
        <TouchableOpacity onPress={onPress}>
            {Icons(source, iconName)}
        </TouchableOpacity>
    )
}
