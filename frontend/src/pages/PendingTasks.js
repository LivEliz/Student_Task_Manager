import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskList from '../components/TaskList';

const PendingTasks = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await axios.get('http://localhost:5000/api/tasks');
    setTasks(res.data.filter(t => t.status === 'Pending'));
  };

  useEffect(() => { fetchTasks(); }, []);

  const deleteTask = async id => {
    await axios.delete(`http://localhost:5000/api/tasks/${id}`);
    fetchTasks();
  };

  const markCompleted = async id => {
    await axios.put(`http://localhost:5000/api/tasks/${id}`, { status: 'Completed' });
    fetchTasks();
  };

  return (
    <TaskList
      tasks={tasks}
      deleteTask={deleteTask}
      markCompleted={markCompleted} // pass function to show Completed button
    />
  );
};

export default PendingTasks;
