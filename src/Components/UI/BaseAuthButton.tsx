import React from 'react'
import { BaseButton } from './BaseButton'
import { BaseAuthButtonProps } from '../../interfaces'




export const BaseAuthButton = ({ title, onPress }: BaseAuthButtonProps) => {
  return (
    <BaseButton title={title} onPress={onPress}   />
  )
}
