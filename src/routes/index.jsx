// AppRoutes.jsx - corrected routes
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Auth from '../middleware/Auth.jsx';
import Login from '../pages/auth/login.jsx';
import Register from '../pages/Auth/Register.jsx';
import Home from '../pages/Home/Index.jsx';
import PricingPage from '../pages/Home/PricingPlan.jsx';
import FAQ from '../pages/Home/faq.jsx';
import Dashboard from '../pages/Client/Dashboard.jsx';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>

                {/* Guest Routes: Login & Register pages (only accessible to non-logged-in users) */}
                <Route path="/login"element={<Auth protectedRoute={false}> <Login /> </Auth> }/>
                <Route path="/register" element={ <Auth protectedRoute={false}><Register /></Auth>}/>
                
                {/* Protected Routes: Dashboard (only accessible to logged-in users) */}
                <Route path="/dashboard" element={<Auth protectedRoute={true}><Dashboard /></Auth>} />
                
                {/* Public Routes: Home, Pricing, FAQ (accessible to everyone) */}
                <Route path="/" element={<Home />}>
                    <Route index element={<Home />} />
                    <Route path="pricing" element={<PricingPage />} />
                    <Route path="faq" element={<FAQ />} />
                </Route>
                
                {/* Fallback and redirect routes */}
                <Route path="*" element={<Navigate to="/" />} />
                
            </Routes>

        </BrowserRouter>
    );
};

export default AppRoutes;