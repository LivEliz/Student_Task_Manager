import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// ✅ This line is CRUCIAL — it tells Chart.js how to draw arcs (pie slices)
ChartJS.register(ArcElement, Tooltip, Legend);

const TaskChart = ({ tasks }) => {
    const completed = tasks.filter(t => t.status === 'Completed').length;
    const pending = tasks.filter(t => t.status === 'Pending').length;

    const data = {
        labels: ['Completed', 'Pending'],
        datasets: [
            {
                data: [completed, pending],
                backgroundColor: ['#4caf50', '#f44336'],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div style={{ width: '300px', marginTop: '20px' }}>
            <h3>Task Completion Status</h3>
            <Pie data={data} />
        </div>
    );
};

export default TaskChart;
