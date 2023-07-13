import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, TextInput, Button } from 'react-native'
import { createClient } from "@supabase/supabase-js";
import { supabase } from '../../utils/supabase';
import { Posts, getAllPosts } from '../../utils/api';
import { Logout } from '../Auth';
import { SimpleContainer } from '../../Components/Layout';
import { BLTitleText, BText, BTextInput, BView, BXLTitleText } from '../../Components/Styles';
import { BaseButton } from '../../Components/UI';

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

        getAllPosts().then(data => setPosts(data));
    }, []);



    return (
        <>

            <SimpleContainer>
                <View className='' >
                    <BXLTitleText>Create a post</BXLTitleText>
                    <BTextInput
                        label={"Post"}
                        value={content}
                        placeholder='Your post...'
                        onChangeText={setContent} />
                    <BaseButton title={"Create a post"} onPress={() => {

                        handleSubmit(content, posts, setPosts)


                        setContent("")
                    }} />
                </View>




                <View>
                    <BLTitleText className={"pb-4"}>Hello! here you can see all posts</BLTitleText>
                    {posts && posts.map((post) => (
                        <BText key={post.id}>{post.content}</BText>
                    ))}

                </View>


            </SimpleContainer>
            <BView className={"absolute bottom-1 right-0 left-0 flex-1"}>
                <Logout className={""} />
            </BView>
        </>
    );
}
