import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Quizzes = () => {
    const quizzes =useLoaderData();
    const { name, questions,id } = quizzes.data;
    const [right, setRight]=useState(0);
    const [wrong, setWrong]=useState(0);
   
    const checkAnswer = (status)=>{
        if(status===true){
            setRight(right+1);
        }
        else{
            setWrong(wrong+1);
        }
        
    }
    console.log(right,wrong);
    return (
        <div className='w-11/12 mx-auto'>
            <div className="heading">
                <h2 className='text-center text-4xl font-bold my-5'>{name}</h2><hr/>
            </div>
            <div className="flex my-10 justify-between flex-col sm:flex-row">
                <div className="question p-3">
                    <ul className='list-decimal'>
                        {
                            questions.map(question => <Quiz
                                key={question.id}
                                question={question}
                                checkAnswer={checkAnswer}
                            ></Quiz>)
                        }
                    </ul>
                </div>
                <div className="min-w-max bg-green-200 p-3">
                    <h1 className='text-3xl font-semibold'>Result</h1>
                    <h5 className='text-green-500 text-xl'>Correct Answer:  {right}</h5>
                    <h5 className='text-red-500 text-xl'>Wrong Answer: {wrong}</h5>
                </div>
            </div>
        </div>
    );
};

export default Quizzes;