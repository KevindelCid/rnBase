import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, TextInput, Button } from 'react-native'
import { createClient } from "@supabase/supabase-js";
import { supabase } from '../../utils/supabase';
import { Posts, getAllPosts } from '../../utils/api';
import { Logout } from '../Auth';
import { SimpleContainer } from '../../Components/Layout';

export const handleSubmit = async (content: string, posts: any[] | null, setPosts: any) => {

   
    const { data, error } = await supabase.from('posts').insert({ content }).select()
    if (error)
        console.log("🚀 ~ file: SupraExample.tsx:11 ~ handleSubmit ~ error:", error)
    else {
        posts ? setPosts([data[0], ...posts]) : setPosts(data[0])
    }
}



export const SupraExample: React.FC = () => {

    const [posts, setPosts] = useState<Posts>([]);
    const [content, setContent] = useState<string>("")
    useEffect(() => {

        getAllPosts().then(data=> setPosts(data));
    }, []);

   

    return (
        <SimpleContainer>
            <View className='' >
                <Text className='text-slate-900'> Create a post </Text>
                <TextInput value={content} onChangeText={setContent} style={{ borderColor: "black", borderWidth: 1, paddingHorizontal: 10, color: "black" }} placeholder="post..." placeholderTextColor={"gray"} />
                <Button title={"Create a post"} onPress={() => {

                    handleSubmit(content, posts, setPosts)


                    setContent("")
                }} />
            </View>

                <Logout/>

      
            <View>
                <Text style={{ color: "red" }}>Hello! here you can see all posts</Text>
                {posts && posts.map((post) => (
                    <Text style={{ color: "red" }} key={post.id}>{post.content}</Text>
                ))}

            </View>
      
        </SimpleContainer>
    );
}
