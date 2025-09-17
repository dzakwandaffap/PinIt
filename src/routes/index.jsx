// AppRoutes.jsx - corrected routes
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/auth/login.jsx';
import Register from '../pages/Auth/Register.jsx';
import Home from '../pages/Home/Index.jsx';
import PricingPage from '../pages/Home/PricingPlan.jsx';
import FAQ from '../pages/Home/faq.jsx';
import Dashboard from '../pages/Client/Dashboard.jsx';
import AccessRoute from '../middleware/AccessRoute.jsx';
const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>

                {/* Auth Routes */}
                <Route path="/register" element={<Register />}/>
                 <Route path="/login" element={ <Login />}/>

                {/* Home : Logined User */}
                <Route path="/dashboard" element={<AccessRoute><Dashboard /></AccessRoute>} />
                
                {/* Public Routes */}
                <Route path="/" element={<Home />}>
                    <Route index element={<Home />} />
                    <Route path="pricing" element={<PricingPage />} />
                    <Route path="faq" element={<FAQ />} />
                </Route>
                
                {/* Fallback to Public */}
                <Route path="*" element={<Navigate to="/" />} />
                
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;