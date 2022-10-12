import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Quiz = ({ question, checkAnswer }) => {
    const correctAnswer = question.correctAnswer;
    const notify = () => toast.info(`Correct answer: ${correctAnswer}`, {
        position: "top-center",
        theme: "colored",
    });
    const success = () => toast.success(`Correct answer`, {
        theme: "colored",
    });
    const error = () => toast.error(`Wrong answer`, {
           theme: "colored",
    });
    return (
        <li className='my-5'>
            {question.question} <button onClick={notify}><FontAwesomeIcon icon={faEye} /></button><ToastContainer />
            <ul className='list-disc list-inside'>
                {
                    question.options.map(option => {
                        return <div key={option}>
                            <button onClick={
                                correctAnswer === option ? () => { success(); checkAnswer(true) } : () => { error(); checkAnswer(false) }
                            }>
                                <li>
                                    {option}
                                </li>
                            </button><br/>
                        </div>
                    }
                    )
                }
            </ul>
        </li>
    );
};

export default Quiz;