import React from 'react';

const TaskList = ({ tasks, deleteTask, editTask, markCompleted }) => {
  return (
    <div>
      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        tasks.map(task => (
          <div className="task-card" key={task._id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p><b>Due:</b> {task.dueDate ? task.dueDate.slice(0, 10) : '—'}</p>
            <p><b>Status:</b> {task.status}</p>

            {/* Show Edit button only if editTask prop is passed */}
            {editTask && <button onClick={() => editTask(task)}>Edit</button>}

            <button onClick={() => deleteTask(task._id)} style={{ backgroundColor: 'red' }}>Delete</button>

            {/* Show Mark Completed button only if markCompleted prop is passed */}
            {markCompleted && task.status !== 'Completed' && (
              <button onClick={() => markCompleted(task._id)} style={{ backgroundColor: 'green' }}>
                Completed
              </button>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;
