import React from 'react'
import { TextInput, View } from "react-native";
import { styled } from "nativewind";
import { BText } from './BText';

interface BTextInputProps {
    value?: string;
    onChangeText: (text: string) => void
    placeholder: string
    secureTextEntry?: boolean
    className?: string
    label: string,
    required?: boolean
}
const baseThemeColorTextInput = "placeholder:text-slate-800 text-black dark:text-white "
export const BContainerTextInput = styled(TextInput, baseThemeColorTextInput);

export const BTextInput = ({ value, onChangeText, placeholder, secureTextEntry, className, label, required=false }: BTextInputProps) => {
    return (
        <View className='flex-col my-4'>
            <BText className='absolute mt-[-10px]'>{required ? `* ${label}` : label}</BText>
            <BContainerTextInput
                className={`border-b-[1px] border-slate-600 ${className && className}`}
                secureTextEntry={secureTextEntry}
                value={value}
                placeholderTextColor={"gray"}
                placeholder={placeholder}
                onChangeText={onChangeText}
            />
        </View>

    )
}




// export const BLTitleTextInput = styled(TextInput, `${baseThemeColorTextInput} `)
// export const BXLTitleTextInput = styled(TextInput, `${baseThemeColorTextInput} `)

