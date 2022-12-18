import React from "react";
import "./styles.css";
import { Todo } from '../model';
import SingleTodo from './SingleTodo'


interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Todos: React.FC<Props> = ({ todos, setTodos }) => {    
    return (
        <div className="todos">
            {todos.map(function(todo, i){
                return <SingleTodo 
                    id={i}
                    todo={todo.todo}
                    isDone={false}
                />
            })}
        </div>
    )
}

export default Todos
