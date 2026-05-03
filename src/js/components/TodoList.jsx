import React, { useState } from "react";

const TodoList = () => {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && task.trim() !== "") {
            setTasks([...tasks, task]);
            setTask("");
        }
    };

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <div className="container">
            <h1>Todo List</h1>

            <input
                type="text"
                placeholder="Añadir tarea"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                onKeyDown={handleKeyDown}
            />

            <ul>
                {tasks.length === 0 ? (
                    <li className="empty">No hay tareas, añadir tareas</li>
                ) : (
                    tasks.map((t, i) => (
                        <li key={i} className="task">
                            {t}
                            <span className="delete" onClick={() => deleteTask(i)}>
                                ❌
                            </span>
                        </li>
                    ))
                )}
            </ul>

            <style>{`
                .container {
                    width: 400px;
                    margin: 40px auto;
                    text-align: center;
                    font-family: Arial;
                }

                input {
                    width: 100%;
                    padding: 10px;
                    font-size: 18px;
                    margin-bottom: 20px;
                }

                ul {
                    list-style: none;
                    padding: 0;
                }

                .task {
                    display: flex;
                    justify-content: space-between;
                    padding: 10px;
                    background: #f2f2f2;
                    margin-bottom: 10px;
                    border-radius: 5px;
                    position: relative;
                }

                .delete {
                    opacity: 0;
                    cursor: pointer;
                    transition: 0.3s;
                }

                .task:hover .delete {
                    opacity: 1;
                }

                .empty {
                    color: gray;
                    font-style: italic;
                }
            `}</style>
        </div>
    );
};

export default TodoList;
