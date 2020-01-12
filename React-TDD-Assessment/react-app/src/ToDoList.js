import React from 'react';
import {useParams} from 'react-router-dom';
import './App.css';

// Page that shows the todo-list of the selected
const ToDoList = (props) => {

    // If it's stateless it should be a functional component 
    // Todo's should render from the Todos Container which in turn renders from the USerID page. 
    let { id, name } = useParams();

    let currentList = props.allTodos.filter(todo => todo.userId == id);

    return (
        <div>
            <h1>{name}</h1>
            {currentList.map(todo => {
                let todoId = `todo-${todo.id}`;
                return (
                    <div>
                        <label htmlFor="checked">{todo.title}</label><input type="checkbox" className="checked" value={todoId} />
                    </div>
                );
            })}                
        </div>
    );
}

export default ToDoList;