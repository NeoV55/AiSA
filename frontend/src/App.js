import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from "./Layout";
import NFCCDashboard from './pages/NFCCDashboard';
import VerificationPage from './pages/VerificationPage';
import ForumPage from './pages/ForumPage';
import NewsPage from './pages/NewsPage';
import HomePage from './pages/HomePage';
import HomePageRakyat from './pages/HomePageRakyat';
import LoginPage from './pages/LoginPage';
import TicketPage from './pages/TicketingPage';
import ControlPanelPage from './pages/ControlPanelPage';
import HelpdeskPage from './pages/HelpdeskPage';
import TechSupportForm from './pages/TechSupportForm';
import UserDashboard from './pages/UserDashboard';
import UserSettings from './pages/UserSettings'; 
import SignOutPage from './pages/SignOutPage'; 
import { Chart, registerables } from 'chart.js';
import Header from "../src/assets/components/Header";
import Footer from "../src/assets/components/Footer";
import "./assets/css/styles.css";


// Register chart.js components globally
Chart.register(...registerables);

const App = () => {
    return (
        <Router>
            <Layout>
                <div>
                    <header>
                        <h1>AiSA</h1>
                    </header>
                    <main>
                        <Routes>
                            {/* Define routes here */}
                            <Route path="/" element={<LoginPage />} />
                            <Route path="/nfcc" element={<HomePage />} />
                            <Route path="/rakyat" element={<HomePageRakyat />} />
                            <Route path="/user" element={<UserDashboard />} />
                            <Route path="/dashboard" element={<NFCCDashboard />} />
                            <Route path="/servicemanager" element={<TicketPage />} />
                            <Route path="/cpanel" element={<ControlPanelPage />} />
                            <Route path="/verification" element={<VerificationPage />} />
                            <Route path="/helpdesk" element={<HelpdeskPage />} />
                            <Route path="/techsupport" element={<TechSupportForm />} />
                            <Route path="/forum" element={<ForumPage />} />
                            <Route path="/news" element={<NewsPage />} />
                            <Route path="/settings" element={<UserSettings />} />
                            <Route path="/signout" element={<SignOutPage />} /> 
                        </Routes>
                    </main>
                </div>
            </Layout>    
        </Router>
    );
};

export default App;