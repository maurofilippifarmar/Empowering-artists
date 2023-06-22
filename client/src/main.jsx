import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import axios from 'axios'
import Container from './context/Container.jsx'

//create axios instance
export const axiosWithToken = axios.create({
  //baseURL:"http://localhost:4000",
  headers:{
      "Content-Type":"application/json",
      "token":localStorage.getItem("token")
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Container>
    <App />
  </Container>
)
