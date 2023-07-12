import { SignUpWithPasswordCredentials } from "@supabase/supabase-js"
import { supabase } from "./supabase"

export interface PropsHandleSignUp {
    credentials: SignUpWithPasswordCredentials,
    supabase: any
    // setLoading: React.Dispatch<React.SetStateAction<boolean>>
}



export const signUp = async ({ credentials, supabase }: PropsHandleSignUp) => {

    if (!('email' in credentials)) return { ok: false, message: "Email is required." }

  
    const { email, password } = credentials
    const { error, data } = await supabase.auth.signUp({ email, password })

    if (error) {
        return { ok: false, message: "signup error." }
    }
    else {
        return { ok: true, message: "ok", data }
    }

    

}




export const login = async ({ credentials, supabase }: PropsHandleSignUp) => {

    if (!('email' in credentials)) return { ok: false, message: "Email is required." }

    const { email, password } = credentials
    const { error, data } = await supabase.auth.signInWithPassword({ email, password })
    

    if (error)
        return { ok: false, message: "login error." }
    else {
        return { ok: true, message: "ok", data }
    }
}

export const logout = async ({ navigation, supabase }: any) => {

       const { error, data } = await supabase.auth.signOut()
        navigation.navigate('Login')
        if(error)
        return { ok: false }
        return { ok: true }
   
}
