import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Quizzes = () => {
    const quizzes =useLoaderData();
    const { name, questions,id } = quizzes.data;
    const [right, setRight]=useState([]);
    const [wrong, setWrong]=useState([]);
   
    const checkAnswer = (result)=>{
        console.log(result);
        
    }
    return (
        <div className='w-11/12 mx-auto'>
            <div className="heading">
                <h2 className='text-center text-4xl font-bold my-5'>{name}</h2>
            </div>
            <ul className='list-decimal'>
                {
                    questions.map(question=><Quiz 
                        key={question.id} 
                        question={question}
                        checkAnswer={checkAnswer}
                        ></Quiz>)
                }
            </ul>
        </div>
    );
};

export default Quizzes;