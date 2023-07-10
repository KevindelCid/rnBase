import React from 'react'
import { ActivityIndicator, View } from 'react-native'

export const SimpleLoading = () => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1}}>

        <ActivityIndicator/>
    </View>
  )
}
