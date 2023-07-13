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
import { BaseButton, BaseDarkModeButton } from '../../Components/UI'
import { BLTitleText, BModal, BText, BTextInput, BXLTitleText } from '../../Components/Styles'



// const StyledText = styled(Text, 'text-black dark:text-slate-200');




export const Login = () => {


    const [mode, setMode] = useState<'login' | 'signUp'>('login')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [emailConfirmation, setEmailConfirmation] = useState(false)
    const [error, setError] = useState(false)

    return (

        <SimpleContainer>
            <BModal modalVisible={emailConfirmation} setModalVisible={setEmailConfirmation} >
                <BXLTitleText>Email verification</BXLTitleText>
                <BText>Please, verify your account, we was send you a email to confirm your account</BText>
                <BaseButton
                    title='I was confirmed my account'
                    onPress={() => handleLogin({ credentials: { email, password }, setLoading, supabase })}
                />
            </BModal>

            <View className="flex-row justify-between pb-4">
                <BXLTitleText>
                    Login
                </BXLTitleText>
                <BaseDarkModeButton />
            </View>

            <BTextInput
                label={"Email"}
                value={email}
                placeholder='email@host.com'
                onChangeText={setEmail} />
            <BTextInput
                label={"Password"}
                secureTextEntry={true}
                value={password}
                placeholder='abc123*'
                onChangeText={setPassword} />


            {error && <BText className='text-red-700' >Invalid login credentials</BText>}


            {loading ? <ActivityIndicator size="large" color="#0000ff" />
                : <View className="my-4 flex-row " style={{ gap: 4 }}>
                    <BaseButton classNameContainer='flex-1' title="Get start" onPress={() => handleSignUp({ credentials: { email, password }, setLoading, setEmailConfirmation, setError, supabase })} />
                    {/* <BaseButton classNameContainer='flex-1' title="Login" onPress={() => handleLogin({ credentials: { email, password }, setLoading, supabase })} /> */}
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

