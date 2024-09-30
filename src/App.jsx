import { useEffect, useState } from 'react'
import Config from './config/Config'
import './App.css'
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth';
import { login, logout } from './store/AuthSlice';


function App() {


  const [loading,setLoading]=useState(true);
  const dispatch=useDispatch();



  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
     if (userData) {
      dispatch(login({userData}))
     } else {
      dispatch(logout())
     }
    })
    .catch((error) => {
      // Handle any errors (e.g., guest users without account scope)
      console.error('Error fetching current user:', error);
      dispatch(logout()); // Log out in case of an error
    })
      .finally(()=>setLoading(false))
  
  } ,[dispatch])
  
 
  return !loading ? ( <div>
    hello world
  </div>) : (
    <div>Loading...</div>
  )
}

export default App
