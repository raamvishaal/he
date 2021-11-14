import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Users from './components/Users';
import Header from './components/Header'
import './App.css';

const App=()=> {
  const[items,setItems]=useState([]);
  const[query,setQuery]=useState('');
  useEffect(()=>{
    const fetchItems=async()=>{
      const results=await axios("https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json");
      setItems(results.data);
      console.log(results.data);
    }
    fetchItems();
  },[])
  return (
  <div>
  <Header/>
  <input onChange={event => setQuery(event.target.value)} placeholder="Search..."/>
  <div className="container">
      <Users items={items} query={query}/>
  </div>
  </div>
    );
}

export default App;
