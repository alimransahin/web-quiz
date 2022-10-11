import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HomeHeader from '../HomeHeader/HomeHeader';

const Home = () => {
    const {data}=useLoaderData();
    return (
        <div>
            <HomeHeader></HomeHeader>
            <h2>This is Home {data.length}</h2>
        </div>
    );
};

export default Home;