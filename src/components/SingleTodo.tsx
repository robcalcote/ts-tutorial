import React from "react";
import "./styles.css";

interface Props {
    id: number;
    todo: string;
    isDone: boolean;
}

const SingleTodo: React.FC<Props> = ({ id, todo, isDone }) => {
    if (isDone) {
        return <div >
            <s>{todo}</s>
        </div>
    }
    return <div>
        {todo}
    </div>
}

export default SingleTodo;