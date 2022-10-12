import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
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
    const [answer, setAnswer] = useState([]);
    const exist = answer.find(i => question.id === i);
    const answerSheet = (id, status) => {
        if (exist) {
            alert('Already Answered this Question')
        }
        else {
            const temp = [...answer, id];
            setAnswer(temp);
            if (status === true) {
                success();
                checkAnswer(true);
            }
            else {
                error();
                checkAnswer(false);
            }

        }
    }

    return (
        <li className='my-5'>
            {question.question} <button onClick={notify}><FontAwesomeIcon icon={faEye} /></button><ToastContainer />
            <ul className='list-disc list-inside'>
                {
                    question.options.map(option => {
                        return <div key={option}>
                            <button onClick={correctAnswer === option ? () => answerSheet(question.id, true) : () => answerSheet(question.id, false)}>
                                <li>
                                    {option}
                                </li>
                            </button><br />
                        </div>
                    }
                    )
                }
            </ul>
        </li>
    );
};

export default Quiz;