import React from 'react';
interface RepoItemProps {
    repo: any;
}
const RepoItem = (props: RepoItemProps) => {
    return (
        <div className="card">
            <h3>
                <a href={props.repo.html_url}>{props.repo.name}</a>
            </h3>
        </div>
    )
}

export default RepoItem