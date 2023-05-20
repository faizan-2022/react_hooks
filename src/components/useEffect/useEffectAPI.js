import React, { useEffect, useState } from 'react'
import Loading from './github/Loading';
import GithubUsers from './github/GithubUsers';

const UseEffectAPI = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const getUsers = async () =>{
        try{
        const response = await fetch("https://jsonplaceholder.typicode.com/albums/1/photos");
        setLoading(false);
        setUsers(await response.json());
        }catch(error){
            setLoading(false);
            console.log("My Error is" + error);
        }
        
    }

    useEffect(()=>{
        getUsers();
    },[]);

    if(loading){
        return <Loading/>
    }

    return (
        <>
            <GithubUsers users={users}/>
        </>
    )
}

export default UseEffectAPI
