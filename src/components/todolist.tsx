import React, { FunctionComponent } from 'react'

interface ITodoListProps { }

export const TodoList: FunctionComponent<ITodoListProps> = ({ }) => {

    return (
        <div>
            <div className="hero is-info">
                <div className="hero-body has-text-centered">
                    <p className="title is-1">Todos</p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    Todos will show up here later
                </div>
            </section>
        </div>
    )
}