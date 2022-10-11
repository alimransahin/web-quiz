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
            <div className=" w-11/12 mx-auto my-5 grid md:grid-cols-2 gap-10">
                {
                    topics.map(topic => <Topic
                        key={topic.id}
                        topic={topic}
                    ></Topic>)
                }
            </div>
        </div>
    );
};

export default Home;