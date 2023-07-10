import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, ActivityIndicator, Button } from 'react-native'

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

import type {
    SignInWithPasswordCredentials,
    SignUpWithPasswordCredentials,
} from '@supabase/supabase-js'
import { supabase } from '../../utils/supabase'
import { setAuthentication } from '../../Store/slices/authSlice'
import { useDispatch } from 'react-redux'
import { SimpleContainer } from '../../Components/Layout'


interface AuthFormProps {
    onSignUp: (credentials: SignUpWithPasswordCredentials) => void
    onLogin: (credentials: SignInWithPasswordCredentials) => void
    loading: boolean
}



export const Login = () => {

    const dispatch = useDispatch()

    const [mode, setMode] = useState<'login' | 'signUp'>('login')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    // const [loading, setLoading] = useState(false)
   

    const handleSignUp = async (credentials: SignUpWithPasswordCredentials) => {

        if(!('email' in credentials)) return
        setLoading(true)
        const { email, password } = credentials
        const { error, data } = await supabase.auth.signUp({email, password})

        if(error) 
        console.log("🚀 ~ file: Login.tsx:52 ~ handleSignUp ~ error:", error)
        
        setLoading(false)

    }


    const handleLogin = async (credentials: SignUpWithPasswordCredentials) => {
        if(!('email' in credentials)) return
        setLoading(true)
        const { email, password } = credentials
        const { error, data } = await supabase.auth.signInWithPassword({email, password})

        if(error) 
        console.log("🚀 ~ file: Login.tsx:52 ~ handleSignUp ~ error:", error)
        else {
            // dispatch(setAuthentication(true))
            // navigation.navigate("SupraExample")
        }
        setLoading(false)
    }






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
                : <>
                    <Button title="Login" onPress={()=>handleLogin({  email, password})} />
                    <Button title="Create account" onPress={()=>handleSignUp({ email, password })} />
                </>
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

