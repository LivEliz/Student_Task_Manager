import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';

const AllTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);

  const fetchTasks = async () => {
    const res = await axios.get('http://localhost:5000/api/tasks');
    setTasks(res.data);
  };

  useEffect(() => { fetchTasks(); }, []);

  const deleteTask = async id => {
    await axios.delete(`http://localhost:5000/api/tasks/${id}`);
    fetchTasks();
  };

  return (
    <div>
      <TaskForm
        currentTask={currentTask}
        refreshTasks={fetchTasks}
        clearCurrentTask={() => setCurrentTask(null)}
      />
      <TaskList tasks={tasks} deleteTask={deleteTask} editTask={setCurrentTask} />
    </div>
  );
};

export default AllTasks;
