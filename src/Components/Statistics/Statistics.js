import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Bar } from 'recharts';



const Statistics = () => {
    const data=useLoaderData();
    const quiz = data.data;
    console.log(quiz);
    return (
        <div className='flex my-10 justify-center flex-col xl:flex-row'>
        
            <LineChart  width={500} height={300} data={quiz} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="total" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>
            
            <BarChart className='lg:w-full' width={500} height={300} data={quiz}>
                <XAxis dataKey="name" stroke="#8884d8" />
                <YAxis />
                <Tooltip />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Bar dataKey="total" fill="#8884d8" barSize={30} />
            </BarChart>

        </div>
    );
};

export default Statistics;