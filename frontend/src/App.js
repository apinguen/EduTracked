import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState} from 'react';

import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  const [message, setMessage] = useState('');
  const [user, setUser] = useState(null);


  
   useEffect(() => {
    fetch('http://127.0.0.1:5000/ping')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => console.error(err));
    
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return unsubscribe;

  }, []);

  return (
      
      <div>
      <h1>{message || "Loading..."}</h1>
      <h1>{user ? `Hello, ${user.email}` : "Not logged in"}</h1>
      </div>
    
  );
}

export default App;
