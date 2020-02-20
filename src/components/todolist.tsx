import React, { FunctionComponent } from 'react'
import { Todo, TodoComponent } from '.'

interface ITodoListProps { }

export const TodoList: FunctionComponent<ITodoListProps> = ({ }) => {

    const todos: Array<Todo> = [
        {
          "id": Date.now(),
          "value": "Buy milk",
          "done": false
        },
        {
          "id": Date.now()+1,
          "value": "Play with dog",
          "done": true  
        }
      ]

    return (
        <div>
            <div className="hero is-info">
                <div className="hero-body has-text-centered">
                    <p className="title is-1">Todos</p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    {todos.map(todo => (
                        <TodoComponent key={todo.id} todo={todo} />
                    ))}
                </div>
            </section>
        </div>
    )
}