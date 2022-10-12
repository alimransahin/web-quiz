import React from 'react';

const data = [
    { 
        id:1,
        question: 'What is the purpose of react router?',
        answer: "ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route. React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package.It provides the synchronous URL on the browser with data that will be displayed on the web page.It maintains the standard structure and behavior of the application and mainly used for developing single page web applications. React Router plays an important role to display multiple views in a single page application.Without React Router, it is not possible to display multiple views in React applications.Most of the social media websites like Facebook, Instagram uses React Router for rendering multiple views."
    },
    { 
        id:2,
        question: 'How does context api work?',
        answer: "The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to 'prop drilling' or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux. React.createContext() is all you need.It returns a consumer and a provider.Provider is a component that as it's names suggests provides the state to its children. It will hold the 'store' and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state."
    },
    { 
        id:3,
        question: 'Details about useref hook in react',
        answer: " The useRef Hook is a function that returns a mutable ref object whose .current property is initialized with the passed argument (initialValue). The returned object will persist for the full lifetime of the component. There are two main uses of useRef that are explained in the following sections: Accessing the DOM nodes or React elements and keeping a mutable variable.ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route. React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package.It provides the synchronous URL on the browser with data that will be displayed on the web page.It maintains the standard structure and behavior of the application and mainly used for developing single page web applications. React Router plays an important role to display multiple views in a single page application.Without React Router, it is not possible to display multiple views in React applications.Most of the social media websites like Facebook, Instagram uses React Router for rendering multiple views."
    },
]
const Blog = () => {
    return (
        <div className='w-11/12 mx-auto my-5'>
        {
            data.map(blog=><div key={blog.id} className='my-5'>
                    <h1 className='text-2xl font-semibold'>{blog.question}</h1>
                    <p className='text.xl'>{blog.answer}</p>
                </div>
            )
        }          
        </div>
    );
};

export default Blog;