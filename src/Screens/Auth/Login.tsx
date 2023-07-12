import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, ActivityIndicator, Button } from 'react-native'

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { PropsHandleSignUp, login, signUp } from '../../utils'
import type {
    SignInWithPasswordCredentials,
    SignUpWithPasswordCredentials,
} from '@supabase/supabase-js'
import { supabase } from '../../utils/supabase'
import { setAuthentication } from '../../Store/slices/authSlice'
import { useDispatch } from 'react-redux'
import { SimpleContainer } from '../../Components/Layout'
import { PropsCredentialsSignUp } from '../../interfaces'
import { handleLogin, handleSignUp } from './handlers'
import { BaseAuthButton } from '../../Components/UI/BaseAuthButton'
import { BaseButton } from '../../Components/UI'





export const Login = () => {

 
    const [mode, setMode] = useState<'login' | 'signUp'>('login')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)


    return (

        <SimpleContainer>
            <Text>
                Login
            </Text>
            <TextInput
                value={email}
                style={styles.input}
                placeholder='Email'
                autoCapitalize='none'
                onChangeText={text => setEmail(text)} />
            <TextInput
                secureTextEntry={true}
                value={password}
                style={styles.input}
                placeholder='Email'
                autoCapitalize='none'
                onChangeText={text => setPassword(text)} />


            {loading ? <ActivityIndicator size="large" color="#0000ff" />
                : <View className="my-4" style={{ gap: 4 }}>
                    <BaseButton title="Login" onPress={() => handleLogin({ credentials: { email, password }, setLoading, supabase })} />
                    <BaseButton title="Create account" onPress={() => handleSignUp({ credentials: { email, password }, setLoading, supabase })} />
                </View>
            }


        </SimpleContainer>
    )
}

const styles = StyleSheet.create({
    container: {},
    input: {
        borderWidth: 2,
        borderColor: "black",
        color: "black"
    },
})

