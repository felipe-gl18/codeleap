import React from 'react';

import '../styles/signup.css';

import {  Link  } from 'react-router-dom';
import { useDispatch  } from 'react-redux';
import { addUser } from '../redux/features/users';

export function Signup({usernameState, setUsernameState}){

    const dispatch = useDispatch();
    
    function handleUsernameState(e){   
        e.target.value ? setUsernameState(true) : setUsernameState(false);
    }

    function handleUsernameValue(){
        dispatch(addUser(document.getElementById('usernameInput').value));
        document.getElementById('usernameInput').value = "";
    }

    return(
        <div className='signup'>
            <div className='signupContent'>
                <p>Welcome to CodeLeap network!</p>

                <label>Please enter your username</label>
                <input 
                    type="text"
                    id="usernameInput"
                    placeholder="John doe"
                    onKeyUp={handleUsernameState}
                />

                <Link to="/home">
                    <div className='btnDiv'>
                        <button className={`${usernameState ? 'btnActived' : 'btnDeactived'}`} onClick={handleUsernameValue} type='submit'>ENTER</button>
                    </div>
                </Link>
            </div>
        </div>
    );
}