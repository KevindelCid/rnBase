import React from 'react'
import { Text, View } from 'react-native'
import { Logout } from '../Auth'
import { SimpleContainer } from '../../Components/Layout'
import { BaseDarkModeButton } from '../../Components/UI'
import { BBetweenView, BText } from '../../Components/Styles'
export const Settings = ({navigation}: any) => {
    return (
        <SimpleContainer>
  
                <BaseDarkModeButton label={true} />

            
            
                <Logout navigation={navigation}/>
            
            </SimpleContainer>
    )
}
