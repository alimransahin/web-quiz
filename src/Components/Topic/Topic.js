import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
    const { name, logo, total,id } = topic;
    return (
        <div className="border text-center flex flex-col xl:flex-row bg-green-100 rounded-lg">
            <img className='xl:max-w-[70%]' src={logo} alt="" />
            <div className='p-5 w-full flex flex-row xl:flex-col items-center justify-between xl:justify-center'>
                <h3 className='text-3xl font font-semibold'>{name}</h3>
                <p className='text-xl'>Total Quiz: {total}</p>
                <Link to={`/quizzes/${id}`}><button className='bg-green-800 text-white px-6 py-3 rounded-2xl text-2xl font-semibold'>Start Quiz</button></Link>
            </div>
        </div>
    );
};

export default Topic;