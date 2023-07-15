import React, { useEffect } from 'react'

import { Pressable, Text, TouchableOpacity, View } from "react-native"
import { styled, useColorScheme } from "nativewind";
import { Icons } from '../../utils/Components/Icons';
import { useDispatch } from 'react-redux';
import { setTheme } from '../../Store/slices/themeSlice';
import { useAppSelector } from '../../Store/hooks';
import { ActionCreatorWithPayload, AnyAction, Dispatch } from '@reduxjs/toolkit';
import { BBetweenView, BText } from '../Styles';

interface PropsSelectTheme {
  theme: 'light' | 'dark' | 'system',
  dispatch: Dispatch<AnyAction>,
  setTheme: ActionCreatorWithPayload<any, "theme/setTheme">,
  setColorScheme: any
}


export const selectTheme = ({ theme, dispatch, setTheme, setColorScheme }: PropsSelectTheme) => {
  if (theme === 'light') {
    dispatch(setTheme('dark'))
    setColorScheme('dark')
  }
  if (theme === 'dark') {
    dispatch(setTheme('light'))
    setColorScheme('light')
  }
}


interface BaseDarkModeButtonProps {
  label: boolean
}

export const BaseDarkModeButton = ({ label }: BaseDarkModeButtonProps) => {

  const dispatch = useDispatch()
  const theme = useAppSelector(state => state.theme.theme)
  const { colorScheme, setColorScheme } = useColorScheme();
  const stylesWithLabel = `w-full border-b-[1px] border-slate-300 dark:border-slate-700`


  return (
    <TouchableOpacity
      onPress={() => selectTheme({ theme, dispatch, setTheme, setColorScheme })}
      className={` dark:bg-slate-800  ${label ? stylesWithLabel : "w-10"}`}
    >
      {label ? <BBetweenView className='flex-row'>
        <BText>Change theme</BText>
        {colorScheme === "dark" ? Icons("entypo", "moon") : Icons("feather", "sun")}
      </BBetweenView> : colorScheme === "dark" ? Icons("entypo", "moon") : Icons("feather", "sun")}

    </TouchableOpacity>
  )
}
