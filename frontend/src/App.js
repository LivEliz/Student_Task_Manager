import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AllTasks from './pages/AllTasks';
import PendingTasks from './pages/PendingTasks';
import CompletedTasks from './pages/CompletedTasks';
import TaskForm from './components/TaskForm';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<AllTasks />} />
          <Route path="/pending" element={<PendingTasks />} />
          <Route path="/completed" element={<CompletedTasks />} />
          <Route path="/add" element={<TaskForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
