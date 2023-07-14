import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'
import { ActivityIndicator } from 'react-native'
import { View } from 'react-native'
import { getAllPosts } from '../utils'
import { useDispatch } from 'react-redux'
import { setPosts } from '../Store/slices/postsSlice'
import { useColorScheme } from 'nativewind'
import { useAppSelector } from '../Store/hooks'

export const StartupContainer = ({ navigation }: any) => {
    const { colorScheme, toggleColorScheme, setColorScheme } = useColorScheme();


    const dispatch = useDispatch()
    const theme = useAppSelector(state => state.theme.theme)
    setColorScheme(theme)

    useEffect(() => {
        getAllPosts().then(data => {
            dispatch(setPosts(data))
        }).then(()=> navigation.navigate('SupraExample'))
    }, []);



  return (
    <View>
        <Text>Loading...</Text>
        <ActivityIndicator/>
    </View>
  )
}
