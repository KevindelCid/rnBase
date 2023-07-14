import React from 'react'

import Ionicons from 'react-native-vector-icons/dist/Ionicons'
import FeatherIcon from 'react-native-vector-icons/dist/Feather'
import AntDesign from 'react-native-vector-icons/dist/AntDesign'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/dist/Entypo'


interface IconsProps {
    iconSource: string, 
    iconName: string, 
    color?: string, 
    size: number
}

export const Icons = (iconSource: string, iconName: string, color = 'primary', size = 20.5) => {

    switch (iconSource) {
      case 'ionicons':
        return (
          <Ionicons
            name={iconName}
            size={30}
            color={color ? color : "black"}
          />
        )
      case 'feather':
        return (
          <FeatherIcon
            name={iconName}
            size={30}
            color={color ? color : "black"}
          />
        )
  
      case 'antdesign':
        return (
          <AntDesign
            name={iconName}
            size={30}
            color={color ? color : "black"}
          />
        )
  
      case 'MaterialCommunityIconos':
        return (
          <MaterialCommunityIcons
            name={iconName}
            size={30}
            color={color ? color : "black"}
          />
        )
      case 'entypo':
        return (
          <Entypo
            name={iconName}
            size={30}
            color={color ? color : "black"}
          />
        )
      default:
        break
    }
  }