


import React, { useEffect, useState } from 'react'
import { supabase } from '../utils/supabase'
import { Session } from '@supabase/supabase-js'


export interface UserProfile {
    username: string,
    avatarUrl: string,
}

export interface UserInfo {
    session: Session | null,
    profile: UserProfile | null
}



export const AuthHook = () => {
    

    const [ userInfo, setUserInfo ] = useState<UserInfo>({ session: null, profile: null })
    const   [ isLoading, setIsLoading ] = useState(false)


    useEffect(()=> {
        setIsLoading(true)
       supabase.auth.getSession().then(({ data: { session } })=>{
        setUserInfo({...userInfo, session})
        setIsLoading(false)

       })

       supabase.auth.onAuthStateChange(( _event, session ) => {
        setUserInfo({ session, profile: null })
        setIsLoading(false)

       })

    }, [])
    
    return {userInfo, isLoading}
}
