import { useEffect, useState } from 'react';
import Config from './config/Config';
import './App.css';
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth';
import { login, logout } from './store/AuthSlice';
import { Header,Footer } from './components/index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .catch((error) => {
        console.error('Error fetching current user:', error);
        dispatch(logout());
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  return !loading ? (
    <BrowserRouter >
      <div className="bg-gray-500 h-screen w-full flex  flex-col gap-8 text-white">
        <Routes>
          <Route path="/" element={<Header />} />
       
        </Routes>
        <Footer  />
      </div>
    </BrowserRouter>
  ) : (
    <div>Loading...</div>
  );
}

export default App;
