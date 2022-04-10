import React, { useState } from 'react';

import { Main } from '../pages/main';

import {  useSelector  } from 'react-redux';

export function MainComponent(){
    
    const [post, setPost] = useState([]);
    const [titleFieldState, setTitleFieldState] = useState(false);
    const [contentFieldState, setContentFieldState] = useState(false);
    const [recentPostId, setRecentPostId] = useState();
    const username = useSelector(state => state.users.value);

    function showEditModal(){
        document.getElementById('editModal').style.display = "flex"
        document.getElementById('maincontent').style.display = "none" 
    }

    function handleEditPost(){
        let postsCopy = post.filter((item) => item.id !== recentPostId);

        setPost([
            ...postsCopy,
            {
                title: document.getElementById('titleInputEdit').value,
                content: document.getElementById('contentInputEdit').value,
                id: recentPostId,
                belongTo: username
            }
        ])

        console.log(postsCopy)

        document.getElementById('editModal').style.display = "none"
        document.getElementById('maincontent').style.display = "block"
    }

    return(
        <div className='allContent'>
            <div id='maincontent'>
                <Main
                    post={post}
                    setPost={setPost}
                    titleFieldState={titleFieldState}
                    setTitleFieldState={setTitleFieldState}
                    contentFieldState={contentFieldState}
                    setContentFieldState={setContentFieldState}
                    recentPostId={recentPostId}
                    setRecentPostId={setRecentPostId}
                    showEditModal={showEditModal}
                />
            </div>
            <div id="editModal" className='editPostDiv'>
                    <div className='editPostContent'>
                        
                        <div>
                            <h2>Edit item</h2>
                            
                            <label>Title</label>
                            <input
                                id="titleInputEdit"
                                type="text"
                                placeholder='Hello World'
                                
                            />
    
                            <label>Content</label>
                            <textarea
                                id="contentInputEdit"
                                placeholder='Content here'
                            /> 
    
                            <div className='btnDiv'>
                                <button className='btnActived'
                                        onClick={handleEditPost}
                                        type='submit'
                                        
                                >
                                        SAVE
                                
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
        </div>
    );

}