import React, { useEffect, useState } from 'react';
import Form from './Form';
import Task from './Task';
import ProgressCircle from './ProgressBar';
import './Main.css';

function Main() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('tasks'));

    if (!stored || stored.length === 0) return;

    // Se for string, converte para objeto
    const normalized = stored.map((task) =>
      typeof task === 'string' ? { text: task, isCompleted: false } : task,
    );

    setTasks(normalized);
  }, []);
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedTask = newTask.trim();
    if (trimmedTask === '') {
      alert('Campo de tarefa está vazio!');
      return;
    }

    if (index === -1) {
      addTask(trimmedTask);
    } else {
      editTask(trimmedTask);
    }

    setNewTask('');
  };
  const addTask = (taskText) => {
    // Verifica duplicata
    if (tasks.some((t) => t.text === taskText)) {
      alert('Essa tarefa já existe!');
      return;
    }

    const newTasks = [...tasks, { text: taskText, isCompleted: false }];
    setTasks(newTasks);
  };

  const editTask = (taskText) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].text = taskText;
    setTasks(updatedTasks);
    setIndex(-1);
  };

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleEdit = (e, index) => {
    const taskToEdit = tasks[index].text;
    setNewTask(taskToEdit);
    setIndex(index);
  };

  const handleDelete = (e, index) => {
    const newTask = [...tasks];
    newTask.splice(index, 1);
    setTasks([...newTask]);
  };

  const handleToggleCompleted = (index) => {
    const newTasks = [...tasks];
    newTasks[index].isCompleted = !newTasks[index].isCompleted;
    setTasks(newTasks);
  };

  const completedTasks = tasks.filter((task) => task.isCompleted).length;
  const totalTasks = tasks.length;
  const completionPercentage =
    totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  return (
    <div className="main">
      <h1>Lista de tarefas</h1>
      <Form
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        newTask={newTask}
      />
      <ProgressCircle percentage={completionPercentage} />
      <Task
        tasks={tasks}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleToggleCompleted={handleToggleCompleted}
      />
    </div>
  );
}

export default Main;
