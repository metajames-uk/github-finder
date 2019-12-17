import { createContext } from 'react';

export interface IContextProps {
    users: any;
    user: any;
    repos: any;
    loading: any;
    searchUsers(text: string): any;
    clearUsers(): any;
    getUser(username: string): any,
    getUserRepos(username: string): any
}

const githubContext = createContext({} as IContextProps);

export default githubContext;