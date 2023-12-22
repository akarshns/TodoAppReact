import './Todosearch.css';
import React from 'react'


export const Todosearch = ()=> {

    const [todo, setTodo] = React.useState('')
    const [todoList, setTodoList] = React.useState([])
    const counterRef = React.useRef(0);


    const handleChange = (e) => {
        setTodo(e.target.value);
    }

    const handleSubmit = () => {
        counterRef.current = counterRef.current + 1;
        setTodoList([...todoList, {
            id: counterRef.current,
            title: todo,
            isCompleted: false
        }])
        setTodo('')
        console.log(todoList);
    }

    const handleDelete = (todo) => {
        const updatedTodoList = todoList.filter((item) => item.id !== todo.id);
        setTodoList(updatedTodoList);
      };
    
      const handleEdit = (todo) => {
      };
    
      const handleCheck = (todo) => {
        const updatedTodoList = todoList.map((item) =>
          item.id === todo.id ? { ...item, isCompleted: !item.isCompleted } : item
        );
        console.log(todoList)
        setTodoList(updatedTodoList);
      };


    return(
        <>
        <div className='todo-search'>
            <div className='search-items'><input type='text' placeholder='search text' onChange={handleChange} value={todo}/></div>
            <div className='search-button'><button onClick={handleSubmit}>ADD</button></div>
        </div>
        <div className='todo-list'>
            {
                todoList.map((todo)=>{
                    return(<div className='todos'>
                        <input className='todo-items' type='checkbox' onChange={()=>handleCheck(todo)} checked={todo.isCompleted}/>
                        <span  className='todo-items'id='todo-titles'>{todo.title}</span>
                        <button  className='todo-items' onClick={()=>handleDelete(todo)}  >DELETE</button>
                        <button  className='todo-items' onClick={()=>handleEdit(todo)} >EDIT</button>
                    </div>)
                })
            }
        </div>
        </>
        
    )

}