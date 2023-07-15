import React from 'react'
import { View } from 'react-native'
import { BBetweenView, BLTitleText } from '../Styles'
import { Icons } from '../../utils/Components/Icons'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ParamListBase } from '@react-navigation/native'
import { BButtonIcon } from '../UI'

interface PropsBHeader {
    navigation: NativeStackNavigationProp<ParamListBase, string, undefined>
}


export const BHeader = ({ navigation }: PropsBHeader) => {
  return (
    <View>
        <BBetweenView className='flex-row'>
            <BLTitleText>Business name</BLTitleText>
            <BButtonIcon iconName='settings' source='feather' onPress={()=>navigation.navigate('Settings')} />
        </BBetweenView>
    </View>
  )
}
