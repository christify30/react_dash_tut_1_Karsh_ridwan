import React from 'react';
import TodoList from '../Components/TodoList';
import Title from '../Layout/Title'

const MyRequest = (props)=>{
        return(
            <div>
                <Title title="Request"/>
                <TodoList />
            </div>
        )
    }

export default MyRequest;