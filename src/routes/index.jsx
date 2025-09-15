import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/auth/login.jsx';
import Register from '../pages/Auth/Register.jsx';
import Home from '../pages/Home/Index.jsx';
import PricingPage from '../pages/Home/PricingPlan.jsx';
import FAQ from '../pages/Home/faq.jsx';
const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>

                {/* Auth routes */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                
                {/* Home Group Routes */}
                <Route path="/home">
                    <Route index element={<Home />} /> {/* Renders Home at /home */}
                    <Route path="pricing" element={<PricingPage />} />
                    <Route path="faq" element={<FAQ />} />
                </Route>
                
                {/* Redirect from the root URL to /home */}
                <Route path="/" element={<Navigate to="/home" />} />

            </Routes>
            
        </BrowserRouter>
    )
}

export default AppRoutes;
    