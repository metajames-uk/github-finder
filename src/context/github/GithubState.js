import React, { useReducer } from 'react';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import { SET_LOADING, SEARCH_USERS, CLEAR_USERS, GET_USER, GET_REPOS } from '../types';

const GithubState = (props) => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false,
    }
    const [state, dispatch] = useReducer(GithubReducer, initialState);

    //Search Users
    const searchUsers = async (text) => {
        setLoading();
        const res = await fetch(
            `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
        );

        let json = await res.json();
        // setUsers(json.items);
        setLoading(false);
        dispatch({
            type: SEARCH_USERS,
            payload: json.items
        })
    };
    // Get User
    const getUser = async (username) => {
        const res = await fetch(
            `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
        );
        let json = await res.json();

        dispatch({
            type: GET_USER,
            payload: json
        })
    };

    // Get Repos
    const getUserRepos = async (username) => {
        setLoading()
        const res = await fetch(
            `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
        );
        let json = await res.json();
        dispatch({
            type: GET_REPOS,
            payload: json
        })
    };


    // Clear User
    const clearUsers = () => dispatch({type: CLEAR_USERS});
    // Set Loading
    const setLoading = () => {
        dispatch({ type: SET_LOADING });
    }

    return <GithubContext.Provider
        value={{
            users: state.users,
            user: state.user,
            repos: state.repos,
            loading: state.loading,
            searchUsers,
            clearUsers,
            getUser,
            getUserRepos
        }}
    >
        {props.children}
    </GithubContext.Provider>
}

export default GithubState