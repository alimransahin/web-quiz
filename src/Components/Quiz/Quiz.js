import React from 'react';

const Quiz = ({question}) => {
console.log(question);
    return (
        <li className='my-5'>
            {question.question}
            <ul className='list-disc list-inside'>
                {
                    question.options.map(option=><div><button>
                        <li>
                            {option}
                        </li>
                        </button><br/></div>
                    )
                }
            </ul>
        </li>
    );
};

export default Quiz;