import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HomeHeader from '../HomeHeader/HomeHeader';
import Topic from '../Topic/Topic';

const Home = () => {
    const loadData=useLoaderData();
    const topics=loadData.data;
    return (
        <div>
            <HomeHeader></HomeHeader>
            {
                topics.map(topic=><Topic
                key={topic.id}
                topic={topic}
                ></Topic>)
            }
        </div>
    );
};

export default Home;