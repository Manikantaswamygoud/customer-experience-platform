import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Home = lazy(() => import('./components/Home'));
const FlightSearch = lazy(() => import('./components/FlightSearch'));
const Booking = lazy(() => import('./components/Booking'));
const Dashboard = lazy(() => import('./components/Dashboard'));
const Profile = lazy(() => import('./components/Profile'));

function NotFound() {
  return (
    <div className="alert alert-warning">
      404 - Page not found. <Link to="/">Go home</Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container">
            <span className="navbar-brand">Airline CXP</span>
            <div>
              <Link className="btn btn-light m-1" to="/">Home</Link>
              <Link className="btn btn-light m-1" to="/search">Search</Link>
              <Link className="btn btn-light m-1" to="/booking">Booking</Link>
              <Link className="btn btn-light m-1" to="/dashboard">Dashboard</Link>
              <Link className="btn btn-light m-1" to="/profile">Profile</Link>
            </div>
          </div>
        </nav>

        <div className="container mt-4">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<FlightSearch />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </Router>
  );
}

export default App;