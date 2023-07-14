import React, { useEffect } from 'react'

import { Pressable, Text, TouchableOpacity, View } from "react-native"
import { styled, useColorScheme } from "nativewind";
import { Icons } from '../../utils/Components/Icons';
import { useDispatch } from 'react-redux';
import { setTheme } from '../../Store/slices/themeSlice';
import { useAppSelector } from '../../Store/hooks';
import { ActionCreatorWithPayload, AnyAction, Dispatch } from '@reduxjs/toolkit';

interface PropsSelectTheme {
  theme: 'light' | 'dark' | 'system', 
  dispatch: Dispatch<AnyAction>, 
  setTheme: ActionCreatorWithPayload<any, "theme/setTheme">, 
  setColorScheme: any
}


export const selectTheme = ({theme, dispatch, setTheme, setColorScheme}: PropsSelectTheme) => {
  if (theme === 'light') {
    dispatch(setTheme('dark'))
    setColorScheme('dark')
  }
  if (theme === 'dark') {
    dispatch(setTheme('light'))
    setColorScheme('light')
  }
}


export const BaseDarkModeButton = () => {

  const dispatch = useDispatch()
  const theme = useAppSelector(state => state.theme.theme)
  const { colorScheme, setColorScheme } = useColorScheme();

  return (
    <TouchableOpacity
      onPress={() => selectTheme({theme, dispatch, setTheme, setColorScheme})}
      className=" dark:bg-slate-800 w-10"
    >
      {colorScheme === "dark" ? Icons("entypo", "moon", "white") : Icons("feather", "sun", "black")}
    </TouchableOpacity>
  )
}
