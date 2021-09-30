import React from 'react'
import { useForm } from 'react-hook-form'

const Login = () => {
    const { login, handleSubmit } = useForm();
    return (
        <form >
            <div className = 'form-control'>
             <label>Username: </label>
             <input
            type='text'
            placeholder='Username' ref = {login}
            />
            </div>

            <div className = 'form-control'>
            <label>Password: </label>
            <input
            type='text'
            placeholder='Password' ref = {login}
            />
            </div>

            <input type='submit' value='Login' className='btn btn-block' />
            </form>
    )
}

export default Login
