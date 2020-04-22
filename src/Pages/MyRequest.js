import React from 'react';
import TodoItem from '../Layout/TodoItem';
import '../assets/css/TodoItem.css';
import todosData from '../assets/data/todoData';

class MyRequest extends React.Component { 
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        const updatedTodos = this.state.todos.map( todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        })
        this.setState({
            todos: updatedTodos
        })

    }

    // handleChange(id) {
    //     this.setState(prevState => {
    //         const updatedTodos = prevState.todos.map( todo => {
    //             if (todo.id === id) {
    //                 todo.completed = !todo.completed
    //             }
    //             return todo
    //         })
    //         return {
    //             todos: updatedTodos
    //         }
    //    })
    // }

    render() {
         const todoItem = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
        return (
            <div>
                <h1>Request</h1>
                <div className="todo-list">
                    {todoItem}
                </div>
            </div>
        )
    }
}

export default MyRequest;