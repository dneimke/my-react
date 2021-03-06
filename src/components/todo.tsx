import React, { FunctionComponent } from 'react'

interface ITodoProps {
    todo: Todo
}

export interface Todo {
    id: number;
    done: boolean;
    value: string;
}

export const TodoComponent: FunctionComponent<ITodoProps> = (props) => {

    return (
        <div className="card">
            <div className="card-content">
                <div className="level">
                    <div className="level-left">
                        <div className="level-item">
                            <p className={`title ${props.todo.done ? "has-text-grey-light" : ""}`}>{props.todo.value}</p>
                        </div>
                    </div>
                    <div className="level-right">
                        <div className="level-item buttons">
                            <button className={`button has-text-weight-bold ${props.todo.done ? "is-warning" : "is-primary"}`}>{props.todo.done ? "Undo" : "Done"}</button>
                            <button className="button is-danger has-text-weight-bold">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}