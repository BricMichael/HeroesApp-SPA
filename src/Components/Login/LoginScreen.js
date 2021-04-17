import React from 'react'

const LoginScreen = ({ history }) => {

    const handleButton = () => {
        history.replace('/')
        // history.push('/')
    }

    return (
        <div className='container mt-5'>
            <h1>Login </h1>
            <hr />

            <button className='btn btn-primary'
                    onClick={ handleButton }
            >
                Login
            </button>
        </div>
    )
}

export default LoginScreen;