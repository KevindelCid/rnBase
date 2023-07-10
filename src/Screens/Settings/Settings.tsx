import React from 'react'
import { Text, View } from 'react-native'
import { Logout } from '../Auth'
export const Settings = ({navigation}: any) => {
    return (
        <View>
            <Text>Settings</Text>
            
            <Logout navigation={navigation}/>
            
            </View>
    )
}
