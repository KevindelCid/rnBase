import React, { ReactNode} from 'react'
import { View, ScrollView } from 'react-native'

interface Props {
    scroll?: boolean,
    paddingHorizontal?: number,
    children?: ReactNode
}

export const SimpleContainer:React.FC<Props> = ({ scroll = true, paddingHorizontal = 10, children }) => {
    if (scroll) return <ScrollView style={{ paddingHorizontal }}>{children}</ScrollView>
    else return <View style={{ paddingHorizontal }}>{children}</View>
}
