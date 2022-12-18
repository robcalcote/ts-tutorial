import React, { ReactText } from "react";
import "./styles.css";
import { Todo } from '../model';
import SingleTodo from './SingleTodo';
import { Droppable } from "react-beautiful-dnd";


interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    completedTodos: Todo[];
    setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Todos: React.FC<Props> = ({ todos, setTodos, completedTodos, setCompletedTodos }) => {    
    return (
        <div className="container">
            <Droppable droppableId="TodosList">
                {(provided) => (
                    <div
                        className="todos"
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        <span className="todos__heading">
                            Active Tasks
                        </span>
                        {todos.map(function(todo, index){
                            return <SingleTodo
                                index={index}
                                key={todo.id}
                                todo={todo}
                                todos={todos}
                                setTodos={setTodos}
                            />
                        })}
                    {provided.placeholder}
                    </div>
                )}
            </Droppable>
            <Droppable droppableId="CompletedTodosList">
                {(provided) => (
                    <div 
                        className="todos remove"
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        <span className="todos__heading">
                            Completed Tasks
                        </span>
                        {completedTodos.map(function(todo, index){
                            return <SingleTodo 
                                index={index}
                                key={todo.id}
                                todo={todo}
                                todos={completedTodos}
                                setTodos={setCompletedTodos}
                            />
                        })}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    )
}

export default Todos
