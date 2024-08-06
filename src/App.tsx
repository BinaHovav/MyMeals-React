import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Calendar from './components/Calendar/Calendar';


const App: React.FC = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/calendar">Calendar</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
