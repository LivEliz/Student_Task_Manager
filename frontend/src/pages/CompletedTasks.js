import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskList from '../components/TaskList';

const CompletedTasks = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await axios.get('http://localhost:5000/api/tasks');
    setTasks(res.data.filter(t => t.status === 'Completed'));
  };

  useEffect(() => { fetchTasks(); }, []);

  const deleteTask = async id => {
    await axios.delete(`http://localhost:5000/api/tasks/${id}`);
    fetchTasks();
  };

  return (
    <TaskList
      tasks={tasks}
      deleteTask={deleteTask}
      // Do NOT pass editTask or markCompleted
    />
  );
};

export default CompletedTasks;
