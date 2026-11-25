
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>✦ TaskFlow AI</h2>
        <nav>
          <a className="active" href="#">⌂ Dashboard</a>
          <a href="#">▣ Projects</a>
          <a href="#">▤ Tasks</a>
          <a href="#">♧ Team</a>
          <a href="#">▧ Reports</a>
          <a href="#">⚙ Settings</a>
        </nav>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <input type="search" placeholder="Search projects, tasks..." />
          <span className="avatar">P</span>
        </header>

        <section className="welcome">
          <h1>Welcome back, Santhini</h1>
          <p>Here's what's happening with your projects today.</p>
        </section>

        <section className="stats">
          <div className="stat-card">
            <p>Total Projects</p>
            <h2>24</h2>
          </div>
          <div className="stat-card">
            <p>Total Tasks</p>
            <h2>1,248</h2>
          </div>
          <div className="stat-card">
            <p>Active Members</p>
            <h2>18</h2>
          </div>
          <div className="stat-card">
            <p>Pending Tasks</p>
            <h2>96</h2>
          </div>
        </section>

        <section className="content-grid">
          <div className="panel">
            <h3>Recent Tasks</h3>
            <p>Website Design — Completed</p>
            <p>API Integration — In Progress</p>
            <p>Database Design — Pending</p>
            <p>Responsive UI — In Progress</p>
            <p>Bug Fixing — Pending</p>
          </div>

          <div className="panel">
            <h3>Active Projects</h3>
            <p>Website Launch</p>
            <p>Student App</p>
            <p>Finance UI</p>
            <p>CRM Dashboard</p>
            <p>Data Analytics</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
