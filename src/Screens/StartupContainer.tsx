import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'
import { ActivityIndicator } from 'react-native'
import { View } from 'react-native'
import { getAllPosts } from '../utils'
import { useDispatch } from 'react-redux'
import { setPosts } from '../Store/slices/postsSlice'
import { useColorScheme } from 'nativewind'
import { useAppSelector } from '../Store/hooks'
import { BCenterView, BLTitleText } from '../Components/Styles'

export const StartupContainer = ({ navigation }: any) => {
  const { colorScheme, toggleColorScheme, setColorScheme } = useColorScheme();


  const dispatch = useDispatch()
  const theme = useAppSelector(state => state.theme.theme)

  useEffect(() => {
    setColorScheme(theme)

    getAllPosts()
      .then(data => {
        dispatch(setPosts(data))
      })
      .then(() => navigation.navigate('SupraExample'))
      .catch(error => {
      });

  }, []);

  return (
    <BCenterView className='flex-1'>
      <BLTitleText>Loading...</BLTitleText>
      <ActivityIndicator color={colorScheme === 'light' ? "black" : 'white'} />
    </BCenterView>
  )
}
