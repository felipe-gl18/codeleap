import { keyboard } from '@testing-library/user-event/dist/keyboard';
import React, { useState } from 'react';

import '../styles/main.css'
import {  useSelector  } from 'react-redux';

export function Post({posts, showEditModal , setPosts, title, content, post, recentPostId, setRecentPostId}){

    const username = useSelector(state => state.users.value);

    function deletePost(){
        let deleteConfirm = window.confirm("Are you sure you want to delete this item?");

        if(deleteConfirm){
            setPosts(posts.filter((postItem) => postItem.id !== post.id));
        }

    }

    function executeShowEditModal(){
        showEditModal();
        setRecentPostId(post.id)
    }


    function handleEditPost(){
        let postsCopy = posts.filter((item) => item.id !== recentPostId);

        setPosts([
            ...postsCopy,
            {
                title: document.getElementById('titleInputEdit').value,
                content: document.getElementById('contentInputEdit').value,
                id: recentPostId}
        ])

        document.getElementById('editModal').style.display = "none"
    }


    return(
        <div className='post'>
            <header>
                <h2>{title}</h2>
                <div className='actions'>
                    {
                        username == post.belongTo ?
                        <><i onClick={deletePost} class="fas fa-trash"></i><i onClick={executeShowEditModal} class="far fa-edit"></i></> : null
                    }
                </div>
            </header>
            <main>
                <p className='author'>@{post.belongTo}</p>
                <p className='content'>{content}</p>
            </main>
        </div>
    );
}