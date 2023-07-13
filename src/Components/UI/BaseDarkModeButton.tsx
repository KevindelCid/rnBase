import React from 'react'

import { Pressable, Text, TouchableOpacity } from "react-native"
import { styled, useColorScheme } from "nativewind";

export const BaseDarkModeButton = () => {
const { colorScheme, toggleColorScheme } = useColorScheme();

    return (
      <TouchableOpacity
        onPress={toggleColorScheme}
        className=" dark:bg-slate-800 w-10"
      >
        <Text
          selectable={false}
          className= "text-black dark:text-white text-2xl "
        >
          {`${colorScheme === "dark" ? "🌙" : "🌞"}`}
        </Text>
      </TouchableOpacity>
  )
}
