import { SignInWithPasswordCredentials, SignUpWithPasswordCredentials } from "@supabase/supabase-js"
import { PropsHandleSignUp } from "../utils"

export interface AuthFormProps {
    onSignUp: (credentials: SignUpWithPasswordCredentials) => void
    onLogin: (credentials: SignInWithPasswordCredentials) => void
    loading: boolean
}


export interface PropsCredentialsSignUp extends PropsHandleSignUp {
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
}


export interface BaseAuthButtonProps {
    title: string
    onPress: ()=>void
}