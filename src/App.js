import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Dashboard from "./components/dashboard";
import Cart from "./components/Cart";
import { useEffect, useState } from "react";
import axios from "axios";


function App() {
  
const [data,setData]= useState([]);

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Dashboard/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
    </Route>
  ))

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await axios.get('https://boppotech.github.io/react-task-json.github.io/reactjob.json'); // Replace with your API URL
        setData(response.data); // Store fetched data in state
        console.log("New Data",response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  },[])
  return (
    <>
    
    <div className="App">

  <RouterProvider router={router}/>
      </div>
      
      <div style={{color:"black"}}>
        <h2>Descriptions:</h2>
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item.description}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
