import React from 'react'
import { Text, TouchableOpacity } from 'react-native'


interface PorpsBaseButton {
    title: string
    classNameContainer?: string
    className?: string
    onPress: ()=>void
}


export const BaseButton = ({ title, className, onPress, classNameContainer }: PorpsBaseButton) => {
  return (
    <TouchableOpacity onPress={()=>onPress()} className={`bg-slate-600 rounded-md items-center justify-center my-4 ${classNameContainer}`} >
        <Text className={`text-white py-4 ${className}`}>{title}</Text>
    </TouchableOpacity>
  )
}
