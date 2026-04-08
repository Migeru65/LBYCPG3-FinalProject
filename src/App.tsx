/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from '@/lib/store';
import { Navbar } from '@/components/Navbar';
import { Dashboard } from '@/pages/Dashboard';
import { LogFood } from '@/pages/LogFood';
import { History } from '@/pages/History';
import { Profile } from '@/pages/Profile';
import { About } from '@/pages/About';

export default function App() {
  return (
    <AppProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Navbar />
          <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/log" element={<LogFood />} />
              <Route path="/history" element={<History />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AppProvider>
  );
}

