import React, { useState } from 'react';

import '../styles/main.css';
import { Post } from './post';
import {  useSelector  } from 'react-redux';

export function Main({
                    post,
                    setPost, 
                    titleFieldState, 
                    setTitleFieldState, 
                    contentFieldState, 
                    setContentFieldState,
                    recentPostId,
                    setRecentPostId,
                    showEditModal
                }){

    const [btnState, setBtnState] = useState(true);
    const username = useSelector(state => state.users.value);

    function handlePostSubmit(){
        setPost([
            ...post,
            {
                title: document.getElementById('titleInput').value,
                content: document.getElementById('contentInput').value,
                id: Math.random()*300,
                belongTo: username
            }          
        ])

        document.getElementById('titleInput').value = "";
        document.getElementById('contentInput').value = "";

        setContentFieldState(false)
        setTitleFieldState(false)
        setBtnState(true)
    }

    function handleTitleFieldState(e){

        if(e.target.value != ""){
            setBtnState(false)
        }else{
            setBtnState(true)
        }

        e.target.value ? setTitleFieldState(true) : setTitleFieldState(false)
    }

    function handleContentFieldState(e){

        if(e.target.value != ""){
            setBtnState(false)
        }else{
            setBtnState(true)
        }

        e.target.value ? setContentFieldState(true) : setContentFieldState(false)
    }

    return(
        <div className='app'>
            <header>
                <h1>CodeLeap Network</h1>
            </header>
            <main>
                <div className='createPostDiv'>
                    <div className='createPostContent'>
                        <h2>What's on your mind?</h2>
                        
                        <label>Title</label>
                        <input
                            id="titleInput"
                            type="text"
                            placeholder='Hello World'
                            onKeyUp={handleTitleFieldState}
                        />

                        <label>Content</label>
                        <textarea
                            id="contentInput"
                            placeholder='Content here'
                            onKeyUp={handleContentFieldState}
                        /> 

                        <div className='btnDiv'>
                            <button className={`${titleFieldState ? contentFieldState ? 'btnActived':'btnDeactived' : 'btnDeactived'}`} 
                                    onClick={handlePostSubmit}
                                    type='submit'
                                    disabled={btnState}
                            >
                                    ENTER
                            
                            </button>
                        </div>

                    </div>
                </div>

            {
                post.map((item) => (
                    <Post 
                        key={item.id}
                        posts={post}
                        setPosts={setPost}
                        title={item.title}
                        content={item.content}
                        post={item}
                        recentPostId={recentPostId}
                        setRecentPostId={setRecentPostId}
                        showEditModal={showEditModal}
                    />
                ))
            }
    
            </main>
        </div>
    );
}