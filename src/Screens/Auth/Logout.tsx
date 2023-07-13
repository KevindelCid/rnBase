import React, { useState } from 'react'
import { View, Text, Button, ActivityIndicator } from 'react-native'
import { supabase } from '../../utils/supabase'
import { logout } from '../../utils'
import { BaseButton } from '../../Components/UI'






export const Logout = ({ navigation, className }: any) => {


    return (
            <BaseButton  className={className} title={'Logout'} onPress={()=>logout({navigation, supabase})} />
    )
}
