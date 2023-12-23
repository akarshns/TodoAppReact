import './Todosearch.css';
import React from 'react'
import { Button, Form } from 'react-bootstrap';


export const Todosearch = () => {

    const [todo, setTodo] = React.useState('')
    const [todoList, setTodoList] = React.useState([])
    const counterRef = React.useRef(0);


    const handleChange = (e) => {
        setTodo(e.target.value);
    }

    const handleSubmit = () => {
        if (todo.length > 0) {
            counterRef.current = counterRef.current + 1;
            setTodoList([...todoList, {
                id: counterRef.current,
                title: todo,
                isCompleted: false
            }])
            setTodo('')
        }
    }

    const handleDelete = (todo) => {
        const updatedTodoList = todoList.filter((item) => item.id !== todo.id);
        setTodoList(updatedTodoList);
    };

    const handleEdit = (todo) => {
        //handle
    };

    const handleCheck = (todo) => {
        const updatedTodoList = todoList.map((item) =>
            item.id === todo.id ? { ...item, isCompleted: !item.isCompleted } : item
        );
        setTodoList(updatedTodoList);
    };


    return (
        <>
            <div className='todo-search'>
                <div className='search-items'>
                    <Form.Control
                        type="text"
                        placeholder='Enter a Todo'
                        onChange={handleChange}
                        value={todo}
                        required
                    />
                </div>
                <div className='search-items' id='add-button'>
                    <Button onClick={handleSubmit}>ADD</Button>
                </div>
            </div>
            <div className='todo-list' >
                {
                    todoList.map((todo, index) => {
                        return (<div className='todos' key={todo.id}>
                            <input className='todo-items' type='checkbox' onChange={() => handleCheck(todo)} checked={todo.isCompleted} />
                            <span className='todo-items' id='todo-titles'>{todo.title}</span>
                            <Button variant="danger" className='todo-items' onClick={() => handleDelete(todo)}  >DELETE</Button>
                            {/* <Button className='todo-items' onClick={() => handleEdit(todo)} >EDIT</Button> */}
                        </div>)
                    })
                }
            </div>
        </>

    )

}