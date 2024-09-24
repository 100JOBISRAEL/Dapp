// src/components/TasksPage.js
import React, { useState } from "react";

const TasksPage = ({ setTonBalance, setGhostBalance }) => {
  // Задачи
  const tasks = [
    { id: 1, description: "Подписаться на канал", reward: { type: "ton", amount: 50 }, completed: false },
    { id: 2, description: "Пригласить друга", reward: { type: "ghost", amount: 20 }, completed: false },
  ];

  const [completedTasks, setCompletedTasks] = useState({});

  const completeTask = (taskId, reward) => {
    if (!completedTasks[taskId]) {
      setCompletedTasks({ ...completedTasks, [taskId]: true });
      if (reward.type === "ton") {
        setTonBalance(prev => prev + reward.amount);
      } else if (reward.type === "ghost") {
        setGhostBalance(prev => prev + reward.amount);
      }
    }
  };

  return (
    <div>
      <h1>Задачи</h1>
      {tasks.map(task => (
        <div key={task.id}>
          <p>{task.description}</p>
          <p>Награда: {task.reward.amount} {task.reward.type}</p>
          <button onClick={() => completeTask(task.id, task.reward)} disabled={completedTasks[task.id]}>
            {completedTasks[task.id] ? "Завершено" : "Выполнить"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default TasksPage;
