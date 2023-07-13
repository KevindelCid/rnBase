import React, { ReactNode } from 'react'
import { View, ScrollView } from 'react-native'
import { BScrollView, BView } from '../Styles/BContainer'

interface Props {
    scroll?: boolean,
    paddingHorizontal?: number,
    children?: ReactNode
}

export const SimpleContainer: React.FC<Props> = ({ scroll = true, paddingHorizontal = 4, children }) => {
    if (scroll) return <BScrollView className={` px-${paddingHorizontal} `}>{children}</BScrollView>
    else return <BView className={` px-${paddingHorizontal}`}>{children}</BView>
}
