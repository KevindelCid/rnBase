import { SignUpWithPasswordCredentials } from "@supabase/supabase-js"
import { supabase } from "./supabase"

export interface PropsHandleSignUp {
    credentials: SignUpWithPasswordCredentials,
    supabase: any
    setEmailConfirmation: React.Dispatch<React.SetStateAction<boolean>>
    setError: React.Dispatch<React.SetStateAction<boolean>>
    // setLoading: React.Dispatch<React.SetStateAction<boolean>>
}
export interface PropsHandleLogin {
    credentials: SignUpWithPasswordCredentials,
    supabase: any
    // setEmailConfirmation: React.Dispatch<React.SetStateAction<boolean>>

    // setLoading: React.Dispatch<React.SetStateAction<boolean>>
}



export const signUp = async ({ credentials, supabase, setEmailConfirmation, setError }: PropsHandleSignUp) => {

    if (!('email' in credentials)) return { ok: false, message: "Email is required." }

  
    const { email, password } = credentials
    const { error, data } = await supabase.auth.signUp({ email, password })
    console.log("🚀 ~ file: auth.ts:19 ~ signUp ~ data:", data, JSON.stringify(error))

    if (error) {
        return { ok: false, message: "signup error." }
    }
    else {

       const {error} = await login({credentials, supabase})
       

       if(error?.message === "Email not confirmed"){
         setEmailConfirmation(true)
       }
       if(error?.message === "Invalid login credentials"){
        setError(true)
      }
       
       
        return { ok: true, message: "ok", data }
    }

    

}




export const login = async ({ credentials, supabase }: PropsHandleLogin) => {
   

    if (!('email' in credentials)) return { ok: false, message: "Email is required." }

    const { email, password } = credentials
    const { error, data } = await supabase.auth.signInWithPassword({ email, password })
    console.log("🚀 ~ file: auth.ts:41 ~ login ~ data:", data, "error: ",JSON.stringify(error))
    

    if (error){
      
        return { ok: false, message: "login error.",  error }}
    else {
        return { ok: true, message: "ok", data }
    }
}

export const logout = async ({ navigation, supabase }: any) => {

       const { error, data } = await supabase.auth.signOut()
        navigation?.navigate('Login')
        if(error)
        return { ok: false }
        return { ok: true }
   
}
