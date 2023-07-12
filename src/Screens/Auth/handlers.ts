import { PropsCredentialsSignUp } from "../../interfaces"
import { login, signUp } from "../../utils"


export const handleSignUp = ({ credentials, setLoading, supabase }: PropsCredentialsSignUp) => {
    setLoading(true)
    signUp({ credentials, supabase })
    setLoading(false)
}

export const handleLogin = async ({ credentials, setLoading, supabase }: PropsCredentialsSignUp) => {
    setLoading(true)
    login({credentials, supabase})
    setLoading(false)
}

