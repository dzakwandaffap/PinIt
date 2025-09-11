import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/auth/login.jsx';
import Register from '../pages/Auth/Register.jsx';
import Home from '../pages/Home/Index.jsx';
const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                

                {/* base default route */}
                <Route path="/" element={<Navigate to="/login" />} />
                
                {/* Auth route */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                
                {/* Home Page */}
                <Route path="/home" element={<Home />} />
                    
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;
    