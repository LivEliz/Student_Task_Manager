import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskForm = ({ currentTask, refreshTasks, clearCurrentTask }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    dueDate: '',
    status: 'Pending'
  });

  useEffect(() => {
    if (currentTask) setFormData(currentTask);
  }, [currentTask]);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (currentTask) {
      // Update task
      await axios.put(`http://localhost:5000/api/tasks/${currentTask._id}`, formData);
    } else {
      // Add new task
      await axios.post('http://localhost:5000/api/tasks', formData);
    }
    refreshTasks();
    clearCurrentTask();
    setFormData({ title: '', description: '', dueDate: '', status: 'Pending' });
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        name="title"
        placeholder="Task Title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Task Description"
        value={formData.description}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="dueDate"
        value={formData.dueDate}
        onChange={handleChange}
      />
      <select name="status" value={formData.status} onChange={handleChange}>
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
      </select>

      <button type="submit">{currentTask ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
};

export default TaskForm;
