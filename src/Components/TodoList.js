import React,{useState, useEffect} from 'react';
import TodoItem from './TodoItem';
import '../assets/css/TodoItem.css';
import todosData from '../assets/data/todoData';

const TodoList = (props)=>{
    const [state, setState] = useState({todos:[]})
        
    // Method 3: Using Lifecycle hooks 
    useEffect(()=>{
        setState({todos:todosData});
    },[])

    useEffect(() => {
       // console.log("Loading")
    },[state.todos])

    const handleChange = (id) => {
                const updatedTodos = state.todos.map( todo => {
                    if (todo.id === id) {
                        todo.completed = !todo.completed
                    }
                    return todo
                })
                setState({...state,
                    todos: updatedTodos
                })
        
            }

        return(
            <div>
                <div className="todo-list">
                    {
                        state.todos.map(item=> <TodoItem key={item.id} item={item} handleChange={handleChange}/>)
                    }
                </div>
            </div>
        )
    }

// class MyRequest extends React.Component { 
//     constructor() {
//         super()
//         this.state = {
//             todos: todosData
//         }
//         this.handleChange = this.handleChange.bind(this)
//     }

            // Method 1: Changing component state directly
//     handleChange(id) {
//         const updatedTodos = this.state.todos.map( todo => {
//             if (todo.id === id) {
//                 todo.completed = !todo.completed
//             }
//             return todo
//         })
//         this.setState({
//             todos: updatedTodos
//         })

//     }

            // Method 2: Initialising Prevstate to keep status of current state and prevent changing the component state directly

//     // handleChange(id) {
//     //     this.setState(prevState => {
//     //         const updatedTodos = prevState.todos.map( todo => {
//     //             if (todo.id === id) {
//     //                 todo.completed = !todo.completed
//     //             }
//     //             return prevState.todo
//     //         })
//     //         return {
//     //             todos: updatedTodos
//     //         }
//     //    })
//     // }

//     render() {
//          const todoItem = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
//         return (
//             <div>
//                 <h1>Request</h1>
//                 <div className="todo-list">
//                     {todoItem}
//                 </div>
//             </div>
//         )
//     }
// }

export default TodoList;