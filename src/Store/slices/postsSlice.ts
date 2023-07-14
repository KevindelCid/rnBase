import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Session } from '@supabase/supabase-js'
import { Database } from '../../db_types'

const initialState: { posts: Database['public']['Tables']['posts']['Row'][] } = {
    posts: [
      {
        content: null,
        created_at: null,
        id: 0,
      },
    ],
  };

export const PostsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
       setPosts: (state, action) => {
            state.posts = [...action.payload]
       },
       addPost: (state, action)=>{
        state.posts = [...action.payload, ...state.posts]
       }

    },
})

// Action creators are generated for each case reducer function
export const { setPosts, addPost } = PostsSlice.actions

export default PostsSlice.reducer