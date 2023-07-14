import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, TextInput, Button } from 'react-native'
import { createClient } from "@supabase/supabase-js";
import { supabase } from '../../utils/supabase';
import { Posts, getAllPosts } from '../../utils/api';
import { Logout } from '../Auth';
import { SimpleContainer } from '../../Components/Layout';
import { BLTitleText, BText, BTextInput, BView, BXLTitleText } from '../../Components/Styles';
import { BaseButton, BaseDarkModeButton } from '../../Components/UI';
import { useAppSelector } from '../../Store/hooks';
import { useDispatch } from 'react-redux';
import { addPost, setPosts } from '../../Store/slices/postsSlice';
import { Database } from '../../db_types';

export const handleSubmit = async (content: string, posts: any[] | null, addPost: any, setPosts: any) => {
    const { data, error } = await supabase.from('posts').insert({ content }).select()
    if (error)
        console.log("🚀 ~ file: SupraExample.tsx:11 ~ handleSubmit ~ error:", error)
    else {


        console.log("🚀 ~ file: SupraExample.tsx:24 ~ handleSubmit ~ data[0]:", data[0])
        posts ? setPosts([data[0], ...posts]) : addPost(data[0])

    }
}



export const SupraExample: React.FC = () => {

    // const [posts, setPosts] = useState<Posts>([]);
    const [content, setContent] = useState<string>("")

    const dispatch = useDispatch()
    const posts = useAppSelector(state => state.posts.posts)
    console.log("🚀 ~ file: SupraExample.tsx:37 ~ posts:", posts)




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
                        handleSubmit(content, posts, (data: Database['public']['Tables']['posts']['Row']) => {
                            dispatch(addPost(data))
                        }, (data: Database['public']['Tables']['posts']['Row'][]) => {
                            dispatch(setPosts(data))
                        })
                        setContent("")
                    }} />
                </View>

                <View>
                    <BLTitleText className={"pb-4"}>Hello! here you can see all posts</BLTitleText>
                    {posts && posts.map((post: { id: React.Key | null | undefined; content: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => (
                        <BText key={post.id}>{post.content}</BText>
                    ))}

                </View>

                        <BaseDarkModeButton/>
            </SimpleContainer>
            <BView className={"absolute bottom-1 right-0 left-0 flex-1"}>
                <Logout className={""} />
            </BView>
        </>
    );
}
