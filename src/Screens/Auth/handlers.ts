import { PropsCredentialsLogin, PropsCredentialsSignUp } from "../../interfaces"
import { login, signUp } from "../../utils"


export const handleSignUp = async ({ credentials, setLoading, supabase, setEmailConfirmation, setError }: PropsCredentialsSignUp) => {
    setLoading(true)
    const signUpResponse = await signUp({ credentials, supabase, setEmailConfirmation, setError })
    setLoading(false)
    return signUpResponse
}

export const handleLogin = async ({ credentials, setLoading, supabase }: PropsCredentialsLogin) => {
    setLoading(true)
    const loginResponse = await login({credentials, supabase })
    setLoading(false)
    return loginResponse
}

