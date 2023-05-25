import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AuthProvider from './utils/AuthProvider'; 
import CartProvider from './utils/CartProvider'; 

//Pages Imports
import Home from './pages/Home'
import Products from './pages/Products'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Notfound from './pages/Notfound';
import Categories from './pages/Categories';

//Utils Import
import ProtectedRoute from './utils/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Routes>
                <Route element={<ProtectedRoute />} >
                    <Route path='/' exact element={<Home />} />
                    <Route path='/products' exact element={<Products />} />
                    <Route path='/categories' exact element={<Categories />} />
                </Route>
            <Route path='/login' exact element={<Login />} />
            <Route path='/signup' exact element={<Signup />} />
            <Route path='*' element={<Notfound />} />
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
