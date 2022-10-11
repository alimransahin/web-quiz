import React from 'react';

const HomeHeader = () => {
    return (
        <div className=' bg-emerald-100 '>
            <div className='md:w-11/12 mx-auto flex items-center p-7 justify-between flex-col sm:flex-row '>
                <img className="min-w-1/12" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7lhils7jzrmshjMWBpNson2TRrBcqpY_hGw&usqp=CAU" alt="" />
                <div className="text p-5">A quiz is a form of game or mind sport in which players attempt to answer questions correctly about a certain or variety of subjects.Quizzes can be used as a brief assessment in education and similar fields to measure growth in knowledge, abilities, or skills.They can also be televised for entertainment purposes, often in a game show format.</div>
            </div>
        </div>
    );
};

export default HomeHeader;