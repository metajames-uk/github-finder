import React from 'react';
import RepoItem from './RepoItem';

interface ReposProps {
    repos: any
}

const Repos = (props: ReposProps) => {
    return(
        props.repos.map((repo: any) => {
           return <RepoItem repo={repo} key={repo.id} />

        })
    )
}

export default Repos