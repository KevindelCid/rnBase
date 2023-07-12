import React, { useState } from 'react'
import { View, Text, Button, ActivityIndicator } from 'react-native'
import { supabase } from '../../utils/supabase'
import { logout } from '../../utils'






export const Logout = ({ navigation }: any) => {


    return (
            <Button title={'Logout'} onPress={()=>logout({navigation, supabase})} />
    )
}
