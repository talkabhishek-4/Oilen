import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Layouts
import HomeLayout from './layouts/HomeLayout';
import DashboardLayout from './layouts/DashboardLayout';

// Pages
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import SIFIntelligence from './pages/SIFIntelligence';
import AnalyzeReport from './pages/AnalyzeReport';
import Reports from './pages/Reports';
import HazardTrends from './pages/HazardTrends';

export default function App() {
  return (
    <Routes>
      {/* Landing Shell */}
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
      </Route>

      {/* OilLens Dashboard Console Shell */}
      <Route path="/app" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="intelligence" element={<SIFIntelligence />} />
        <Route path="analyze" element={<AnalyzeReport />} />
        <Route path="reports" element={<Reports />} />
        <Route path="trends" element={<HazardTrends />} />
      </Route>

      {/* Catch-all redirect */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}