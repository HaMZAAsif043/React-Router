import React from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData();

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4'>
            <h1 className='text-3xl mb-4'>GitHub Profile of {data.login}</h1>
            <img src={data.avatar_url} alt="GitHub Avatar" width={150} className='mx-auto rounded-full mb-4' />

            <p className='text-xl'>Followers: {data.followers}</p>
            <p className='text-xl'>Following: {data.following}</p>
            <p className='text-xl'>Public Repositories: {data.public_repos}</p>
            <p className='text-xl'>Location: {data.location ? data.location : 'No location provided'}</p>
            <p className='text-xl'>Bio: {data.bio ? data.bio : 'No bio available'}</p>

            <a
                href={data.html_url}
                className='inline-block mt-4 text-blue-300 underline'
                target="_blank"
                rel="noopener noreferrer"
            >
                View GitHub Profile
            </a>
        </div>
    );
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/HaMZAAsif043');
    return response.json();
};
