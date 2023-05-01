import './App.css';
import React, { useState, useEffect } from 'react';
import { Posts } from './components/Posts';

function App() {
  let [posts, setPosts] = useState([])
  
  let fetchUsers = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let data = await response.json()
    setPosts(data)
  }
  
  useEffect(() => {
    fetchUsers()
  },[])
  
  return (
    <Posts posts={posts} />  
  );
}

export default App;  