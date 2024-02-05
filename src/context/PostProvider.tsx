import React, {useReducer} from 'react';
import {UserData} from '../utils/userData';
import PostContext from './PostContext';

const initialState = {
  posts: [...UserData],
};

const postReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return {...state, posts: [action.payload, ...state.posts]};

    case 'UPDATE_POST':
      const updatedPosts = state.posts.map(post =>
        post.id === action.payload.id
          ? {...post, post: {...action.payload.data}}
          : post,
      );
      console.log('updated post-->', updatedPosts, action.payload);
      return {...state, posts: updatedPosts};

    case 'REMOVE_POST':
      const filteredPosts = state.posts.filter(
        post => post.id !== action.payload,
      );
      return {...state, posts: filteredPosts};

    default:
      return state;
  }
};

const PostProvider = ({children}) => {
  const [state, dispatch] = useReducer(postReducer, initialState);

  const addPost = post => {
    dispatch({type: 'ADD_POST', payload: post});
  };

  const updatePost = (id, data) => {
    dispatch({type: 'UPDATE_POST', payload: {id, data}});
  };

  const removePost = id => {
    dispatch({type: 'REMOVE_POST', payload: id});
  };

  return (
    <PostContext.Provider value={{state, addPost, updatePost, removePost}}>
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider;
