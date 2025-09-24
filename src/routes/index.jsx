import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/auth/login.jsx';
import Register from '../pages/Auth/Register.jsx';
import Home from '../pages/Home/Index.jsx';
import PricingPage from '../pages/Home/PricingPlan.jsx';
import FAQ from '../pages/Home/faq.jsx';
import Dashboard from '../pages/Client/Dashboard.jsx';
import AccessRoute from '../middleware/AccessRoute.jsx';
import Profile from '../pages/Client/Profile.jsx';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                
                <Route path="/home" element={<Home />}>
                    <Route index element={<Home />} />
                    <Route path="pricing" element={<PricingPage />} />
                    <Route path="faq" element={<FAQ />} />
                </Route>

                {/* Login ROUTE */}
                <Route path="/dashboard" element={<AccessRoute><Dashboard /></AccessRoute>} />
                <Route path="/profile" element={<AccessRoute><Profile /></AccessRoute>} />

                <Route path="*" element={<Navigate to="/home" replace />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
