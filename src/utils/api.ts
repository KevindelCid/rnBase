import { supabase } from "./supabase";

export async function getAllPosts() {


    const { data, error } = await supabase.from("posts").select('*').order("created_at", { ascending: false });
    

    if(error) 
    return [];
    else return data
   
   
}

export type Posts = Awaited<ReturnType<typeof getAllPosts>>